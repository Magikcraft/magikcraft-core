"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var index_1 = require("./../environment/index");
var worldType = index_1.IS_NUKKIT
    ? Java.type('nl.rutgerkok.pokkit.world.PokkitWorld')
    : Java.type('org.bukkit.World');
var expectedWorldDir = index_1.IS_NUKKIT ? '/_server_/worlds' : 'worlds';
describe('Server', function () {
    it('Can get worlds', function () {
        var worlds = __1.server.getWorlds();
        expect(worlds).toBeTruthy();
        expect(worlds[0] instanceof worldType).toBe(true);
    });
    it('can get the World directory', function () {
        var worldDir = __1.server.getWorldDir();
        expect("" + worldDir).toEqual(expectedWorldDir);
    });
    it('can retrieve a plugin', function () {
        var plugin = __1.server.getPlugin('Scriptcraft-ME') ||
            __1.server.getPlugin('scriptcraft');
        expect(plugin).toBeTruthy();
    });
});
