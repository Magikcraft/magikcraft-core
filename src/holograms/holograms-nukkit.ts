import convert from '../utils/convert'

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
		const HologramEntity = Java.type(
			'gt.creeperface.holograms.entity.HologramEntity'
		)
		const PokkitLocation = Java.type('nl.rutgerkok.pokkit.PokkitLocation')
		const UUID = Java.type('java.util.UUID')
		const ArrayList = Java.type('java.util.ArrayList')

		const plugin = this.plugin

		const hologramId = UUID.randomUUID().toString()
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
		const translations = new ArrayList()
		const englishText = new ArrayList()
		translations.add(englishText)
		lines.map(line => {
			englishText.add(line)
		})

		const hologram = new Hologram(hologramId, translations)
		hologram.setUpdateInterval(-1)

		plugin.getInternalHolograms().putIfAbsent(hologramId, hologram)

		const entity = new HologramEntity(
			PokkitLocation.toNukkit(location).chunk,
			nbt
		)
		entity.spawnToAll()

		plugin.update(hologramId, translations)
		return {
			delete: function() {
				return Java.from(
					plugin
						.getServer()
						.getLevels()
						.values()
				).map(level =>
					Java.from(level.getEntities()).map(entity => {
						if (entity instanceof HologramEntity) {
							if (entity.getHologramId().equals(hologramId)) {
								entity.close()
								entity.despawnFromAll()
								plugin.getInternalHolograms().remove(hologramId)
							}
						}
					})
				)
			},
		}
	}

	getHolograms() {
		return convert.HashMapToJSObject(this.plugin.getInternalHolograms())
	}
}
