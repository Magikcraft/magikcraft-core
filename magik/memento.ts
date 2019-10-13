import { gettext } from '../gettext'
import { memory } from './memory'

const defaultKey = 'memory.default'

export function getItem<T = any>(key = defaultKey): T | undefined {
	if (memory().containsKey(key)) {
		return (memory().get(key) as T)
	} else {
		return undefined
	}
}
export function _setItem<T>(key: string, value: T): T {
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
	return value
}
export const memento = _setItem

	// tslint:disable-next-line:align
;(memento as any).setItem = _setItem
// tslint:disable-next-line:align
;(memento as any).getItem = getItem
