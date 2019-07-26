"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var JavaChatColor = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.ChatColor')
    : {};
var TextColor;
(function (TextColor) {
    TextColor[TextColor["AQUA"] = JavaChatColor.AQUA] = "AQUA";
    TextColor[TextColor["BLACK"] = JavaChatColor.BLACK] = "BLACK";
    TextColor[TextColor["BLUE"] = JavaChatColor.BLUE] = "BLUE";
    TextColor[TextColor["BOLD"] = JavaChatColor.BOLD] = "BOLD";
    TextColor[TextColor["DARK_AQUA"] = JavaChatColor.DARK_AQUA] = "DARK_AQUA";
    TextColor[TextColor["DARK_BLUE"] = JavaChatColor.DARK_BLUE] = "DARK_BLUE";
    TextColor[TextColor["DARK_GRAY"] = JavaChatColor.DARK_GRAY] = "DARK_GRAY";
    TextColor[TextColor["DARK_GREEN"] = JavaChatColor.DARK_GREEN] = "DARK_GREEN";
    TextColor[TextColor["DARK_PURPLE"] = JavaChatColor.DARK_PURPLE] = "DARK_PURPLE";
    TextColor[TextColor["DARK_RED"] = JavaChatColor.DARK_RED] = "DARK_RED";
    TextColor[TextColor["GOLD"] = JavaChatColor.GOLD] = "GOLD";
    TextColor[TextColor["GRAY"] = JavaChatColor.GRAY] = "GRAY";
    TextColor[TextColor["GREEN"] = JavaChatColor.GREEN] = "GREEN";
    TextColor[TextColor["ITALIC"] = JavaChatColor.ITALIC] = "ITALIC";
    TextColor[TextColor["LIGHT_PURPLE"] = JavaChatColor.LIGHT_PURPLE] = "LIGHT_PURPLE";
    TextColor[TextColor["MAGIC"] = JavaChatColor.MAGIC] = "MAGIC";
    TextColor[TextColor["RED"] = JavaChatColor.RED] = "RED";
    TextColor[TextColor["RESET"] = JavaChatColor.RESET] = "RESET";
    TextColor[TextColor["STRIKETHROUGH"] = JavaChatColor.STRIKETHROUGH] = "STRIKETHROUGH";
    TextColor[TextColor["UNDERLINE"] = JavaChatColor.UNDERLINE] = "UNDERLINE";
    TextColor[TextColor["WHITE"] = JavaChatColor.WHITE] = "WHITE";
    TextColor[TextColor["YELLOW"] = JavaChatColor.YELLOW] = "YELLOW";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
// Requires the Spigot server or a plugin that provides this
exports.TextComponent = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.chat.TextComponent')
    : undefined;
/**
 *
 * new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true )
 * .append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create();
 */
exports.ComponentBuilderClass = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.chat.ComponentBuilder')
    : undefined;
exports.ComponentBuilder = function (msg) {
    return new exports.ComponentBuilderClass(msg);
};
