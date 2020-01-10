declare const utils: {
    convert: {
        HashMapToJSObject: (hm: any) => any;
        sizeOf: (object: any) => number;
    };
    reflection: {
        getMethods(object: any): any[];
        getMethodsDetailed(object: any): any;
        getFieldsDetailed(object: any): any;
        getFields(object: any): any[];
        getType(thing: any): any;
    };
};
export default utils;
//# sourceMappingURL=index.d.ts.map