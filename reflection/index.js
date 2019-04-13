"use strict";
/**
 * These are methods for examining Java objects via Reflection
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getMethods(object) {
    var methods = [];
    var deets = getMethodsDetailed(object);
    for (var _i = 0, deets_1 = deets; _i < deets_1.length; _i++) {
        var deet = deets_1[_i];
        methods.push(deet.getName());
    }
    return methods;
}
exports.getMethods = getMethods;
function getMethodsDetailed(object) {
    var clazz = object.class;
    return clazz.getMethods();
}
exports.getMethodsDetailed = getMethodsDetailed;
function getFieldsDetailed(object) {
    var clazz = object.class;
    return clazz.getFields();
}
exports.getFieldsDetailed = getFieldsDetailed;
function getFields(object) {
    var fields = [];
    var deets = getFieldsDetailed(object);
    for (var _i = 0, deets_2 = deets; _i < deets_2.length; _i++) {
        var deet = deets_2[_i];
        fields.push(deet);
    }
    return fields;
}
exports.getFields = getFields;
function getType(thing) {
    return thing.getClass().getName();
}
exports.getType = getType;
