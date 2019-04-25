export function shakti(loc) {
	loc = loc ? loc : this.aspecto()
	if (loc) {
		loc.world.strikeLightning(loc)
	}
}
