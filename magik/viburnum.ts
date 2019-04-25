import { gettext } from '../gettext'

export function viburnum(amount = 1, delay = 200) {
	const Snowball = Java.type('org.bukkit.entity.Snowball')

	const snowball = () => self.launchProjectile(Snowball.class)
	snowball()
	for (let i = 1; i < amount; i++) {
		global.setTimeout(snowball, delay * i)
	}
	echo(self, gettext('Snowball!'))
}
