import { aspecto } from './aspecto'

export function stella(location) {
	if (location === void 0) {
		location = aspecto()
	}
	const bkColor = org.bukkit.Color
	const bkFireworkEffect = org.bukkit.FireworkEffect
	const bkEntityType = org.bukkit.entity.EntityType
	const randInt = n => Math.floor(Math.random() * n)
	const getColor = i => {
		const colors = [
			bkColor.AQUA,
			bkColor.BLACK,
			bkColor.BLUE,
			bkColor.FUCHSIA,
			bkColor.GRAY,
			bkColor.GREEN,
			bkColor.LIME,
			bkColor.MAROON,
			bkColor.NAVY,
			bkColor.OLIVE,
			bkColor.ORANGE,
			bkColor.PURPLE,
			bkColor.RED,
			bkColor.SILVER,
			bkColor.TEAL,
			bkColor.WHITE,
			bkColor.YELLOW,
		]
		return colors[i]
	}
	const fw = location.world.spawnEntity(location, bkEntityType.FIREWORK)
	const fwm = fw.getFireworkMeta()
	const fwTypes = [
		bkFireworkEffect.Type.BALL,
		bkFireworkEffect.Type.BALL_LARGE,
		bkFireworkEffect.Type.BURST,
		bkFireworkEffect.Type.CREEPER,
		bkFireworkEffect.Type.STAR,
	]
	const type = fwTypes[randInt(5)]
	const r1i = randInt(17)
	const r2i = randInt(17)
	const c1 = getColor(r1i)
	const c2 = getColor(r2i)
	const effectBuilder = bkFireworkEffect
		.builder()
		.flicker(Math.round(Math.random()) === 0)
		.withColor(c1)
		.withFade(c2)
		.trail(Math.round(Math.random()) === 0)
	effectBuilder.with(type)
	const effect = effectBuilder.build()
	fwm.addEffect(effect)
	fwm.setPower(randInt(2) + 1)
	fw.setFireworkMeta(fwm)
}
