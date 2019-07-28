"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BarColor = Java.type('org.bukkit.boss.BarColor');
var BarStyle = Java.type('org.bukkit.boss.BarStyle');
var NamespacedKey = Java.type('org.bukkit.NamespacedKey');
var log_1 = require("../log");
var log = log_1.logger(__filename);
var BukkitBossBar = /** @class */ (function () {
    function BukkitBossBar(player, namespace, key) {
        if (player === void 0) { player = global.self; }
        var nsKey = new NamespacedKey(namespace, key);
        var existingBar = __plugin.server.getBossBar(nsKey);
        this.bar = existingBar
            ? existingBar
            : __plugin.server.createBossBar(nsKey, '', BarColor.RED, BarStyle.SEGMENTED_20);
        this.player = player;
        this.bar.addPlayer(player);
    }
    BukkitBossBar.removeAll = function () {
        log('Removing all Boss Bars');
        // Cancel all BossBars on plugin refresh()
        var keys = [];
        var bossBars = __plugin.server.getBossBars();
        while (bossBars.hasNext()) {
            var b = bossBars.next();
            b.removeAll();
            var key = b.getKey();
            keys.push(key);
        }
        keys.forEach(function (k) {
            console.log("Removing " + k.toString());
            __plugin.server.removeBossBar(k);
        });
    };
    BukkitBossBar.prototype.color = function (color) {
        this.bar.setColor(BarColor[color]);
        return this;
    };
    BukkitBossBar.prototype.style = function (style) {
        this.bar.setStyle(BarStyle[style]);
        return this;
    };
    BukkitBossBar.prototype.text = function (msg) {
        this.bar.setTitle(msg);
        return this;
    };
    BukkitBossBar.prototype.progress = function (progress) {
        if (progress === void 0) { progress = 50; }
        var _progress = Math.min(progress / 100, 0.99);
        var progressRounded = Math.round(_progress * 100) / 100;
        this.bar.setProgress(progressRounded);
        return this;
    };
    BukkitBossBar.prototype.show = function () {
        this.bar.setVisible(true);
    };
    BukkitBossBar.prototype.hide = function () {
        this.bar.setVisible(false);
    };
    BukkitBossBar.prototype.remove = function () {
        this.bar.removePlayer(this.player);
        return undefined;
    };
    return BukkitBossBar;
}());
exports.BukkitBossBar = BukkitBossBar;
