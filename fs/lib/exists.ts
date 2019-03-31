/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {boolean}
 *
 * Checks if file or directory exists.
 */
export function exists(filename) {
	var File = java.io.File
	const file = new File(filename)
	return file.exists()
}
