/**
 * These are utilities to convert Java objects to native JavaScript types
 */

function HashMapToJSObject(hm) {
	const nativeJSObject = {} as any
	hm.keySet().forEach(key => {
		nativeJSObject[key] = hm.get(key)
	})
	return nativeJSObject
}

function sizeOf(object) {
	if (
		typeof object === 'object' &&
		Object.keys(object) &&
		Object.keys(object).length
	) {
		return Object.keys(object).length
	}
	if (Array.isArray(object)) {
		return object.length
	}
	if (object === null || object == undefined) {
		return 0
	}
	return 0
}

const convert = {
	HashMapToJSObject,
	sizeOf,
}

export default convert
