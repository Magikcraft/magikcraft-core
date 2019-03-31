import { holograms } from '../holograms'
import { server } from '../server'

describe('holograms', () => {
	it('returns a new HologramAPI interface', () => {
		expect(holograms).toBeTruthy()
		expect(holograms.createHologram).toBeTruthy()
	})
	it('can create and remove a new Hologram', () => {
		const location = findEmptySpace()
		expect(typeof location.x).toBe('number')
		const atStart = holograms.getHolograms().length
		const h = holograms.createHologram({
			lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
			location,
		})
		const now = holograms.getHolograms().length
		expect(now).toBe(atStart + 1)
		// Clean-up
		h.delete()
		const final = holograms.getHolograms().length
		expect(final).toBe(atStart)
	})
})

function findEmptySpace() {
	const location = server.getWorlds()[0].getSpawnLocation()
	location.setY(location.getY() + 4)

	while (
		location.getBlock().getType() != Java.type('org.bukkit.Material').AIR
	) {
		location.setY(location.getY() + 2)
	}
	return location
}
