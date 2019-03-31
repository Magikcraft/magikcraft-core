import * as utils from 'utils'
import * as fs from '../fs'
import { Logger } from '../log'
import server from '../server'
import { Queue } from './queue'

const log = Logger(__filename)

// https://github.com/Multiverse/Multiverse-Core

class MultiverseClass {
	private multiversePlugin: MultiverseCorePlugin
	private worldmanager: WorldManager
	private queue: Queue
	constructor() {
		this.multiversePlugin = server.getPlugin('Multiverse-Core')
		if (!this.multiversePlugin) {
			throw new Error(
				'Multiverse-Core plugin not found! Is it installed on this server?'
			)
		}
		this.worldmanager = this.multiversePlugin.getMVWorldManager()
		this.queue = new Queue()
	}

	public async destroyWorld(worldName: string) {
		log(`Destroying world ${worldName}...`)
		const world = utils.world(worldName)
		if (world) {
			log(`Deleting world ${worldName} from registry...`)
			this.worldmanager.deleteWorld(worldName, true, true)
			log(`Done.`)
		}
		if (this.worldExistsOnDisk(worldName)) {
			log(`Deleting world ${worldName} from disk...`)
			fs.remove(this.getWorldPath(worldName))
			log(`Done.`)
		}
		log(`Successfully Destroyed world ${worldName}.`)

		return new Promise(resolve => setTimeout(() => resolve(), 1))
	}

	public async importWorld(worldName: string) {
		log(`Importing world ${worldName}...`)
		let world, err
		world = utils.world(worldName)
		if (world) {
			log(`World ${worldName} already imported.`)
			return world
		}
		if (!this.worldExistsOnDisk(worldName)) {
			err = `Cannot import world ${worldName}: file not found`
			log('err', err)
			throw new Error(err)
		}
		await this.queue.queueOperation(() =>
			server.executeCommand(`mv import ${worldName} normal`)
		)
		world = utils.world(worldName)
		if (!world) {
			err = `Failed to import world ${worldName}`
			log('err', err)
			throw new Error(err)
		}
		log(`Successfully imported world ${worldName}`)

		return new Promise(resolve => setTimeout(() => resolve(world), 1))
	}

	public async cloneWorld(worldName: string, templateWorldName: string) {
		await this.destroyWorld(worldName)
		log(`Cloning world ${worldName}`)
		const templateWorld = await this.importWorld(templateWorldName)
		if (!templateWorld) {
			log(`Cannot clone ${worldName}. ${templateWorldName} not found.`)
			return
		}

		const cloned = this.multiversePlugin.cloneWorld(
			templateWorldName,
			worldName,
			'normal'
		)
		if (!cloned) {
			log(`Failed to clone world ${templateWorldName}`)
			return
		}
		const world = utils.world(worldName)
		log(`World clone complete for ${worldName}`)

		// Have to do this to ensure world fully built.
		return new Promise(resolve => setTimeout(() => resolve(world), 1))
	}

	public async getMVWorld(name: string) {
		return this.worldmanager.getMVWorld(name)
	}

	public unloadWorld(name: string) {
		return this.worldmanager.unloadWorld(name, true)
	}

	private worldExistsOnDisk(worldName: string) {
		const path = this.getWorldPath(worldName)
		return fs.exists(path)
	}

	private getWorldPath(worldName: string) {
		const worldDir = server.getWorldDir()
		const path = `${worldDir}/${worldName}`
		return path
	}
}

export const Multiverse = new MultiverseClass()

interface MultiverseCorePlugin {
	cloneWorld(
		templateWorldName: string,
		worldName: string,
		mode: 'normal'
	): BukkitWorld
	getMVWorldManager(): WorldManager
}

interface WorldManager {
	deleteWorld(
		worldName: string,
		removeFromConfig: boolean,
		deleteWorldFolder: boolean
	)
	getMVWorld(name: string): BukkitWorld | null
	unloadWorld(name: string, unloadBukkit: boolean): boolean // true if unloaded. False if never loaded
}
