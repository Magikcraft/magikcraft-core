import { server } from '..'
import { IS_NUKKIT } from './../environment/index'

const worldType = IS_NUKKIT
	? Java.type('nl.rutgerkok.pokkit.world.PokkitWorld')
	: Java.type('org.bukkit.World')

const expectedWorldDir = IS_NUKKIT ? '/_server_/worlds' : 'worlds'
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
			server.getPlugin('Scriptcraft') || server.getPlugin('scriptcraft')
		expect(plugin).toBeTruthy()
	})
})
