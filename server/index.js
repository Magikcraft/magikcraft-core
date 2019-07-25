"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BukkitServer_1 = require("./BukkitServer");
var NukkitServer_1 = require("./NukkitServer");
var Server = /** @class */ (function () {
    function Server() {
        var isNukkit = __plugin.server.pluginManager.getPlugin('Pokkit') != null;
        this.implementation = isNukkit ? new NukkitServer_1.NukkitServer() : new BukkitServer_1.BukkitServer();
    }
    Server.prototype.getBaseDir = function () {
        return this.implementation.getBaseDir();
    };
    Server.prototype.getWorlds = function () {
        return this.implementation.getWorlds();
    };
    Server.prototype.getWorldDir = function () {
        return this.implementation.getWorldDir();
    };
    Server.prototype.executeCommand = function (command) {
        return this.implementation.executeCommand(command);
    };
    Server.prototype.getPlugin = function (name) {
        return this.implementation.getPlugin(name);
    };
    Server.prototype.isPluginEnabled = function (name) {
        return this.implementation.isPluginEnabled(name);
    };
    return Server;
}());
exports.default = new Server();
