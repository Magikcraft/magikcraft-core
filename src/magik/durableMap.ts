import { fs } from '../fs/index'
import server from '../server'

const durableMaps = {}

const storageDirectory = server.getBaseDir() + '/magikcraft-persistent-storage'

/**
 * Return a DurableMap - a disk-backed memory that survives JS engine refresh
 * @param name a unique name
 */
export function DurableMap(name) {
	let map = {}

	if (!durableMaps.hasOwnProperty(name)) {
		durableMaps[name] = new DurableMapClass(name)
	}
	return durableMaps[name]
}

class DurableMapClass {
	name: string
	map: {}
	storageFile: string
	constructor(name) {
		this.name = name
		this.map = this.hydrate()
		this.storageFile = `${storageDirectory}/${name}.json`
	}

	get(key) {
		return this.map[key]
	}

	put(key, value) {
		this.map[key] = value
		this.flush()
	}

	clear() {
		this.map = {}
		this.flush()
	}

	getKeys() {
		return Object.keys(this.map)
	}

	containsKey(key) {
		return this.map.hasOwnProperty(key)
	}

	private hydrate() {
		if (fs.exists(this.storageFile)) {
			try {
				return fs.readJson(this.storageFile)
			} catch (e) {
				console.log(`Error reading ${this.storageFile}`)
				console.log(e.message)
			}
		}
		return {}
	}

	private flush() {
		fs.writeJSON(this.storageFile, this.map)
	}
}
