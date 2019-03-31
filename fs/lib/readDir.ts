export function readDir(path) {
	const File = Java.type('java.io.File')
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
}
