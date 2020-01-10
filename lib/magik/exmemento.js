"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memory_1 = require("./memory");
function exmemento(key) {
    if (key === void 0) { key = 'memory.default'; }
    if (memory_1.memory().containsKey(key)) {
        return memory_1.memory().get(key);
    }
    return undefined;
}
exports.exmemento = exmemento;
