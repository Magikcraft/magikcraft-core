"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var durableMap_1 = require("./durableMap");
exports.memory = function () {
    var playername = typeof self === 'undefined' ? 'scriptcraft' : self.name;
    return durableMap_1.DurableMap(playername + ".memento");
};
