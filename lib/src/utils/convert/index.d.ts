/**
 * These are utilities to convert Java objects to native JavaScript types
 */
declare function HashMapToJSObject(hm: any): any;
declare function sizeOf(object: any): number;
declare const convert: {
    HashMapToJSObject: typeof HashMapToJSObject;
    sizeOf: typeof sizeOf;
};
export default convert;
//# sourceMappingURL=index.d.ts.map