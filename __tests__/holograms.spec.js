"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var holograms_1 = require("../holograms");
var server_1 = require("../server");
var convert_1 = require("../utils/convert");
describe('holograms', function () {
    it('returns a new HologramAPI interface', function () {
        expect(holograms_1.default).toBeTruthy();
        expect(holograms_1.default.createHologram).toBeTruthy();
    });
    it('can create and remove a new Hologram', function () {
        var location = findEmptySpace();
        expect(typeof location.x).toBe('number');
        var atStart = convert_1.sizeOf(holograms_1.default.getHolograms());
        var h = holograms_1.default.createHologram({
            lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
            location: location,
        });
        var now = convert_1.sizeOf(holograms_1.default.getHolograms());
        expect(now).toBe(atStart + 1);
        // Clean-up
        h.delete();
        var final = convert_1.sizeOf(holograms_1.default.getHolograms());
        expect(final).toBe(atStart);
    });
});
function findEmptySpace() {
    var location = server_1.default.getWorlds()[0].getSpawnLocation();
    location.setY(location.getY() + 4);
    while (location.getBlock().getType() != Java.type('org.bukkit.Material').AIR) {
        location.setY(location.getY() + 2);
    }
    return location;
}
