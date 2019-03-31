/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {string}
 *
 * Reads the contents of a file from the filesystem.
 */
export function readFile(filename) {
	const FileReader = java.io.FileReader
	const BufferedReader = java.io.BufferedReader
	const buffered = new BufferedReader(new FileReader(filename))
	let code = ''
	let line
	while ((line = buffered.readLine()) !== null) {
		code += line + '\n'
	}
	buffered.close()
	return code
}
