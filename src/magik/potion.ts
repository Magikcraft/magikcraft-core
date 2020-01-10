// @TODO Nukkit support
const PotionEffect = Java.type('org.bukkit.potion.PotionEffect')
const PotionEffectType = Java.type('org.bukkit.potion.PotionEffectType')
const Color = Java.type('org.bukkit.Color')

export function potion(
	type,
	{ duration = 100, amplifier = 1, color = 'GREEN' }
) {
	const c = Color[color]
	const l = PotionEffectType[type]
	const effect = new PotionEffect(l, duration, amplifier, true, true, c)
	self.addPotionEffect(effect)
}
