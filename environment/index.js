"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
// The various plugins
var pluginManager = __plugin.server.pluginManager;
exports.plugins = {
    // BossBarAPI: pluginManager.getPlugin('BossBarAPI'),
    Pokkit: pluginManager.getPlugin('Pokkit'),
    Scriptcraft: pluginManager.getPlugin('Scriptcraft'),
    ScriptcraftMultiEngine: pluginManager.getPlugin('Scriptcraft-ME'),
};
// IS_POKKIT - when running in the Nukkit Pocket Edition server via the Pokkit plugin
exports.IS_NUKKIT = exports.plugins.Pokkit != null;
exports.IS_BUKKIT = !exports.IS_NUKKIT;
// IS_SCRIPTCRAFT - when using the Scriptcraft plugin
exports.IS_SCRIPTCRAFT = exports.plugins.Scriptcraft != null;
// HAS_BOSSBAR - when the BossBar plugin is loaded
// Test not only for the plugin, but that it's loaded.
exports.BUKKIT_BOSSBAR_TYPE = 'org.bukkit.boss'; // 'org.inventivetalent.bossbar.BossBarAPI'
exports.NUKKIT_BOSSBAR_TYPE = 'io.magikcraft.BossBarAPI.BossBar';
var hasBossBar = true;
var bossBarBukkit = false;
var bossBarNukkit = false;
// Here we test if the plugin is loaded. It can be present but not loaded, so we instantiate it
// to ensure that it really is loaded.
try {
    Java.type(exports.BUKKIT_BOSSBAR_TYPE);
    hasBossBar = true;
    bossBarBukkit = true;
}
catch (e) {
    bossBarBukkit = false;
}
try {
    Java.type(exports.NUKKIT_BOSSBAR_TYPE);
    hasBossBar = true;
    bossBarNukkit = true;
}
catch (e) {
    bossBarNukkit = false;
}
exports.HAS_BOSSBAR = hasBossBar;
exports.HAS_BOSSBAR_BUKKIT = bossBarBukkit;
exports.HAS_BOSSBAR_NUKKIT = bossBarNukkit;
// Holograms
exports.NUKKIT_HOLOGRAM_TYPE = 'gt.creeperface.holograms.api.HologramAPI';
var BukkitPlugin = 'HolographicDisplays';
var hasHolograms = false;
var hologramNukkit = false;
var hologramBukkit = false;
try {
    Java.type(exports.NUKKIT_HOLOGRAM_TYPE);
    hasHolograms = true;
    hologramNukkit = true;
}
catch (e) {
    hologramNukkit = false;
}
if (server_1.default.isPluginEnabled(BukkitPlugin)) {
    hasHolograms = true;
    hologramBukkit = true;
}
exports.HAS_HOLOGRAM = hasHolograms;
exports.HAS_HOLOGRAM_NUKKIT = hologramNukkit;
exports.HAS_HOLOGRAM_BUKKIT = hologramBukkit;
// Healthchecks.io
exports.HEALTHCHECKS_IO_URL = java.lang.System.getenv('HEALTHCHECKS_IO_URL');
// DISABLE_WATCH_RELOAD - don't reload the engine(s) when JS files change on disk
// Used in production when the endpoint controls the engine reload
exports.DISABLE_WATCH_RELOAD = java.lang.System.getenv('DISABLE_WATCH_RELOAD') === 'true';
console.log("IS NUKKIT: " + exports.IS_NUKKIT);
console.log("IS BUKKIT: " + exports.IS_BUKKIT);
console.log("IS_SCRIPTCRAFT: " + exports.IS_SCRIPTCRAFT);
console.log("HAS_BOSSBAR: " + exports.HAS_BOSSBAR);
console.log("HAS_BOSSBAR_BUKKIT: " + exports.HAS_BOSSBAR_BUKKIT);
console.log("HAS_BOSSBAR_NUKKIT: " + exports.HAS_BOSSBAR_NUKKIT);
console.log(" HAS_HOLOGRAM: " + exports.HAS_HOLOGRAM);
console.log(" HAS_HOLOGRAM_NUKKIT: " + exports.HAS_HOLOGRAM_NUKKIT);
console.log(" HAS_HOLOGRAM_BUKKIT: " + exports.HAS_HOLOGRAM_BUKKIT);
