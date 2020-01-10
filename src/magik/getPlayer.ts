export const getPlayer = player =>
	player ? __plugin.server.getPlayer(player) : null
