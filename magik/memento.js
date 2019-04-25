"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
var memory_1 = require("./memory");
var defaultKey = 'memory.default';
function getItem(key) {
    if (key === void 0) { key = defaultKey; }
    if (memory_1.memory().containsKey(key)) {
        return memory_1.memory().get(key);
    }
    else {
        return undefined;
    }
}
exports.getItem = getItem;
function _setItem(key, value) {
    if (!value) {
        value = key;
        key = defaultKey;
    }
    memory_1.memory().put(key, value);
    if (value instanceof Java.type('org.bukkit.Location')) {
        echo(self, gettext_1.gettext('I remembered this place as %s', key));
    }
    else {
        echo(self, gettext_1.gettext('I remembered %s as %s', value, key));
    }
}
exports._setItem = _setItem;
exports.memento = _setItem;
exports.memento.setItem = _setItem;
exports.memento.getItem = getItem;
