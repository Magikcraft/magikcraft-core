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

	createHologram({
		lines = [],
		location,
	}: {
		lines: string[]
		location: BukkitLocation
	}): Hologram {
		const hologram: Hologram = this.API.createHologram(__plugin, location)
		lines.forEach(line => hologram.appendTextLine(line))
		return hologram
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
	// isibilityManager getVisibilityManager();

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
}
