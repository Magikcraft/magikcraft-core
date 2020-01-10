import { server } from '..'
import env from './../environment/index'

const worldType = env.IS_NUKKIT
	? Java.type('nl.rutgerkok.pokkit.world.PokkitWorld')
	: Java.type('org.bukkit.World')

const expectedWorldDir = env.IS_NUKKIT ? '/_server_/worlds' : 'worlds'
describe('Server', () => {
	it('Can get worlds', () => {
		const worlds = server.getWorlds()
		expect(worlds).toBeTruthy()
		expect(worlds[0] instanceof worldType).toBe(true)
	})
	it('can get the World directory', () => {
		const worldDir = server.getWorldDir()
		expect(`${worldDir}`).toEqual(expectedWorldDir)
	})
	it('can retrieve a plugin', () => {
		const plugin =
			server.getPlugin('Scriptcraft-ME') ||
			server.getPlugin('scriptcraft')
		expect(plugin).toBeTruthy()
	})
})
