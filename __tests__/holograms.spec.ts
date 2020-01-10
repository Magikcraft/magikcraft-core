import { holograms } from '../lib'
import { server } from '../lib'
import { utils } from '../lib'

describe('holograms', () => {
	it('returns a new HologramAPI interface', () => {
		expect(holograms).toBeTruthy()
		expect(holograms.createHologram).toBeTruthy()
	})
	it('can create and remove a new Hologram', () => {
		var location = findEmptySpace()
		expect(typeof location.x).toBe('number')
		var atStart = utils.convert.sizeOf(holograms.getHolograms())
		var h = holograms.createHologram({
			lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
			location,
		})
		var now = utils.convert.sizeOf(holograms.getHolograms())
		expect(now).toBe(atStart + 1)
		// Clean-up
		h.delete()
		var final = utils.convert.sizeOf(holograms.getHolograms())
		expect(final).toBe(atStart)
	})
})

function findEmptySpace() {
	var location = server.getWorlds()[0].getSpawnLocation()
	location.setY(location.getY() + 4)

	while (
		location.getBlock().getType() != Java.type('org.bukkit.Material').AIR
	) {
		location.setY(location.getY() + 2)
	}
	return location
}
