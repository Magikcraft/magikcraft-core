"use strict";
module.exports = {
    /**
     * Returns an array of methods
     * @param object The Java object to reflect
     */
    getMethods: function (object) {
        var methods = [];
        var deets = this.getMethodsDetailed(object);
        for (var _i = 0, deets_1 = deets; _i < deets_1.length; _i++) {
            var deet = deets_1[_i];
            methods.push(deet.getName());
        }
        return methods;
    },
    getMethodsDetailed: function (object) {
        var clazz = object.class;
        return clazz.getMethods();
    },
    getFieldsDetailed: function (object) {
        var clazz = object.class;
        return clazz.getFields();
    },
    getFields: function (object) {
        var fields = [];
        var deets = this.getFieldsDetailed(object);
        for (var _i = 0, deets_2 = deets; _i < deets_2.length; _i++) {
            var deet = deets_2[_i];
            fields.push(deet);
        }
        return fields;
    },
    getType: function (thing) {
        return thing.getClass().getName();
    },
};
