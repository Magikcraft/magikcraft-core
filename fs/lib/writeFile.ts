/**
 * writeFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @param {string} content - file content to write
 * @return {void}
 *
 * Writes the contents of a file to the filesystem.
 */
export function writeFile(filename: string, content: string) {
	const FileWriter = Java.type('java.io.FileWriter')
	const File = Java.type('java.io.File')
	const path = filename.replace(filename.split('/').pop()!, '')
	new File(path).mkdirs()
	const fw = new FileWriter(filename)
	fw.write(content)
	fw.close()
}
