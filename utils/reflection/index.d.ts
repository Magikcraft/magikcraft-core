declare const _default: {
    /**
     * Returns an array of methods
     * @param object The Java object to reflect
     */
    getMethods(object: any): any[];
    getMethodsDetailed(object: any): any;
    getFieldsDetailed(object: any): any;
    getFields(object: any): any[];
    getType(thing: any): any;
};
/**
 * These are methods for examining Java objects via Reflection
 */
export default _default;
