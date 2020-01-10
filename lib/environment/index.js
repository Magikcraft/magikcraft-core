"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
// The various plugins
var pluginManager = __plugin.server.pluginManager;
var plugins = {
    // BossBarAPI: pluginManager.getPlugin('BossBarAPI'),
    Pokkit: pluginManager.getPlugin('Pokkit'),
    Scriptcraft: pluginManager.getPlugin('Scriptcraft'),
    ScriptcraftMultiEngine: pluginManager.getPlugin('Scriptcraft-ME'),
};
// IS_POKKIT - when running in the Nukkit Pocket Edition server via the Pokkit plugin
var IS_NUKKIT = plugins.Pokkit != null;
var IS_BUKKIT = !IS_NUKKIT;
// IS_SCRIPTCRAFT - when using the Scriptcraft plugin
var IS_SCRIPTCRAFT = plugins.Scriptcraft != null;
// HAS_BOSSBAR - when the BossBar plugin is loaded
// Test not only for the plugin, but that it's loaded.
var BUKKIT_BOSSBAR_TYPE = 'org.bukkit.boss'; // 'org.inventivetalent.bossbar.BossBarAPI'
var NUKKIT_BOSSBAR_TYPE = 'io.magikcraft.BossBarAPI.BossBar';
var hasBossBar = true;
var bossBarBukkit = true;
var bossBarNukkit = false;
// Here we test if the plugin is loaded. It can be present but not loaded, so we instantiate it
// to ensure that it really is loaded.
// @TODO - Rewrite Bukkit / Nukkit detection
// try {
// 	Java.type(BUKKIT_BOSSBAR_TYPE)
// 	hasBossBar = true
// 	bossBarBukkit = true
// } catch (e) {
// 	bossBarBukkit = false
// }
try {
    Java.type(NUKKIT_BOSSBAR_TYPE);
    hasBossBar = true;
    bossBarNukkit = true;
}
catch (e) {
    bossBarNukkit = false;
}
var HAS_BOSSBAR = hasBossBar;
var HAS_BOSSBAR_BUKKIT = bossBarBukkit;
var HAS_BOSSBAR_NUKKIT = bossBarNukkit;
// Holograms
var NUKKIT_HOLOGRAM_TYPE = 'gt.creeperface.holograms.api.HologramAPI';
var BukkitPlugin = 'HolographicDisplays';
var hasHolograms = false;
var hologramNukkit = false;
var hologramBukkit = false;
try {
    Java.type(NUKKIT_HOLOGRAM_TYPE);
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
var HAS_HOLOGRAM = hasHolograms;
var HAS_HOLOGRAM_NUKKIT = hologramNukkit;
var HAS_HOLOGRAM_BUKKIT = hologramBukkit;
// Healthchecks.io
var HEALTHCHECKS_IO_URL = java.lang.System.getenv('HEALTHCHECKS_IO_URL');
// DISABLE_WATCH_RELOAD - don't reload the engine(s) when JS files change on disk
// Used in production when the endpoint controls the engine reload
var DISABLE_WATCH_RELOAD = java.lang.System.getenv('DISABLE_WATCH_RELOAD') === 'true';
console.log("IS NUKKIT: " + IS_NUKKIT);
console.log("IS BUKKIT: " + IS_BUKKIT);
console.log("IS_SCRIPTCRAFT: " + IS_SCRIPTCRAFT);
console.log("HAS_BOSSBAR: " + HAS_BOSSBAR);
console.log("HAS_BOSSBAR_BUKKIT: " + HAS_BOSSBAR_BUKKIT);
console.log("HAS_BOSSBAR_NUKKIT: " + HAS_BOSSBAR_NUKKIT);
console.log(" HAS_HOLOGRAM: " + HAS_HOLOGRAM);
console.log(" HAS_HOLOGRAM_NUKKIT: " + HAS_HOLOGRAM_NUKKIT);
console.log(" HAS_HOLOGRAM_BUKKIT: " + HAS_HOLOGRAM_BUKKIT);
var environment = {
    DISABLE_WATCH_RELOAD: DISABLE_WATCH_RELOAD,
    plugins: plugins,
    HEALTHCHECKS_IO_URL: HEALTHCHECKS_IO_URL,
    HAS_HOLOGRAM_BUKKIT: HAS_HOLOGRAM_BUKKIT,
    NUKKIT_HOLOGRAM_TYPE: NUKKIT_HOLOGRAM_TYPE,
    HAS_HOLOGRAM_NUKKIT: HAS_HOLOGRAM_NUKKIT,
    HAS_HOLOGRAM: HAS_HOLOGRAM,
    HAS_BOSSBAR_NUKKIT: HAS_BOSSBAR_NUKKIT,
    HAS_BOSSBAR_BUKKIT: HAS_BOSSBAR_BUKKIT,
    HAS_BOSSBAR: HAS_BOSSBAR,
    NUKKIT_BOSSBAR_TYPE: NUKKIT_BOSSBAR_TYPE,
    BUKKIT_BOSSBAR_TYPE: BUKKIT_BOSSBAR_TYPE,
    IS_SCRIPTCRAFT: IS_SCRIPTCRAFT,
    IS_BUKKIT: IS_BUKKIT,
    IS_NUKKIT: IS_NUKKIT,
};
exports.default = environment;
