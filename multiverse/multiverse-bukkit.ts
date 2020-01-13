import * as utils from 'utils'
import { fs } from '../fs'
import { logger } from '../log'
import server from '../server'
import * as events from 'events'

const log = logger(__filename)

// https://github.com/Multiverse/Multiverse-Core

export class BukkitWorldManager {
	multiversePlugin: MultiverseCorePlugin
	MVWorldManager: MVWorldManager
	worldListeners: { [worldName: string]: any }

	q: { queueOperation(fn: () => void): Promise<unknown> }
	constructor() {
		this.multiversePlugin = server.getPlugin('Multiverse-Core')
		if (!this.multiversePlugin) {
			throw new Error(
				'Multiverse-Core plugin not found! Is it installed on this server?'
			)
		}
		this.MVWorldManager = this.multiversePlugin.getMVWorldManager()
		this.q = queue()
		this.worldListeners = {}
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
			this.MVWorldManager.deleteWorld(worldName, true, true)
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

	async reloadAdventureWorld(worldName: string): Promise<World> {
		const alreadyImportedWorld = await this.getMVWorld(worldName)
		if (!alreadyImportedWorld) {
			return this.importAdventureWorld(worldName)
		}
		const players = alreadyImportedWorld.getPlayers()
		const safePoint = (await this.getMVWorld('world'))?.getSpawnLocation()
		if (!safePoint) {
			throw new Error('No safe point found to teleport players out of this world!')
		}
		players.stream().toArray().forEach(player => {
			player.teleport(safePoint)
		})
		return new Promise(resolve => setTimeout(() => {
			this.destroyWorld(worldName)
			resolve(this.importAdventureWorld(worldName))
		}, 1000))
	}

	async importAdventureWorld(worldName: string): Promise<World> {
		if (this.worldListeners[worldName]) {
			const alreadyImportedWorld = await this.getMVWorld(worldName)
			if (alreadyImportedWorld) {
				log(`World ${worldName} is already imported. If you want to re-import it, destroy it first.`)
				return alreadyImportedWorld
			}
		}
		const newAdventureWorld = await this.cloneWorld(worldName, `${worldName}.template`)
		this.worldListeners[worldName]?.unregister()
		delete this.worldListeners[worldName]
		this.worldListeners = events.playerChangedWorld(event => {
			if (event.getFrom().getName() !== worldName) {
				return
			}
			const players = newAdventureWorld.getPlayers()
			if (players.length === 0) {
				this.worldListeners[worldName]?.unregister()
				delete this.worldListeners[worldName]
				this.importAdventureWorld(worldName)
			}
		})
		return newAdventureWorld
	}

	async importWorld(worldName: string): Promise<World> {
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

	async cloneWorld(worldName: string, templateWorldName: string): Promise<World> {
		await this.destroyWorld(worldName)
		log(`Cloning world ${worldName}`)
		const templateWorld = await this.importWorld(templateWorldName)
		if (!templateWorld) {
			throw new Error(`Cannot clone ${worldName}. ${templateWorldName} not found.`)
		}

		const cloned = this.multiversePlugin.cloneWorld(
			templateWorldName,
			worldName,
			'normal'
		)
		if (!cloned) {
			throw new Error(`Failed to clone world ${templateWorldName}`)

		}
		const world = utils.world(worldName)
		log(`World clone complete for ${worldName}`)

		// Have to do this to ensure world fully built.
		return new Promise(resolve => setTimeout(() => resolve(world), 1))
	}

	getMVWorld(name: string) {
		return this.MVWorldManager.getMVWorld(name)
	}

	unloadWorld(name: string) {
		return this.MVWorldManager.unloadWorld(name, true)
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
	getMVWorldManager(): MVWorldManager
}

interface MVWorldManager {
	deleteWorld(
		worldName: string,
		removeFromConfig: boolean,
		deleteWorldFolder: boolean
	)
	getMVWorld(name: string): World | null
	unloadWorld(name: string, unloadBukkit: boolean): boolean // true if unloaded. False if never loaded
}
