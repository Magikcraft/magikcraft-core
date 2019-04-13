"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These are utilities to convert Java objects to native JavaScript types
 */
function HashMapToObject(hm) {
    var nativeJSObject = {};
    hm.keySet().forEach(function (key) {
        nativeJSObject[key] = hm.get(key);
    });
    return nativeJSObject;
}
exports.HashMapToObject = HashMapToObject;
function sizeOf(object) {
    if (typeof object === 'object' &&
        Object.keys(object) &&
        Object.keys(object).length) {
        return Object.keys(object).length;
    }
    if (Array.isArray(object)) {
        return object.length;
    }
    if (object === null || object == undefined) {
        return 0;
    }
    return 0;
}
exports.sizeOf = sizeOf;
