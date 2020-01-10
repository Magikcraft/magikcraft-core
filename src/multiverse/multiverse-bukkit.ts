import * as utils from 'utils'
import { fs } from '../fs'
import logger from '../log'
import server from '../server'

const log = logger(__filename)

// https://github.com/Multiverse/Multiverse-Core

export class BukkitWorldManager {
	multiversePlugin: MultiverseCorePlugin
	worldmanager: WorldManager
	q: { queueOperation(fn: () => void): Promise<unknown> }
	constructor() {
		this.multiversePlugin = server.getPlugin('Multiverse-Core')
		if (!this.multiversePlugin) {
			throw new Error(
				'Multiverse-Core plugin not found! Is it installed on this server?'
			)
		}
		this.worldmanager = this.multiversePlugin.getMVWorldManager()
		this.q = queue()
	}

	getWorldPath(worldName: string) {
		const worldDir = server.getWorldDir()
		const path = `${worldDir}/${worldName}`
		return path
	}

	worldExistsOnDisk(worldName: string) {
		const path = this.getWorldPath(worldName)
		return fs.exists(path)
	}

	destroyWorld(worldName: string) {
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

	async importWorld(worldName: string) {
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
		await this.q.queueOperation(() =>
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

	async cloneWorld(worldName: string, templateWorldName: string) {
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

	getMVWorld(name: string) {
		return this.worldmanager.getMVWorld(name)
	}

	unloadWorld(name: string) {
		return this.worldmanager.unloadWorld(name, true)
	}
}

function queue() {
	const PollIntervalMs = 500

	let ready = false

	function doCheck() {
		ready = !!__plugin.server.getPluginCommand('mv')
		if (!ready) {
			log('Not ready to import worlds yet...')
			return setTimeout(doCheck, PollIntervalMs)
		} else {
			log('Ready to operate.')
		}
	}

	doCheck()

	return {
		queueOperation(fn: () => void) {
			return new Promise(resolve => {
				const awaiter = () => {
					if (ready) {
						fn()
						resolve()
					} else {
						log('Delaying operation...')
						setTimeout(awaiter, PollIntervalMs)
					}
				}
				awaiter()
			})
		},
	}
}

interface MultiverseCorePlugin {
	cloneWorld(
		templateWorldName: string,
		worldName: string,
		mode: 'normal'
	): World
	getMVWorldManager(): WorldManager
}

interface WorldManager {
	deleteWorld(
		worldName: string,
		removeFromConfig: boolean,
		deleteWorldFolder: boolean
	)
	getMVWorld(name: string): World | null
	unloadWorld(name: string, unloadBukkit: boolean): boolean // true if unloaded. False if never loaded
}
