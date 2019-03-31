"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __server = __plugin.server;
var Server = {
    executeCommand: function (command) {
        return __server.dispatchCommand(__server.consoleSender, command);
    },
    getPlugin: function (pluginName) { return __server.getPluginManager().getPlugin(pluginName); },
    getWorldDir: function () { return __server.getWorldContainer(); },
    isPluginEnabled: function (name) { return __server.getPluginManager().isPluginEnabled(name); },
    getWorlds: function () { return Java.from(__server.getWorlds()); },
};
exports.default = Server;
