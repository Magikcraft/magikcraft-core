export class BukkitServer {
	server: any
	isBukkit = true
	isNukkit = false
	constructor() {
		this.server = __plugin.server
	}
	executeCommand(command) {
		return this.server.dispatchCommand(this.server.consoleSender, command)
	}
	getPlugin(pluginName) {
		return this.server.getPluginManager().getPlugin(pluginName)
	}
	getWorldDir() {
		return this.server.getWorldContainer()
	}
	isPluginEnabled(name: string) {
		return this.server.getPluginManager().isPluginEnabled(name)
	}
	getWorlds(): BukkitWorld[] {
		return Java.from(this.server.getWorlds())
	}
}
