"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var lib_3 = require("../lib");
describe('holograms', function () {
    it('returns a new HologramAPI interface', function () {
        expect(lib_1.holograms).toBeTruthy();
        expect(lib_1.holograms.createHologram).toBeTruthy();
    });
    it('can create and remove a new Hologram', function () {
        var location = findEmptySpace();
        expect(typeof location.x).toBe('number');
        var atStart = lib_3.utils.convert.sizeOf(lib_1.holograms.getHolograms());
        var h = lib_1.holograms.createHologram({
            lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
            location: location,
        });
        var now = lib_3.utils.convert.sizeOf(lib_1.holograms.getHolograms());
        expect(now).toBe(atStart + 1);
        // Clean-up
        h.delete();
        var final = lib_3.utils.convert.sizeOf(lib_1.holograms.getHolograms());
        expect(final).toBe(atStart);
    });
});
function findEmptySpace() {
    var location = lib_2.server.getWorlds()[0].getSpawnLocation();
    location.setY(location.getY() + 4);
    while (location.getBlock().getType() != Java.type('org.bukkit.Material').AIR) {
        location.setY(location.getY() + 2);
    }
    return location;
}
