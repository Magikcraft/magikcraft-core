"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
var index_1 = require("./../environment/index");
var worldType = index_1.IS_NUKKIT
    ? Java.type('nl.rutgerkok.pokkit.world.PokkitWorld')
    : '';
var expectedWorldDir = index_1.IS_NUKKIT ? '/_server_/worlds' : '';
describe('Server', function () {
    it('Can get worlds', function () {
        var worlds = server_1.default.getWorlds();
        expect(worlds).toBeTruthy();
        expect(worlds[0] instanceof worldType).toBe(true);
    });
    it('can get the World directory', function () {
        var worldDir = server_1.default.getWorldDir();
        expect("" + worldDir).toEqual(expectedWorldDir);
    });
    it('can retrieve a plugin', function () {
        var plugin = server_1.default.getPlugin('Scriptcraft');
        console.log(plugin); // @DEBUG
        expect(plugin).toBeTruthy();
    });
});
