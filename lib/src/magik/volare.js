"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var potion_1 = require("./potion");
function volare(duration) {
    if (duration === void 0) {
        duration = 200;
    }
    potion_1.potion('LEVITATION', { duration: duration });
    echo(self, 'Volare!');
}
exports.volare = volare;
