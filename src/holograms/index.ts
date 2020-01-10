import environment from '../environment'

import { BukkitHologramManager } from './holograms-bukkit'
import { NukkitHologramManager } from './holograms-nukkit'

class HologramManager {
	implementation: NukkitHologramManager | BukkitHologramManager
	constructor() {
		this.implementation = environment.IS_NUKKIT
			? new NukkitHologramManager()
			: new BukkitHologramManager()
	}

	createHologram({ lines, location }) {
		return this.implementation.createHologram({ lines, location })
	}
	getHolograms() {
		return this.implementation.getHolograms()
	}
}

const Holograms = new HologramManager()
export default Holograms
