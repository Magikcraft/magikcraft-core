"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var holograms_1 = require("../holograms");
var server_1 = require("../server");
describe('holograms', function () {
    it('returns a new HologramAPI interface', function () {
        expect(holograms_1.holograms).toBeTruthy();
        expect(holograms_1.holograms.createHologram).toBeTruthy();
    });
    it('can create and remove a new Hologram', function () {
        var location = findEmptySpace();
        expect(typeof location.x).toBe('number');
        var atStart = holograms_1.holograms.getHolograms().length;
        var h = holograms_1.holograms.createHologram({
            lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
            location: location,
        });
        var now = holograms_1.holograms.getHolograms().length;
        expect(now).toBe(atStart + 1);
        // Clean-up
        h.delete();
        var final = holograms_1.holograms.getHolograms().length;
        expect(final).toBe(atStart);
    });
});
function findEmptySpace() {
    var location = server_1.server.getWorlds()[0].getSpawnLocation();
    location.setY(location.getY() + 4);
    while (location.getBlock().getType() != Java.type('org.bukkit.Material').AIR) {
        location.setY(location.getY() + 2);
    }
    return location;
}
