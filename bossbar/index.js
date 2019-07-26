"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var bossbar_1 = require("./bossbar");
var bar = function (msg, player) { return ({}); };
if (environment.HAS_BOSSBAR_BUKKIT) {
    var Bukkit = require('./bossbar-bukkit'); // tslint:disable-line
    bar = Bukkit.bar;
}
if (environment.HAS_BOSSBAR_NUKKIT) {
    var Nukkit = require('./bossbar-nukkit'); // tslint:disable-line
    bar = Nukkit.bar;
}
exports.BossBar = {
    bar: bar,
    color: bossbar_1.BossBarColor,
    style: bossbar_1.BossBarStyle,
};
