export function locationFromJSON(maybeLocation: any = {}) {
	if (maybeLocation.type === 'Location') {
		const location = maybeLocation

		const here = self.getLocation()
		here.setWorld(__plugin.getServer().getWorld(location.World))
		here.setX(location.X)
		here.setY(location.Y)
		here.setZ(location.Z)
		here.setYaw(location.Yaw)
		here.setPitch(location.Pitch)
		return here
	} else {
		return null
	}
}
