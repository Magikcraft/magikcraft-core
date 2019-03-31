const server = __plugin.server
class Server {
	constructor() {}
	executeCommand = command =>
		server.dispatchCommand(__plugin.server.consoleSender, command)
	getPlugin = pluginName =>
		__plugin.server.getPluginManager().getPlugin(pluginName)
	getWorldDir = () => server.getWorldContainer()
	isPluginEnabled = name => server.getPluginManager().isPluginEnabled(name)
	getWorlds = (): BukkitWorld[] => Java.from(server.getWorlds())
}

const ServerInterface = new Server()

export default ServerInterface
