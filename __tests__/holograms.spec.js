"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var convert_1 = require("../utils/convert");
describe('holograms', function () {
    it('returns a new HologramAPI interface', function () {
        expect(__1.holograms).toBeTruthy();
        expect(__1.holograms.createHologram).toBeTruthy();
    });
    it('can create and remove a new Hologram', function () {
        var location = findEmptySpace();
        expect(typeof location.x).toBe('number');
        var atStart = convert_1.sizeOf(__1.holograms.getHolograms());
        var h = __1.holograms.createHologram({
            lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
            location: location,
        });
        var now = convert_1.sizeOf(__1.holograms.getHolograms());
        expect(now).toBe(atStart + 1);
        // Clean-up
        h.delete();
        var final = convert_1.sizeOf(__1.holograms.getHolograms());
        expect(final).toBe(atStart);
    });
});
function findEmptySpace() {
    var location = __1.server.getWorlds()[0].getSpawnLocation();
    location.setY(location.getY() + 4);
    while (location.getBlock().getType() != Java.type('org.bukkit.Material').AIR) {
        location.setY(location.getY() + 2);
    }
    return location;
}
