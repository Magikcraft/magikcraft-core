import { gettext } from '../gettext'

const DEFAULT_FIRE_DURATION = 8 // 8 seconds
const TICKS_PER_SECOND = 20

export function incendium(playerName, duration) {
	if (duration === void 0) {
		duration = DEFAULT_FIRE_DURATION
	}
	const toLight = __plugin.getServer().getPlayer(playerName)
	const ticks = duration * TICKS_PER_SECOND
	if (toLight) {
		toLight.setFireTicks(ticks)
	} else {
		echo(self, gettext('Cannot find player %s', playerName))
	}
}
