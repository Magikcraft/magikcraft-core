import server from '../server'

type CraftBukkit = any

class Pokkit {
	private pokkit: any
	server: CraftBukkit
	constructor() {
		this.pokkit = server.getPlugin('Pokkit')
	}
}

export default new Pokkit()
