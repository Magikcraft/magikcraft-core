import {doNTimes} from './doNTimes'

export function infierno(quantity: number = 1) {
	quantity = Math.min(quantity, 10)
	const Fireball = Java.type('org.bukkit.entity.Fireball')
	doNTimes(() => self.launchProjectile(Fireball.class), quantity, 300)
}
