import * as convert from './convert';
declare const _default: {
    convert: typeof convert;
    reflection: {
        getMethods(object: any): any[];
        getMethodsDetailed(object: any): any;
        getFieldsDetailed(object: any): any;
        getFields(object: any): any[];
        getType(thing: any): any;
    };
};
export default _default;
