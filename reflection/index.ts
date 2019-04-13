/**
 * These are methods for examining Java objects via Reflection
 */

export function getMethods(object) {
	const methods = [] as any[]
	const deets = getMethodsDetailed(object)
	for (let deet of deets) {
		methods.push(deet.getName())
	}
	return methods
}

export function getMethodsDetailed(object) {
	const clazz = object.class
	return clazz.getMethods()
}

export function getFieldsDetailed(object) {
	const clazz = object.class
	return clazz.getFields()
}

export function getFields(object) {
	const fields = [] as any[]
	const deets = getFieldsDetailed(object)
	for (let deet of deets) {
		fields.push(deet)
	}
	return fields
}

export function getType(thing) {
	return thing.getClass().getName()
}
