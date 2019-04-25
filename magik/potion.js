"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @TODO Nukkit support
var PotionEffect = Java.type('org.bukkit.potion.PotionEffect');
var PotionEffectType = Java.type('org.bukkit.potion.PotionEffectType');
var Color = Java.type('org.bukkit.Color');
function potion(type, _a) {
    var _b = _a.duration, duration = _b === void 0 ? 100 : _b, _c = _a.amplifier, amplifier = _c === void 0 ? 1 : _c, _d = _a.color, color = _d === void 0 ? 'GREEN' : _d;
    var c = Color[color];
    var l = PotionEffectType[type];
    var effect = new PotionEffect(l, duration, amplifier, true, true, c);
    self.addPotionEffect(effect);
}
exports.potion = potion;
