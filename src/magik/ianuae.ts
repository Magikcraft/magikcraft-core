import { gettext } from '../gettext'

export function ianuae(location) {
	if (!location) {
		echo(self, gettext('Nowhere to teleport to...'))
	} else {
		self.teleport(location)
	}
}
