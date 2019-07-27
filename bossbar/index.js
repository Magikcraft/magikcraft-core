"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var BossBarImpl;
if (environment.HAS_BOSSBAR_BUKKIT) {
    BossBarImpl = require('./bossbar-bukkit'); // tslint:disable-line
}
if (environment.HAS_BOSSBAR_NUKKIT) {
    BossBarImpl = require('./bossbar-nukkit'); // tslint:disable-line
}
// export let BossBar = {
// 	bar,
// 	color: BossBarColor,
// 	style: BossBarStyle,
// }
var BossBar = /** @class */ (function () {
    function BossBar(player) {
        this.BossBarImpl = new BossBarImpl(player);
    }
    BossBar.prototype.render = function () {
        this.BossBarImpl.render();
    };
    BossBar.prototype.color = function (color) {
        this.BossBarImpl.color(color);
    };
    BossBar.prototype.style = function (style) {
        this.BossBarImpl.style(style);
    };
    BossBar.prototype.text = function (msg) {
        this.BossBarImpl.text(msg);
    };
    BossBar.prototype.progress = function (progress) {
        this.BossBarImpl.progress(progress);
    };
    BossBar.prototype.removeAllBars = function () {
        this.BossBarImpl.removeAllBars();
    };
    BossBar.prototype.remove = function () {
        this.BossBarImpl.remove();
    };
    BossBar.Color = {
        BLUE: 'BLUE',
        GREEN: 'GREEN',
        PINK: 'PINK',
        PURPLE: 'PURPLE',
        RED: 'RED',
        WHITE: 'WHITE',
    };
    BossBar.Style = {
        NOTCHED_10: 'NOTCHED_10',
        NOTCHED_12: 'NOTCHED_12',
        NOTCHED_20: 'NOTCHED_20',
    };
    return BossBar;
}());
exports.BossBar = BossBar;
