"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BukkitServer = /** @class */ (function () {
    function BukkitServer() {
        this.isBukkit = true;
        this.isNukkit = false;
        this.server = __plugin.server;
    }
    BukkitServer.prototype.executeCommand = function (command) {
        return this.server.dispatchCommand(this.server.consoleSender, command);
    };
    BukkitServer.prototype.getPlugin = function (pluginName) {
        return this.server.getPluginManager().getPlugin(pluginName);
    };
    BukkitServer.prototype.getWorldDir = function () {
        return this.server.getWorldContainer();
    };
    BukkitServer.prototype.isPluginEnabled = function (name) {
        return this.server.getPluginManager().isPluginEnabled(name);
    };
    BukkitServer.prototype.getWorlds = function () {
        return Java.from(this.server.getWorlds());
    };
    return BukkitServer;
}());
exports.BukkitServer = BukkitServer;
