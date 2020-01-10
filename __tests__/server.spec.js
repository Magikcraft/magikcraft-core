"use strict";
var server = require('../lib').server;
var env = require('../lib').environment;
var worldType = env.IS_NUKKIT
    ? Java.type('nl.rutgerkok.pokkit.world.PokkitWorld')
    : Java.type('org.bukkit.World');
var expectedWorldDir = env.IS_NUKKIT ? '/_server_/worlds' : 'worlds';
describe('Server', function () {
    it('Can get worlds', function () {
        var worlds = server.getWorlds();
        expect(worlds).toBeTruthy();
        expect(worlds[0] instanceof worldType).toBe(true);
    });
    it('can get the World directory', function () {
        var worldDir = server.getWorldDir();
        expect("" + worldDir).toEqual(expectedWorldDir);
    });
    it('can retrieve a plugin', function () {
        var plugin = server.getPlugin('Scriptcraft-ME') ||
            server.getPlugin('scriptcraft');
        expect(plugin).toBeTruthy();
    });
});
