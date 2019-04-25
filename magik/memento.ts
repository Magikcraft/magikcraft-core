import { gettext } from '../gettext'
import { memory } from './memory'

const defaultKey = 'memory.default'

export function getItem(key = defaultKey) {
	if (memory().containsKey(key)) {
		return memory().get(key)
	} else {
		return undefined
	}
}
export function _setItem(key, value) {
	if (!value) {
		value = key
		key = defaultKey
	}
	memory().put(key, value)
	if (value instanceof Java.type('org.bukkit.Location')) {
		echo(self, gettext('I remembered this place as %s', key))
	} else {
		echo(self, gettext('I remembered %s as %s', value, key))
	}
}
export const memento = _setItem

	// tslint:disable-next-line:align
;(memento as any).setItem = _setItem
// tslint:disable-next-line:align
;(memento as any).getItem = getItem
