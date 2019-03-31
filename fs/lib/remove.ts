/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {boolean}
 *
 * Delete file or directory (recursive).
 */
export function remove(filename) {
	var File = java.io.File
	const file = new File(filename)
	if (file.exists()) {
		if (file.isDirectory()) {
			// Recursively delete all files in dir.
			const files = Java.from(file.listFiles())
			files.forEach(_file => {
				remove(_file.getPath())
			})

			// Now delete empty dir
			file.delete()
		} else {
			file.delete()
		}
	}
}
