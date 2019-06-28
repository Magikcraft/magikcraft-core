import { aspecto } from './aspecto'

export function shakti(loc) {
	loc = loc ? loc : aspecto()
	if (loc) {
		loc.world.strikeLightning(loc)
	}
}
