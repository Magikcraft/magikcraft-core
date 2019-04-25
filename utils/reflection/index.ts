/**
 * These are methods for examining Java objects via Reflection
 */
export default {
	/**
	 * Returns an array of methods
	 * @param object The Java object to reflect
	 */
	getMethods(object) {
		const methods = [] as any[]
		const deets = this.getMethodsDetailed(object)
		for (let deet of deets) {
			methods.push(deet.getName())
		}
		return methods
	},

	getMethodsDetailed(object) {
		const clazz = object.class
		return clazz.getMethods()
	},

	getFieldsDetailed(object) {
		const clazz = object.class
		return clazz.getFields()
	},

	getFields(object) {
		const fields = [] as any[]
		const deets = this.getFieldsDetailed(object)
		for (let deet of deets) {
			fields.push(deet)
		}
		return fields
	},

	getType(thing) {
		return thing.getClass().getName()
	},
}
