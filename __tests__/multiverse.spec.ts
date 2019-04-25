import { multiverse } from '..'
import { logger } from '../log'
const log = logger(__filename)

describe('@magikcraft/core/multiverse', () => {
	it('Can import a world', async () => {
		// server.executeCommand(`mv silent true`)
		const testWorld = 'mct1-start'
		multiverse.unloadWorld(testWorld) // unload from memory
		const existingWorld = await multiverse.getMVWorld(testWorld)
		expect(existingWorld).toBeNull() // assert that it is not loaded
		await multiverse.importWorld(testWorld)
		const afterImport = await multiverse.getMVWorld(testWorld)
		expect(afterImport).toBeTruthy() // assert that it is loaded
		// Cleanup
		multiverse.unloadWorld(testWorld) // unload from memory
		const noWorld = await multiverse.getMVWorld(testWorld)
		expect(noWorld).toBeNull() // assert that it is not loaded
	})
})
