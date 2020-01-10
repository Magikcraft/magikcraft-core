import { gettext } from '../gettext'

export function declaro(itemToDeclare) {
	const allowedItems = {
		APPLE: 'APPLE',
		ELYTRA: 'ELYTRA',
	}

	function getTheThing(item) {
		if (item) {
			return allowedItems[item.toUpperCase()]
		} else {
			return false
		}
	}

	const manifest = item => {
		const MATERIAL = Java.type('org.bukkit.Material')
		const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
		const TheThing = new ItemStack(MATERIAL[item])
		self.getInventory().addItem(TheThing)
		echo(self, gettext('Declaro! you manifest %s', item))
	}

	const thing = getTheThing(itemToDeclare)
	if (thing) {
		manifest(thing)
	}
}
