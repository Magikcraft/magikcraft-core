"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var log_1 = require("../log");
var log = log_1.default(__filename);
var PokkitPlayer;
var barID = 0;
try {
    PokkitPlayer = Java.type('nl.rutgerkok.pokkit.player.PokkitPlayer');
}
catch (e) {
    console.log('No Pokkit Bar'); // tslint:disable-line
}
var toNukkitPlayer = function (player) { return PokkitPlayer.toNukkit(player); };
var NukkitColors = {
    PINK: 0,
    BLUE: 1,
    RED: 2,
    GREEN: 3,
    YELLOW: 4,
    PURPLE: 5,
    WHITE: 6,
};
var NukkitBossBar = /** @class */ (function () {
    function NukkitBossBar(player) {
        this.id = barID;
        barID++;
        this.bar = new NukkitBossBar.BossBar(player.getName() + this.id, '', 0, 100);
        this.player = toNukkitPlayer(player);
        return this;
    }
    NukkitBossBar.prototype.render = function () {
        // For the Nukkit bar we render on any property update
        // this.bar.sendTo(this.player)
        return this;
    };
    NukkitBossBar.prototype.color = function (color) {
        // Nukkit has no bar color - it's always purple
        // We have a method for it, and it may work in a future update of the client
        this.bar.setColor(this.player, this.id, NukkitColors[color]);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.style = function () {
        // Nukkit has no bar style
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.text = function (title) {
        this.bar.setTitle(title);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.progress = function (percentage) {
        this.bar.setHealth(percentage);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.remove = function () {
        this.bar.removeFrom(this.player);
        log("Removing bar " + this.id);
        return this;
    };
    NukkitBossBar.prototype.removeAllBars = function () {
        // @TODO
    };
    NukkitBossBar.BossBar = Java.type(environment_1.default.NUKKIT_BOSSBAR_TYPE);
    return NukkitBossBar;
}());
exports.NukkitBossBar = NukkitBossBar;
