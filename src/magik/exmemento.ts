import { memory } from './memory'

export function exmemento(key = 'memory.default') {
	if (memory().containsKey(key)) {
		return memory().get(key)
	}
	return undefined
}
