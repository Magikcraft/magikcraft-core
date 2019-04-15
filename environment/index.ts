import server from '../server'

// The various plugins
const pluginManager = __plugin.server.pluginManager
export const plugins = {
	BossBarAPI: pluginManager.getPlugin('BossBarAPI'),
	Pokkit: pluginManager.getPlugin('Pokkit'),
	Scriptcraft: pluginManager.getPlugin('Scriptcraft'), // this doesn't work in Nukkit - the Nukkit Plugin manager wraps Bukkit plugins, so it returns nl.rutgerkok.pokkit.plugin.PokkitPlugin$NukkitPluginWrapper@55e4d821
	ScriptcraftMultiEngine: pluginManager.getPlugin('Scriptcraft-ME'),
}

// IS_POKKIT - when running in the Nukkit Pocket Edition server via the Pokkit plugin
export const IS_NUKKIT = plugins.Pokkit != null

export const IS_BUKKIT = !IS_NUKKIT

// IS_SCRIPTCRAFT - when using the Scriptcraft plugin
export const IS_SCRIPTCRAFT = plugins.Scriptcraft != null

// HAS_BOSSBAR - when the BossBar plugin is loaded
// Test not only for the plugin, but that it's loaded.
export const BUKKIT_BOSSBAR_TYPE = 'org.inventivetalent.bossbar.BossBarAPI'
export const NUKKIT_BOSSBAR_TYPE = 'io.magikcraft.BossBarAPI.BossBar'

let hasBossBar = plugins.BossBarAPI != null
let bossBarBukkit = false
let bossBarNukkit = false

// Here we test if the plugin is loaded. It can be present but not loaded, so we instantiate it
// to ensure that it really is loaded.
if (hasBossBar) {
	try {
		Java.type(BUKKIT_BOSSBAR_TYPE)
		hasBossBar = true
		bossBarBukkit = true
	} catch (e) {
		bossBarBukkit = false
	}

	try {
		Java.type(NUKKIT_BOSSBAR_TYPE)
		hasBossBar = true
		bossBarNukkit = true
	} catch (e) {
		bossBarNukkit = false
	}
}
export const HAS_BOSSBAR = hasBossBar
export const HAS_BOSSBAR_BUKKIT = bossBarBukkit
export const HAS_BOSSBAR_NUKKIT = bossBarNukkit

// Holograms
export const NUKKIT_HOLOGRAM_TYPE = 'gt.creeperface.holograms.api.HologramAPI'
const BukkitPlugin = 'HolographicDisplays'

let hasHolograms = false
let hologramNukkit = false
let hologramBukkit = false

try {
	Java.type(NUKKIT_HOLOGRAM_TYPE)
	hasHolograms = true
	hologramNukkit = true
} catch (e) {
	hologramNukkit = false
}

if (server.isPluginEnabled(BukkitPlugin)) {
	hasHolograms = true
	hologramBukkit = true
}

export const HAS_HOLOGRAM = hasHolograms
export const HAS_HOLOGRAM_NUKKIT = hologramNukkit
export const HAS_HOLOGRAM_BUKKIT = hologramBukkit

// Healthchecks.io
export const HEALTHCHECKS_IO_URL = java.lang.System.getenv(
	'HEALTHCHECKS_IO_URL'
)

// DISABLE_WATCH_RELOAD - don't reload the engine(s) when JS files change on disk
// Used in production when the endpoint controls the engine reload
export const DISABLE_WATCH_RELOAD =
	java.lang.System.getenv('DISABLE_WATCH_RELOAD') === 'true'

console.log(`IS NUKKIT: ${IS_NUKKIT}`)
console.log(`IS BUKKIT: ${IS_BUKKIT}`)
console.log(`IS_SCRIPTCRAFT: ${IS_SCRIPTCRAFT}`)
console.log(`HAS_BOSSBAR: ${HAS_BOSSBAR}`)
console.log(`HAS_BOSSBAR_BUKKIT: ${HAS_BOSSBAR_BUKKIT}`)
console.log(`HAS_BOSSBAR_NUKKIT: ${HAS_BOSSBAR_NUKKIT}`)
console.log(` HAS_HOLOGRAM: ${HAS_HOLOGRAM}`)
console.log(` HAS_HOLOGRAM_NUKKIT: ${HAS_HOLOGRAM_NUKKIT}`)
console.log(` HAS_HOLOGRAM_BUKKIT: ${HAS_HOLOGRAM_BUKKIT}`)
