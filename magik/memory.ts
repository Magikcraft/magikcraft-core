import { DurableMap } from './durableMap'

export const memory = () => {
	const playername = typeof self === 'undefined' ? 'scriptcraft' : self.name
	return DurableMap(`${playername}.memento`)
}
