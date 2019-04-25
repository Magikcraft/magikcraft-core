import { gettext } from '../gettext'

export function radiatum(playerName) {
	const toGlow = __plugin.getServer().getPlayer(playerName)
	if (toGlow !== undefined) {
		toGlow.setGlowing(!toGlow.isGlowing())
		echo(self, gettext('%s is now radioactive!', playerName))
	} else {
		echo(self, gettext('Player %s not online!', playerName))
	}
}
