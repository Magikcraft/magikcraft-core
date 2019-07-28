"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var bossbar_1 = require("./bossbar");
var BossBarImpl;
if (environment.HAS_BOSSBAR_NUKKIT) {
    BossBarImpl = require('./bossbar-nukkit').NukkitBossBar; // tslint:disable-line
}
else {
    BossBarImpl = require('./bossbar-bukkit').BukkitBossBar; // tslint:disable-line
}
// export let BossBar = {
// 	bar,
// 	color: BossBarColor,
// 	style: BossBarStyle,
// }
var BossBar = /** @class */ (function () {
    function BossBar(player, namespace, key) {
        this.BossBarImpl = new BossBarImpl(player, namespace, key);
    }
    // render() {
    // 	return this.BossBarImpl.render()
    // }
    BossBar.prototype.color = function (color) {
        return this.BossBarImpl.color(color);
    };
    BossBar.prototype.style = function (style) {
        return this.BossBarImpl.style(style);
    };
    BossBar.prototype.text = function (msg) {
        return this.BossBarImpl.text(msg);
    };
    BossBar.prototype.progress = function (progress) {
        return this.BossBarImpl.progress(progress);
    };
    BossBar.prototype.remove = function () {
        return this.BossBarImpl.remove();
    };
    BossBar.removeAll = function () {
        // No support for static methods in interfaces in TypeScript - boo!
        return BossBarImpl.removeAll();
    };
    BossBar.Color = bossbar_1.BossBarColorIndex;
    BossBar.Style = bossbar_1.BossBarStyleIndex;
    return BossBar;
}());
exports.BossBar = BossBar;
