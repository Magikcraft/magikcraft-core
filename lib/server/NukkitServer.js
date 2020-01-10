"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NukkitServer = /** @class */ (function () {
    function NukkitServer() {
        this.isBukkit = false;
        this.isNukkit = true;
        this.nukkit = __plugin.server.nukkit;
        this.server = __plugin.server;
    }
    NukkitServer.prototype.executeCommand = function (command) {
        return this.nukkit.dispatchCommand(this.nukkit.consoleSender, command);
    };
    NukkitServer.prototype.getPlugin = function (pluginName) {
        return this.nukkit.getPluginManager().getPlugin(pluginName);
    };
    NukkitServer.prototype.getBaseDir = function () {
        return this.nukkit.getDataPath();
    };
    NukkitServer.prototype.getWorldDir = function () {
        var dir = this.getBaseDir() + 'worlds/';
        return dir.toString();
    };
    NukkitServer.prototype.isPluginEnabled = function (name) {
        var plugins = this.nukkit.getPluginManager().getPlugins();
        return Object.keys(plugins).includes(name);
    };
    NukkitServer.prototype.getWorlds = function () {
        return Java.from(this.server.getWorlds());
    };
    return NukkitServer;
}());
exports.NukkitServer = NukkitServer;
