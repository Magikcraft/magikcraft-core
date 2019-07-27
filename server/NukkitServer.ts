export class NukkitServer {
	isBukkit = false
	isNukkit = true
	nukkit: any
	server: any
	constructor() {
		this.nukkit = __plugin.server.nukkit
		this.server = __plugin.server
	}
	executeCommand(command) {
		return this.nukkit.dispatchCommand(this.nukkit.consoleSender, command)
	}
	getPlugin(pluginName) {
		return this.nukkit.getPluginManager().getPlugin(pluginName)
	}
	getBaseDir() {
		return this.nukkit.getDataPath()
	}
	getWorldDir() {
		const dir = this.getBaseDir() + 'worlds/'
		return dir.toString()
	}
	isPluginEnabled(name: string) {
		const plugins = this.nukkit.getPluginManager().getPlugins()
		return Object.keys(plugins).includes(name)
	}
	getWorlds(): World[] {
		return Java.from(this.server.getWorlds())
	}
}
