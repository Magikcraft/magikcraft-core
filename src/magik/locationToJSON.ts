export function locationToJSON(location) {
	const isLocation = location.toString().indexOf('Location') === 0
	if (isLocation) {
		return {
			Pitch: location.getPitch(),
			World: location.getWorld().getName(),
			X: location.getX(),
			Y: location.getY(),
			Yaw: location.getYaw(),
			Z: location.getZ(),
			type: 'Location',
		}
	}
}
