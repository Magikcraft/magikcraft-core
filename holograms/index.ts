import server from '../server'
declare const com: any
const BukkitPlugin = 'HolographicDisplays'

class HologramsAPI {
	API: any
	constructor() {
		if (!server.isPluginEnabled(BukkitPlugin)) {
			throw new Error(
				'Holographics Display plugin not found on this server.'
			)
		}
		this.API = com.gmail.filoghost.holographicdisplays.api.HologramsAPI
	}

	/**
	 * Creates a hologram at given location.
	 *
	 * @param lines an array of lines of text
	 * @param location the location where it will appear
	 * @return the new hologram created
	 */
	createHologram({
		lines = [],
		location,
	}: {
		lines: string[]
		location: BukkitLocation
	}): Hologram {
		const hologram: Hologram = this.API.createHologram(__plugin, location)
		lines.forEach(line => hologram.appendTextLine(line))
		hologram.refreshAll()
		return hologram
	}

	/**
	 * Finds all the holograms created by the plugin.
	 *
	 * @return the holograms created the plugin. the Collection is a copy
	 * and modifying it has no effect on the holograms.
	 */
	getHolograms(): Hologram[] {
		return Java.from(this.API.getHolograms(__plugin).toArray())
	}

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
	registerPlaceholder(
		textPlaceholder: string,
		refreshRate: number,
		replacer: { update: () => string }
	) {
		this.API.registerPlaceholder(
			__plugin,
			textPlaceholder,
			refreshRate,
			replacer
		)
	}

	/**
	 * Finds all the placeholders registered by this plugin.
	 *
	 * @return a collection of placeholders registered by this plugin
	 */
	getRegisteredPlaceholders(): string[] {
		return this.API.getRegisteredPlaceholders(__plugin)
	}

	/**
	 * Unregister a placeholder created by a plugin.
	 *
	 * @param textPlaceholder the placeholder to remove
	 * @return true if found and removed, false otherwise
	 */
	unregisterPlaceholder(textPlaceholder: string): boolean {
		return this.API.unregisterPlaceholder(__plugin, textPlaceholder)
	}

	/**
	 * Resets and removes all the placeholders registered by a plugin. This is useful
	 * when you have configurable placeholders and you want to remove all of them.
	 *
	 * @param plugin the plugin that owns the placeholders
	 */
	unregisterPlaceholders() {
		this.API.unregisterPlaceholders(__plugin)
	}

	/**
	 * Checks if an entity is part of a hologram.
	 *
	 * @param bukkitEntity the entity to check
	 * @return true if the entity is a part of a hologram
	 */
	isHologramEntity(bukkitEntity: any): boolean {
		return this.API.isHologramEntity(bukkitEntity)
	}
}

const APISurface = new HologramsAPI()
export default APISurface

interface TextLine {
	getText(): string
	setText(line: string)
}

/**
 * Interface to represent a line in a Hologram.
 */
interface HologramLine {
	/**
	 * Returns the parent Hologram of this line.
	 *
	 * @return the parent Hologram.
	 */
	getParent: () => Hologram

	/**
	 * Removes this line from the parent Hologram. Since: v2.0.1
	 * Do not call if the Hologram has been deleted, an exception will be thrown.
	 */
	emoveLine: () => void
}

type ItemLine = any
type ItemStack = any

interface Hologram {
	/**
	 * Appends a text line to end of this hologram.
	 *
	 * @param text the content of the line, can be null for an empty line
	 * @return the new TextLine appended
	 */
	appendTextLine(text: string): TextLine

	/**
	 * Appends an item line to end of this hologram.
	 *
	 * @param itemStack the content of the line
	 * @return the new ItemLine appended
	 */
	appendItemLine(itemStack: ItemStack): ItemLine

	/**
	 * Inserts a text line in this hologram.
	 *
	 * @param index the line is inserted before this index. If 0, the new line will
	 * be inserted before the first line.
	 * @param text the content of the line, can be null for an empty line
	 * @return the new TextLine inserted
	 * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
	 */
	insertTextLine(index: number, text: string): TextLine

	/**
	 * Inserts an item line in this hologram.
	 *
	 * @param index the line is inserted before this index. If 0, the new line will
	 * be inserted before the first line.
	 * @param itemStack the content of the line
	 * @return the new ItemLine inserted
	 * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
	 */
	insertItemLine: (index: number, itemStack: ItemStack) => ItemLine

	/**
	 * Finds the element at a given index in the lines.
	 *
	 * @param index the index of the line to retrieve.
	 * @return the hologram line at the given index, can be an {@link ItemLine} or a {@link TextLine}.
	 * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
	 */
	getLine(index: number): HologramLine

	/**
	 * Removes a line at a given index. Since: v2.0.1
	 *
	 * @param index the index of the line, that should be between 0 and size() - 1.
	 * @throws IndexOutOfBoundsException if the index is out of range (index &lt; 0 || index &gt;= size())
	 */
	removeLine(index: number): void

	/**
	 * Removes all the lines from this hologram.
	 */
	clearLines(): void

	/**
	 * Checks the amount of lines of the hologram.
	 *
	 * @return the amount of lines
	 */
	size(): number

	/**
	 * The physical height of the hologram, counting all the lines. Since: v2.1.4
	 *
	 * @return the height of the hologram, counting all the lines and the gaps between them
	 */
	getHeight(): number

	/**
	 * Teleports a hologram to the given location.
	 *
	 * @param location the new location
	 */
	teleport(location: BukkitLocation): void

	/**
	 * Teleports a hologram to the given location.
	 *
	 * @param world the world where the hologram should be teleported,
	 * use {@link #getWorld()} to teleport it in the same world.
	 * @param x the X coordinate
	 * @param y the Y coordinate
	 * @param z the Z coordinate
	 */
	teleport(world: BukkitWorld, x: number, y: number, z: number): void

	/**
	 * Returns the position of the hologram.
	 *
	 * @return the Location of the hologram
	 */
	getLocation(): BukkitLocation

	/**
	 * Returns the X coordinate.
	 *
	 * @return the X coordinate of the hologram
	 */
	getX(): number

	/**
	 * Returns the Y coordinate.
	 *
	 * @return the Y coordinate of the hologram
	 */
	getY: () => number

	/**
	 * Returns the Z coordinate.
	 *
	 * @return the Z coordinate of the hologram
	 */
	getZ: () => number

	/**
	 * Returns the world.
	 *
	 * @return the world of the hologram
	 */
	getWorld(): BukkitWorld

	/**
	 * Returns the {@link VisibilityManager} of this hologram.
	 * <br><b style = "color: red">Note</b>: the usage of the VisibilityManager requires ProtocolLib.
	 * Without the plugin, holograms will be always visible.
	 *
	 * @return the VisibilityManager of this hologram
	 */
	getVisibilityManager(): VisibilityManager

	/**
	 * Returns when the hologram was created. Useful for removing old holograms.
	 *
	 * @return the timestamp of when the hologram was created, in milliseconds
	 */
	getCreationTimestamp(): number

	/**
	 * Checks if the hologram will track and replace placeholders.
	 * This is false by default.
	 *
	 * @return if the hologram allows placeholders
	 */
	isAllowPlaceholders(): boolean

	/**
	 * Sets if the hologram should track and replace placeholders.
	 * By default if will not track them.
	 *
	 * @param allowPlaceholders if the hologram should track placeholders
	 */
	setAllowPlaceholders(allowPlaceholders: boolean): void

	/**
	 * Deletes this hologram. Editing or teleporting the hologram when deleted
	 * will throw an exception. Lines will be automatically cleared.
	 * You should remove all the references of the hologram after deletion.
	 */
	delete(): void

	/**
	 * Checks if a hologram was deleted.
	 *
	 * @return true if this hologram was deleted
	 */
	isDeleted(): boolean

	refreshAll(): void
}

/**
 * This object is used to manage the visibility of a hologram.
 * It allows to hide/show the hologram to certain players, and the default behaviour
 * (when a hologram is not specifically being hidden/shown to a player) can be customized.
 */
interface VisibilityManager {
	/**
	 * Returns if the hologram is visible by default. If not changed, this value
	 * is true by default so the hologram is visible to everyone.
	 *
	 * @return if the hologram hologram is visible by default
	 */
	isVisibleByDefault(): boolean

	/**
	 * Sets if the hologram is visible by default. If not changed, this value
	 * is true by default so the hologram is visible to everyone.
	 *
	 * @param visibleByDefault the new behaviour
	 */
	setVisibleByDefault(visibleByDefault: boolean): void

	/**
	 * Shows the hologram to a player, overriding the value of {@link #isVisibleByDefault()}.
	 * This is persistent if the players goes offline.
	 *
	 * @param player the involved player
	 */
	showTo(player: BukkitPlayer): void

	/**
	 * Hides the hologram to a player, overriding the value of {@link #isVisibleByDefault()}.
	 * This is persistent if the players goes offline.
	 *
	 * @param player the involved player
	 */
	hideTo(player: BukkitPlayer): void

	/**
	 * Checks if a hologram is visible to a player.
	 *
	 * @param player the involved player
	 * @return if the player can see the hologram
	 */
	isVisibleTo(player: BukkitPlayer): boolean

	/**
	 * Resets the visibility to the default value. If you previously called {@link #showTo(Player)}
	 * or {@link #hideTo(Player)} to override the default visibility, this method will reset it
	 * to reflect the value of {@link #isVisibleByDefault()}.
	 *
	 * @param player the involved player
	 */
	resetVisibility(player: BukkitPlayer): void

	/**
	 * Resets the visibility for all the players. See {@link #resetVisibility(Player)} for more details.
	 */
	resetVisibilityAll(): void
}
