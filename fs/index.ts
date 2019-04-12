const File = Java.type('java.io.File')
const Files = Java.type('java.nio.file.Files')
const Paths = Java.type('java.nio.file.Paths')

export const fs = {
	// Hail Stackoverflow!
	// https://stackoverflow.com/a/50418060
	copyDir(srcPath: string, destPath: string) {
		const copy = (source: string, dest: string) => {
			try {
				Files.copy(source, dest)
			} catch (e) {
				e.printStackTrace()
			}
		}
		return new Promise((resolve, reject) => {
			const src = Paths.get(srcPath)
			const dest = Paths.get(destPath)
			Files.walk(src).forEach(source =>
				copy(source, dest.resolve(src.relativize(source)))
			)
			resolve()
		})
	},
	readDir(path) {
		const folder = new File(path)
		const listOfFiles = folder.listFiles()
		const files: string[] = [] as any
		if (listOfFiles && listOfFiles.length) {
			for (let i = 0; i < listOfFiles.length; i++) {
				if (listOfFiles[i].isFile()) {
					files.push(listOfFiles[i].getName())
				}
			}
		}
		return files
	},

	/**
	 * exists
	 * @param {string} filename - path to file, relative to Minecraft server root
	 * @return {boolean}
	 *
	 * Checks if file or directory exists.
	 */
	exists(filename) {
		const file = new File(filename)
		return file.exists()
	},

	/**
	 * readFile
	 * @param {string} filename - path to file, relative to Minecraft server root
	 * @return {string}
	 *
	 * Reads the contents of a file from the filesystem.
	 */
	readFile(filename) {
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
	},

	/**
	 * remove
	 * @param {string} filename - path to file, relative to Minecraft server root
	 * @return {boolean}
	 *
	 * Delete file or directory (recursive).
	 */
	remove(filename) {
		const file = new File(filename)
		if (file.exists()) {
			if (file.isDirectory()) {
				// Recursively delete all files in dir.
				const files = Java.from(file.listFiles())
				files.forEach(_file => {
					fs.remove(_file.getPath())
				})

				// Now delete empty dir
				file.delete()
			} else {
				file.delete()
			}
		}
	},

	/**
	 * writeFile
	 * @param {string} filename - path to file, relative to Minecraft server root
	 * @param {string} content - file content to write
	 * @return {void}
	 *
	 * Writes the contents of a file to the filesystem.
	 */
	writeFile(filename: string, content: string) {
		const FileWriter = Java.type('java.io.FileWriter')
		const path = filename.replace(filename.split('/').pop()!, '')
		new File(path).mkdirs()
		const fw = new FileWriter(filename)
		fw.write(content)
		fw.close()
	},

	readJson(path: string, options = { throwException: true }) {
		const stringContent = fs.readFile(path)
		try {
			return JSON.parse(stringContent)
		} catch (e) {
			if (options.throwException) {
				throw e
			}
			return null
		}
	},

	writeJSON(path: string, json: object) {
		fs.writeFile(path, JSON.stringify(json))
	},
}
