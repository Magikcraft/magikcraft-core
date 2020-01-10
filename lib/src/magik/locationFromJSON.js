"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function locationFromJSON(maybeLocation) {
    if (maybeLocation === void 0) { maybeLocation = {}; }
    if (maybeLocation.type === 'Location') {
        var location = maybeLocation;
        var here = self.getLocation();
        here.setWorld(__plugin.getServer().getWorld(location.World));
        here.setX(location.X);
        here.setY(location.Y);
        here.setZ(location.Z);
        here.setYaw(location.Yaw);
        here.setPitch(location.Pitch);
        return here;
    }
    else {
        return null;
    }
}
exports.locationFromJSON = locationFromJSON;
