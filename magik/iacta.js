"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
function iacta(playerName) {
    var toToss = __plugin.getServer().getPlayer(playerName);
    if (!toToss) {
        self.sendMessage(gettext_1.gettext('Player %s not online', playerName));
        return;
    }
    // get the angle of the velocity direction
    var angle = Math.random() * 360;
    // a value between 0 and 3.9f (the speed of the toss)
    var magnitude = Math.random() * 3.9;
    // sin and cos return values between 0 and 1 so map the magnitude to the vectors
    var xComponent = Math.cos(angle) * magnitude;
    var zComponent = Math.sin(angle) * magnitude;
    // lets guarantee that the toss will push a player upwards by the same magnitude
    // therefore yComponent = magnitude
    var Vector = Java.type('org.bukkit.util.Vector');
    if (!toToss.hasPermission('magikcraft.cantbetossed')) {
        toToss.setVelocity(new Vector(xComponent, magnitude, zComponent));
    }
}
exports.iacta = iacta;
