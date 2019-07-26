"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var NukkitColors = {
    PINK: 0,
    BLUE: 1,
    RED: 2,
    GREEN: 3,
    YELLOW: 4,
    PURPLE: 5,
    WHITE: 6,
};
var BossBarAPI = hasBukkitBossBar
    ? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
    : { Color: NukkitColors, Style: {} };
var BossBarColor;
(function (BossBarColor) {
    BossBarColor[BossBarColor["BLUE"] = BossBarAPI.Color.BLUE] = "BLUE";
    BossBarColor[BossBarColor["GREEN"] = BossBarAPI.Color.GREEN] = "GREEN";
    BossBarColor[BossBarColor["PINK"] = BossBarAPI.Color.PINK] = "PINK";
    BossBarColor[BossBarColor["PURPLE"] = BossBarAPI.Color.PURPLE] = "PURPLE";
    BossBarColor[BossBarColor["RED"] = BossBarAPI.Color.RED] = "RED";
    BossBarColor[BossBarColor["WHITE"] = BossBarAPI.Color.WHITE] = "WHITE";
    BossBarColor[BossBarColor["YELLOW"] = BossBarAPI.Color.YELLOW] = "YELLOW";
})(BossBarColor = exports.BossBarColor || (exports.BossBarColor = {}));
var BossBarStyle;
(function (BossBarStyle) {
    BossBarStyle[BossBarStyle["NOTCHED_10"] = BossBarAPI.Style.NOTCHED_10] = "NOTCHED_10";
    BossBarStyle[BossBarStyle["NOTCHED_12"] = BossBarAPI.Style.NOTCHED_12] = "NOTCHED_12";
    BossBarStyle[BossBarStyle["NOTCHED_20"] = BossBarAPI.Style.NOTCHED_20] = "NOTCHED_20";
})(BossBarStyle = exports.BossBarStyle || (exports.BossBarStyle = {}));
