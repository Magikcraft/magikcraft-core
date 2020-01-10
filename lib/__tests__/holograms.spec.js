"use strict";
var server = require('../lib').server;
var holograms = require('../lib').holograms;
var convert = require('../lib/convert');
describe('holograms', function () {
    it('returns a new HologramAPI interface', function () {
        expect(holograms).toBeTruthy();
        expect(holograms.createHologram).toBeTruthy();
    });
    it('can create and remove a new Hologram', function () {
        var location = findEmptySpace();
        expect(typeof location.x).toBe('number');
        var atStart = convert.sizeOf(holograms.getHolograms());
        var h = holograms.createHologram({
            lines: ['Jasmine Unit Test', 'of', 'Holographic Displays'],
            location: location,
        });
        var now = convert.sizeOf(holograms.getHolograms());
        expect(now).toBe(atStart + 1);
        // Clean-up
        h.delete();
        var final = convert.sizeOf(holograms.getHolograms());
        expect(final).toBe(atStart);
    });
});
function findEmptySpace() {
    var location = server.getWorlds()[0].getSpawnLocation();
    location.setY(location.getY() + 4);
    while (location.getBlock().getType() != Java.type('org.bukkit.Material').AIR) {
        location.setY(location.getY() + 2);
    }
    return location;
}
