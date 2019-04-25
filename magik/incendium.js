"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
var DEFAULT_FIRE_DURATION = 8; // 8 seconds
var TICKS_PER_SECOND = 20;
function incendium(playerName, duration) {
    if (duration === void 0) {
        duration = DEFAULT_FIRE_DURATION;
    }
    var toLight = __plugin.getServer().getPlayer(playerName);
    var ticks = duration * TICKS_PER_SECOND;
    if (toLight) {
        toLight.setFireTicks(ticks);
    }
    else {
        echo(self, gettext_1.gettext('Cannot find player %s', playerName));
    }
}
exports.incendium = incendium;
