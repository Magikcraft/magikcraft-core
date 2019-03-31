"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server = __plugin.server;
var Server = /** @class */ (function () {
    function Server() {
        this.executeCommand = function (command) {
            return server.dispatchCommand(__plugin.server.consoleSender, command);
        };
        this.getPlugin = function (pluginName) {
            return __plugin.server.getPluginManager().getPlugin(pluginName);
        };
        this.getWorldDir = function () { return server.getWorldContainer(); };
        this.isPluginEnabled = function (name) { return server.getPluginManager().isPluginEnabled(name); };
        this.getWorlds = function () { return Java.from(server.getWorlds()); };
    }
    return Server;
}());
var ServerInterface = new Server();
exports.default = ServerInterface;
