"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var potion_1 = require("./potion");
function noxvida(duration) {
    if (duration === void 0) {
        duration = 200;
    }
    echo(self, 'Noxvida!');
    potion_1.potion('NIGHT_VISION', { duration: duration });
}
exports.noxvida = noxvida;
