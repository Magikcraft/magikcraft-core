"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doNTimes_1 = require("./doNTimes");
function infierno(quantity) {
    if (quantity === void 0) { quantity = 1; }
    quantity = Math.min(quantity, 10);
    var Fireball = Java.type('org.bukkit.entity.Fireball');
    doNTimes_1.doNTimes(function () { return self.launchProjectile(Fireball.class); }, quantity, 300);
}
exports.infierno = infierno;
