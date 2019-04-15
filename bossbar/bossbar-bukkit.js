"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bossbar_1 = require("./bossbar");
var environment = require("../environment");
var hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT;
var BossBarAPI = hasBukkitBossBar
    ? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
    : { Color: {}, Style: {} };
// Requires the Spigot server or a plugin that provides this
exports.TextComponent = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.chat.TextComponent')
    : undefined;
var log_1 = require("../log");
var log = log_1.logger(__filename);
/**
 *
 * new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true )
 * .append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create();
 */
var ComponentBuilderClass = hasBukkitBossBar
    ? Java.type('net.md_5.bungee.api.chat.ComponentBuilder')
    : undefined;
exports.ComponentBuilder = function (msg) {
    return new ComponentBuilderClass(msg);
};
exports.bar = function (msg, player) { return new Bar(msg, player); };
var Bar = /** @class */ (function () {
    function Bar(msg, player) {
        if (msg === void 0) { msg = ''; }
        if (player === void 0) { player = global.self; }
        var _this = this;
        this.barColor = bossbar_1.color.RED;
        this.barStyle = bossbar_1.style.NOTCHED_20;
        this.init = false;
        this.barProgress = 0.5;
        this.hasTextComponent = false;
        this.removeAllBars = function () { return BossBarAPI.removeAllBars(_this.player); };
        this.msg = msg;
        this.player = player;
    }
    Bar.prototype.render = function () {
        if (this.init) {
            return this;
        }
        this.barTextComponent = this.hasTextComponent
            ? new exports.TextComponent(this.barTextComponent)
            : new exports.TextComponent(this.msg + '');
        this.bar = BossBarAPI.addBar(this.player, this.barTextComponent, this.barColor, this.barStyle, this.barProgress // Progress (0.0 - 1.0)
        );
        this.init = true;
        return this;
    };
    Bar.prototype.color = function (theColor) {
        this.barColor = BossBarAPI.Color[theColor];
        if (this.init) {
            this.bar.setColor(this.barColor);
        }
        return this;
    };
    Bar.prototype.style = function (theStyle) {
        this.barStyle = theStyle;
        return this;
    };
    Bar.prototype.textComponent = function (msg) {
        this.barTextComponent = msg;
        this.hasTextComponent = true;
        this.msg = null;
        if (this.init) {
            this.remove();
            this.render();
        }
        return this;
    };
    Bar.prototype.text = function (msg) {
        this.msg = msg + '';
        this.barTextComponent = null;
        this.hasTextComponent = false;
        if (this.init) {
            this.remove();
            this.render();
        }
        return this;
    };
    Bar.prototype.progress = function (progress) {
        if (progress === void 0) { progress = 50; }
        var _progress = Math.min(progress / 100, 0.99);
        var progressRounded = Math.round(_progress * 100) / 100;
        this.barProgress = progressRounded;
        if (this.init) {
            this.bar.setProgress(this.barProgress);
        }
        return this;
    };
    Bar.prototype.show = function () {
        if (this.init) {
            this.bar.setVisible(true);
        }
    };
    Bar.prototype.hide = function () {
        if (this.init) {
            this.bar.setVisible(false);
        }
    };
    Bar.prototype.remove = function () {
        if (this.init) {
            this.bar.removePlayer(this.player);
            this.init = false;
        }
        return undefined;
    };
    return Bar;
}());
exports.Bar = Bar;
