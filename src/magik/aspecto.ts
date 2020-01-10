export function aspecto() {
	return self
		? self
				.getTargetBlock(null, 200)
				.getRelative(0, 1, 0)
				.getLocation()
		: null
}
