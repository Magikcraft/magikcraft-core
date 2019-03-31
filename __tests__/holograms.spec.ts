import HologramsAPI from '../holograms'
import Server from '../server'

describe('HologramsAPI', () => {
	it('returns a new HologramAPI interface', () => {
		expect(HologramsAPI).toBeTruthy()
		expect(HologramsAPI.createHologram).toBeTruthy()
	})
	it('can create and remove a new Hologram', () => {
		const location = findEmptySpace()
		expect(typeof location.x).toBe('number')
		const atStart = HologramsAPI.getHolograms().length
		const h = HologramsAPI.createHologram({
			lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
			location,
		})
		const now = HologramsAPI.getHolograms().length
		expect(now).toBe(atStart + 1)
		// Clean-up
		h.delete()
		const final = HologramsAPI.getHolograms().length
		expect(final).toBe(atStart)
	})
})

function findEmptySpace() {
	const location = Server.getWorlds()[0].getSpawnLocation()
	location.setY(location.getY() + 4)

	while (
		location.getBlock().getType() != Java.type('org.bukkit.Material').AIR
	) {
		location.setY(location.getY() + 2)
	}
	return location
}
