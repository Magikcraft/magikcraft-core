"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function locationToJSON(location) {
    var isLocation = location.toString().indexOf('Location') === 0;
    if (isLocation) {
        return {
            Pitch: location.getPitch(),
            World: location.getWorld().getName(),
            X: location.getX(),
            Y: location.getY(),
            Yaw: location.getYaw(),
            Z: location.getZ(),
            type: 'Location',
        };
    }
}
exports.locationToJSON = locationToJSON;
