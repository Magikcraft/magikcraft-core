import environment from '../environment'

import { NukkitWorldManager } from './multiworld-nukkit'
import { BukkitWorldManager } from './multiverse-bukkit'
import logger from '../log'

const log = logger(__filename)

class WorldManager {
	implementation: NukkitWorldManager | BukkitWorldManager
	constructor() {
		this.implementation = environment.IS_NUKKIT
			? new NukkitWorldManager()
			: new BukkitWorldManager()
	}

	getMVWorld(worldName: string) {
		return this.implementation.getMVWorld(worldName)
	}

	getWorldPath(worldName: string) {
		return this.implementation.getWorldPath(worldName)
	}

	importWorld(worldName: string) {
		return this.implementation.importWorld(worldName)
	}

	async destroyWorld(worldName: string) {
		return this.implementation.destroyWorld(worldName)
	}

	unloadWorld(worldName: string) {
		return this.implementation.unloadWorld(worldName)
	}
}

const Multiverse = new WorldManager()

export default Multiverse
