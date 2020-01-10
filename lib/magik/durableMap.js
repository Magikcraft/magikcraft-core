"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../fs/index");
var server_1 = require("../server");
var durableMaps = {};
var storageDirectory = server_1.default.getBaseDir() + '/magikcraft-persistent-storage';
/**
 * Return a DurableMap - a disk-backed memory that survives JS engine refresh
 * @param name a unique name
 */
function DurableMap(name) {
    var map = {};
    if (!durableMaps.hasOwnProperty(name)) {
        durableMaps[name] = new DurableMapClass(name);
    }
    return durableMaps[name];
}
exports.DurableMap = DurableMap;
var DurableMapClass = /** @class */ (function () {
    function DurableMapClass(name) {
        this.name = name;
        this.map = this.hydrate();
        this.storageFile = storageDirectory + "/" + name + ".json";
    }
    DurableMapClass.prototype.get = function (key) {
        return this.map[key];
    };
    DurableMapClass.prototype.put = function (key, value) {
        this.map[key] = value;
        this.flush();
    };
    DurableMapClass.prototype.clear = function () {
        this.map = {};
        this.flush();
    };
    DurableMapClass.prototype.getKeys = function () {
        return Object.keys(this.map);
    };
    DurableMapClass.prototype.containsKey = function (key) {
        return this.map.hasOwnProperty(key);
    };
    DurableMapClass.prototype.hydrate = function () {
        if (index_1.fs.exists(this.storageFile)) {
            try {
                return index_1.fs.readJson(this.storageFile);
            }
            catch (e) {
                console.log("Error reading " + this.storageFile);
                console.log(e.message);
            }
        }
        return {};
    };
    DurableMapClass.prototype.flush = function () {
        index_1.fs.writeJSON(this.storageFile, this.map);
    };
    return DurableMapClass;
}());
