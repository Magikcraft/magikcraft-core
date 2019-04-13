import * as environment from '../environment'
import { BukkitServer } from './BukkitServer'
import { NukkitServer } from './NukkitServer'

class Server {
	implementation: NukkitServer | BukkitServer
	constructor() {
		this.implementation = environment.IS_NUKKIT
			? new NukkitServer()
			: new BukkitServer()
	}

	getWorlds() {
		return this.implementation.getWorlds()
	}

	getWorldDir() {
		return this.implementation.getWorldDir()
	}

	executeCommand(command: string) {
		return this.implementation.executeCommand(command)
	}

	getPlugin(name: string) {
		return this.implementation.getPlugin(name)
	}

	isPluginEnabled(name: string) {
		return this.implementation.isPluginEnabled(name)
	}
}

export default new Server()
