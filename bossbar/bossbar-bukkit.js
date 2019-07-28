"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var BarColor = Java.type('org.bukkit.boss.BarColor');
var BarStyle = Java.type('org.bukkit.boss.BarStyle');
var BossBarAPI = hasBukkitBossBar
    ? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
    : { Color: {}, Style: {} };
var NamespacedKey = Java.type('org.bukkit.NamespacedKey');
var log_1 = require("../log");
var log = log_1.logger(__filename);
var BukkitBossBar = /** @class */ (function () {
    function BukkitBossBar(player, namespace, key) {
        if (player === void 0) { player = global.self; }
        var _this = this;
        this.init = false;
        this.barProgress = 0.5;
        this.hasTextComponent = false;
        this.removeAllBars = function () { return BossBarAPI.removeAllBars(_this.player); };
        this.player = player;
        var nsKey = new NamespacedKey(namespace, key);
        this.BossBarStyle = {
            NOTCHED_10: BarStyle.SEGMENTED_10,
            NOTCHED_12: BarStyle.SEGMENTED_12,
            NOTCHED_20: BarStyle.SEGMENTED_20,
        };
        this.BossBarColor = {
            BLUE: BarColor.BLUE,
            GREEN: BarColor.GREEN,
            PINK: BarColor.PINK,
            PURPLE: BarColor.PURPLE,
            RED: BarColor.RED,
            WHITE: BarColor.WHITE,
            YELLOW: BarColor.YELLOW,
        };
        this.barColor = this.BossBarColor.RED;
        this.barStyle = this.BossBarStyle.NOTCHED_20;
        var existingBar = __plugin.server.getBossBar(nsKey);
        this.bar = existingBar
            ? existingBar
            : __plugin.server.createBossBar(nsKey, '', this.barColor, this.barStyle);
        this.bar.addPlayer(player);
    }
    // public render() {
    // 	if (this.init) {
    // 		return this
    // 	}
    // 	this.barTextComponent = this.hasTextComponent
    // 		? new TextComponent(this.barTextComponent)
    // 		: new TextComponent(this.msg + '')
    // 	this.bar = BossBarAPI.addBar(
    // 		this.player,
    // 		this.barTextComponent,
    // 		this.barColor,
    // 		this.barStyle,
    // 		this.barProgress // Progress (0.0 - 1.0)
    // 	)
    // 	this.init = true
    // 	return this
    // }
    BukkitBossBar.prototype.color = function (color) {
        this.barColor = this.BossBarColor[color];
        this.bar.setColor(this.barColor);
        return this;
    };
    BukkitBossBar.prototype.style = function (style) {
        this.barStyle = BossBarAPI.Style[style];
        this.bar.setStyle(this.barStyle);
        return this;
    };
    BukkitBossBar.prototype.text = function (msg) {
        this.msg = msg;
        this.bar.setTitle(msg);
        return this;
    };
    BukkitBossBar.prototype.progress = function (progress) {
        if (progress === void 0) { progress = 50; }
        var _progress = Math.min(progress / 100, 0.99);
        var progressRounded = Math.round(_progress * 100) / 100;
        this.barProgress = progressRounded;
        this.bar.setProgress(this.barProgress);
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
