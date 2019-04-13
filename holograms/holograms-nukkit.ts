export class NukkitHologramManager {
	plugin: any
	constructor() {
		this.plugin = __plugin.server.nukkit
			.getPluginManager()
			.getPlugin('Holograms')
	}

	createHologram({ lines, location }) {
		const CompoundTag = Java.type('cn.nukkit.nbt.tag.CompoundTag')
		const ListTag = Java.type('cn.nukkit.nbt.tag.ListTag')
		const FloatTag = Java.type('cn.nukkit.nbt.tag.FloatTag')
		const DoubleTag = Java.type('cn.nukkit.nbt.tag.DoubleTag')
		const Hologram = Java.type('gt.creeperface.holograms.Hologram')
		const UUID = Java.type('java.util.UUID')
		const ArrayList = Java.type('java.util.ArrayList')

		const hologramId = UUID.randomUUID()
		const nbt = new CompoundTag()
			.putList(
				new ListTag('Pos')
					.add(new DoubleTag('0', location.x))
					.add(new DoubleTag('1', location.y))
					.add(new DoubleTag('2', location.z))
			)
			.putList(
				new ListTag('Motion')
					.add(new DoubleTag('0', 0))
					.add(new DoubleTag('1', 0))
					.add(new DoubleTag('2', 0))
			)
			.putList(
				new ListTag('Rotation')
					.add(new FloatTag('0', location.getYaw()))
					.add(new FloatTag('1', location.getPitch()))
			)
			.putString('hologramId', hologramId)
		const text = new ArrayList()
		lines.map(line => {
			console.log(line) // @DEBUG
			text.add(line)
		})
		console.log(lines) // @DEBUG
		const hologram = new Hologram(hologramId, text)
		this.plugin.getInternalHolograms().putIfAbsent(hologramId, hologram)
		return hologram
	}

	getHolograms() {
		return this.plugin.getInternalHolograms()
	}
}
