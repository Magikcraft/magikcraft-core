import HologramsAPI from '../holograms'
import Server from '../server'
describe('HologramsAPI', () => {
	it('returns a new HologramAPI interface', () => {
		expect(HologramsAPI).toBeTruthy()
		expect(HologramsAPI.createHologram).toBeTruthy()
	})
	it('can create a new Hologram', () => {
		const location = Server.getWorlds()[0].getSpawnLocation()
		expect(typeof location.x).toBe('number')
		const h = HologramsAPI.createHologram({
			lines: ['Hello'],
			location,
		})
		expect(h.getLocation().x).toBe(location.x)
	})
})
