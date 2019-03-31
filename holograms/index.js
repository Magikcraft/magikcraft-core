"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
var BukkitPlugin = 'HolographicDisplays';
if (!server_1.server.isPluginEnabled(BukkitPlugin)) {
    throw new Error('Holographics Display plugin not found on this server.');
}
var API = com.gmail.filoghost.holographicdisplays.api.HologramsAPI;
exports.holograms = {
    /**
     * Creates a hologram at given location.
     *
     * @param lines an array of lines of text
     * @param location the location where it will appear
     * @return the new hologram created
     */
    createHologram: function (_a) {
        var _b = _a.lines, lines = _b === void 0 ? [] : _b, location = _a.location;
        var hologram = API.createHologram(__plugin, location);
        lines.forEach(function (line) { return hologram.appendTextLine(line); });
        hologram.refreshAll();
        return hologram;
    },
    /**
     * Finds all the holograms created by the plugin.
     *
     * @return the holograms created the plugin. the Collection is a copy
     * and modifying it has no effect on the holograms.
     */
    getHolograms: function () {
        return Java.from(API.getHolograms(__plugin).toArray());
    },
    /**
     * Registers a new placeholder that can be used in holograms created with commands.
     * With this method, you can basically expand the core of HolographicDisplays.
     *
     * @param plugin the owner plugin of the placeholder
     * @param textPlaceholder the text that the placeholder will be associated to (e.g.: "{onlinePlayers}")
     * @param refreshRate the refresh rate of the placeholder, in seconds. Keep in mind that the minimum is 0.1 seconds, and that will be rounded to tenths of seconds
     * @param replacer the implementation that will return the text to replace the placeholder, where the update() method is called every <b>refreshRate</b> seconds
     * @return true if the registration was successfull, false if it was already registered
     */
    registerPlaceholder: function (textPlaceholder, refreshRate, replacer) {
        API.registerPlaceholder(__plugin, textPlaceholder, refreshRate, replacer);
    },
    /**
     * Finds all the placeholders registered by this plugin.
     *
     * @return a collection of placeholders registered by this plugin
     */
    getRegisteredPlaceholders: function () {
        return API.getRegisteredPlaceholders(__plugin);
    },
    /**
     * Unregister a placeholder created by a plugin.
     *
     * @param textPlaceholder the placeholder to remove
     * @return true if found and removed, false otherwise
     */
    unregisterPlaceholder: function (textPlaceholder) {
        return API.unregisterPlaceholder(__plugin, textPlaceholder);
    },
    /**
     * Resets and removes all the placeholders registered by a plugin. This is useful
     * when you have configurable placeholders and you want to remove all of them.
     *
     * @param plugin the plugin that owns the placeholders
     */
    unregisterPlaceholders: function () {
        API.unregisterPlaceholders(__plugin);
    },
    /**
     * Checks if an entity is part of a hologram.
     *
     * @param bukkitEntity the entity to check
     * @return true if the entity is a part of a hologram
     */
    isHologramEntity: function (bukkitEntity) {
        return API.isHologramEntity(bukkitEntity);
    },
};
