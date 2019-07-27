"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var BossBarAPI = hasBukkitBossBar
    ? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
    : { Color: {}, Style: {} };
var log_1 = require("../log");
var text_1 = require("../text");
var log = log_1.logger(__filename);
var BukkitBossBar = /** @class */ (function () {
    function BukkitBossBar(player) {
        var _this = this;
        if (player === void 0) { player = global.self; }
        this.init = false;
        this.barProgress = 0.5;
        this.hasTextComponent = false;
        this.removeAllBars = function () { return BossBarAPI.removeAllBars(_this.player); };
        this.player = player;
        this.BossBarStyle = {
            NOTCHED_10: BossBarAPI.Style.NOTCHED_10,
            NOTCHED_12: BossBarAPI.Style.NOTCHED_12,
            NOTCHED_20: BossBarAPI.Style.NOTCHED_20,
        };
        this.BossBarColor = {
            BLUE: BossBarAPI.Color.BLUE,
            GREEN: BossBarAPI.Color.GREEN,
            PINK: BossBarAPI.Color.PINK,
            PURPLE: BossBarAPI.Color.PURPLE,
            RED: BossBarAPI.Color.RED,
            WHITE: BossBarAPI.Color.WHITE,
            YELLOW: BossBarAPI.Color.YELLOW,
        };
        this.barColor = this.BossBarColor.RED;
        this.barStyle = this.BossBarStyle.NOTCHED_20;
    }
    BukkitBossBar.prototype.render = function () {
        if (this.init) {
            return this;
        }
        this.barTextComponent = this.hasTextComponent
            ? new text_1.TextComponent(this.barTextComponent)
            : new text_1.TextComponent(this.msg + '');
        this.bar = BossBarAPI.addBar(this.player, this.barTextComponent, this.barColor, this.barStyle, this.barProgress // Progress (0.0 - 1.0)
        );
        this.init = true;
        return this;
    };
    BukkitBossBar.prototype.color = function (color) {
        this.barColor = this.BossBarColor[color];
        if (this.init) {
            this.bar.setColor(this.barColor);
        }
        return this;
    };
    BukkitBossBar.prototype.style = function (style) {
        this.barStyle = BossBarAPI.Style[style];
        if (this.init) {
            this.bar.setStyle(this.barStyle);
        }
        return this;
    };
    BukkitBossBar.prototype.textComponent = function (msg) {
        this.barTextComponent = msg;
        this.hasTextComponent = true;
        this.msg = null;
        if (this.init) {
            this.bar.setTitle();
            this.render();
        }
        return this;
    };
    BukkitBossBar.prototype.text = function (msg) {
        this.msg = msg + '';
        // this.barTextComponent = null
        // this.hasTextComponent = false
        if (this.init) {
            this.bar.setTitle(new text_1.TextComponent(this.msg + ''));
            // this.remove()
            // this.render()
        }
        return this;
    };
    BukkitBossBar.prototype.progress = function (progress) {
        if (progress === void 0) { progress = 50; }
        var _progress = Math.min(progress / 100, 0.99);
        var progressRounded = Math.round(_progress * 100) / 100;
        this.barProgress = progressRounded;
        if (this.init) {
            this.bar.setProgress(this.barProgress);
        }
        return this;
    };
    BukkitBossBar.prototype.show = function () {
        if (this.init) {
            this.bar.setVisible(true);
        }
    };
    BukkitBossBar.prototype.hide = function () {
        if (this.init) {
            this.bar.setVisible(false);
        }
    };
    BukkitBossBar.prototype.remove = function () {
        if (this.init) {
            this.bar.removePlayer(this.player);
            this.init = false;
        }
        return undefined;
    };
    return BukkitBossBar;
}());
exports.BukkitBossBar = BukkitBossBar;
