import * as utils from 'utils'
import { fs } from '../fs'
import { logger } from '../log'
import server from '../server'
import AsyncTask = require('../utils/nukkit/AsyncTask')

const log = logger(__filename)

export class NukkitWorldManager {
	multiworldPlugin: any
	server: any
	constructor() {
		this.server = __plugin.server.nukkit
	}

	getWorldPath(worldName: string) {
		return server.getWorldDir() + worldName
	}

	getMVWorld(worldName: string) {
		const level = this.server.getLevelByName(worldName)
		return level
	}

	async cloneWorld(worldName: string, templateWorldName: string) {
		const src = this.getWorldPath(templateWorldName)
		if (!fs.exists(src)) {
			log(`Cannot clone ${worldName}. ${templateWorldName} not found.`)
			return
		}
		const dst = this.getWorldPath(worldName)
		if (fs.exists(dst)) {
			this.importWorld(worldName)
		} else {
			fs.copyDir(templateWorldName, worldName)
			this.importWorld(worldName)
		}
		const world = utils.world(worldName)
		log(`World clone complete for ${worldName}`)

		// Have to do this to ensure world fully built.
		return new Promise(resolve => setTimeout(() => resolve(world), 1))
	}

	async importAdventureWorld(worldName: string) {
		console.log('Adventure Worlds are not implemented fully yet...')
		return this.importWorld(worldName)
	}

	importWorld(worldName: string) {
		this.server.loadLevel(worldName)
		return Promise.resolve()
	}

	unloadWorld(worldName: string) {
		const level = this.server.getLevelByName(worldName)
		if (level) {
			this.server.unloadLevel(level)
		}
	}

	async destroyWorld(worldName: string) {
		return new Promise(resolve => {
			const path = this.getWorldPath(worldName)
			this.unloadWorld(worldName)
			let error = false
			const destruction = AsyncTask({
				onRun: () => {
					try {
						fs.remove(path)
					} catch (e) {
						log(e)
						error = true
					}
				},
				onCompletion: server => {
					if (error) {
						log('Error while level deleting')
					} else {
						log('Level has been successfully deleted')
					}
					resolve()
				},
			})
			this.server.getScheduler().scheduleAsyncTask(destruction)
		})
	}
}
