"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var holograms_1 = require("../holograms");
var server_1 = require("../server");
describe('HologramsAPI', function () {
    it('returns a new HologramAPI interface', function () {
        expect(holograms_1.default).toBeTruthy();
        expect(holograms_1.default.createHologram).toBeTruthy();
    });
    it('can create a new Hologram', function () {
        var location = server_1.default.getWorlds()[0].getSpawnLocation();
        expect(typeof location.x).toBe('number');
        var h = holograms_1.default.createHologram({
            lines: ['Hello'],
            location: location,
        });
        expect(h.getLocation().x).toBe(location.x);
    });
});
