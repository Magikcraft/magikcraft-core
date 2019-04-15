"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var JavaChatColor = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.ChatColor')
    : {};
var ChatColor;
(function (ChatColor) {
    ChatColor[ChatColor["AQUA"] = JavaChatColor.AQUA] = "AQUA";
    ChatColor[ChatColor["BLACK"] = JavaChatColor.BLACK] = "BLACK";
    ChatColor[ChatColor["BLUE"] = JavaChatColor.BLUE] = "BLUE";
    ChatColor[ChatColor["BOLD"] = JavaChatColor.BOLD] = "BOLD";
    ChatColor[ChatColor["DARK_AQUA"] = JavaChatColor.DARK_AQUA] = "DARK_AQUA";
    ChatColor[ChatColor["DARK_BLUE"] = JavaChatColor.DARK_BLUE] = "DARK_BLUE";
    ChatColor[ChatColor["DARK_GRAY"] = JavaChatColor.DARK_GRAY] = "DARK_GRAY";
    ChatColor[ChatColor["DARK_GREEN"] = JavaChatColor.DARK_GREEN] = "DARK_GREEN";
    ChatColor[ChatColor["DARK_PURPLE"] = JavaChatColor.DARK_PURPLE] = "DARK_PURPLE";
    ChatColor[ChatColor["DARK_RED"] = JavaChatColor.DARK_RED] = "DARK_RED";
    ChatColor[ChatColor["GOLD"] = JavaChatColor.GOLD] = "GOLD";
    ChatColor[ChatColor["GRAY"] = JavaChatColor.GRAY] = "GRAY";
    ChatColor[ChatColor["GREEN"] = JavaChatColor.GREEN] = "GREEN";
    ChatColor[ChatColor["ITALIC"] = JavaChatColor.ITALIC] = "ITALIC";
    ChatColor[ChatColor["LIGHT_PURPLE"] = JavaChatColor.LIGHT_PURPLE] = "LIGHT_PURPLE";
    ChatColor[ChatColor["MAGIC"] = JavaChatColor.MAGIC] = "MAGIC";
    ChatColor[ChatColor["RED"] = JavaChatColor.RED] = "RED";
    ChatColor[ChatColor["RESET"] = JavaChatColor.RESET] = "RESET";
    ChatColor[ChatColor["STRIKETHROUGH"] = JavaChatColor.STRIKETHROUGH] = "STRIKETHROUGH";
    ChatColor[ChatColor["UNDERLINE"] = JavaChatColor.UNDERLINE] = "UNDERLINE";
    ChatColor[ChatColor["WHITE"] = JavaChatColor.WHITE] = "WHITE";
    ChatColor[ChatColor["YELLOW"] = JavaChatColor.YELLOW] = "YELLOW";
})(ChatColor = exports.ChatColor || (exports.ChatColor = {}));
var NukkitColors = {
    PINK: 0,
    BLUE: 1,
    RED: 2,
    GREEN: 3,
    YELLOW: 4,
    PURPLE: 5,
    WHITE: 6
};
var BossBarAPI = hasBukkitBossBar
    ? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
    : { Color: NukkitColors, Style: {} };
var Color = BossBarAPI.Color;
exports.color = {
    BLUE: BossBarAPI.Color.BLUE,
    GREEN: BossBarAPI.Color.GREEN,
    PINK: BossBarAPI.Color.PINK,
    PURPLE: BossBarAPI.Color.PURPLE,
    RED: BossBarAPI.Color.RED,
    WHITE: BossBarAPI.Color.WHITE,
    YELLOW: BossBarAPI.Color.YELLOW
};
var Style = BossBarAPI.Style;
exports.style = {
    NOTCHED_10: BossBarAPI.Style.NOTCHED_10,
    NOTCHED_12: BossBarAPI.Style.NOTCHED_12,
    NOTCHED_20: BossBarAPI.Style.NOTCHED_20
};
