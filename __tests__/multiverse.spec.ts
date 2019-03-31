import Logger from '../log'
import Multiverse from '../multiverse'
const log = Logger(__filename)

describe('@magikcraft/core/multiverse', () => {
	it('Can import a world', async () => {
		// server.executeCommand(`mv silent true`)
		const testWorld = 'mct1-start'
		Multiverse.unloadWorld(testWorld) // unload from memory
		const existingWorld = await Multiverse.getMVWorld(testWorld)
		expect(existingWorld).toBeNull() // assert that it is not loaded
		await Multiverse.importWorld(testWorld)
		const afterImport = await Multiverse.getMVWorld(testWorld)
		expect(afterImport).toBeTruthy() // assert that it is loaded
		// Cleanup
		Multiverse.unloadWorld(testWorld) // unload from memory
		const noWorld = await Multiverse.getMVWorld(testWorld)
		expect(noWorld).toBeNull() // assert that it is not loaded
	})
})
