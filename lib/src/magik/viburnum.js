"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
function viburnum(amount, delay) {
    if (amount === void 0) { amount = 1; }
    if (delay === void 0) { delay = 200; }
    var Snowball = Java.type('org.bukkit.entity.Snowball');
    var snowball = function () { return self.launchProjectile(Snowball.class); };
    snowball();
    for (var i = 1; i < amount; i++) {
        global.setTimeout(snowball, delay * i);
    }
    echo(self, gettext_1.gettext('Snowball!'));
}
exports.viburnum = viburnum;
