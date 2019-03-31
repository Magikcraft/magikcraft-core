const __server = __plugin.server
const Server = {
	executeCommand: command =>
		__server.dispatchCommand(__server.consoleSender, command),
	getPlugin: pluginName => __server.getPluginManager().getPlugin(pluginName),
	getWorldDir: () => __server.getWorldContainer(),
	isPluginEnabled: name => __server.getPluginManager().isPluginEnabled(name),
	getWorlds: (): BukkitWorld[] => Java.from(__server.getWorlds()),
}

export default Server
