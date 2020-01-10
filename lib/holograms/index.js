"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var holograms_bukkit_1 = require("./holograms-bukkit");
var holograms_nukkit_1 = require("./holograms-nukkit");
var HologramManager = /** @class */ (function () {
    function HologramManager() {
        this.implementation = environment_1.default.IS_NUKKIT
            ? new holograms_nukkit_1.NukkitHologramManager()
            : new holograms_bukkit_1.BukkitHologramManager();
    }
    HologramManager.prototype.createHologram = function (_a) {
        var lines = _a.lines, location = _a.location;
        return this.implementation.createHologram({ lines: lines, location: location });
    };
    HologramManager.prototype.getHolograms = function () {
        return this.implementation.getHolograms();
    };
    return HologramManager;
}());
var Holograms = new HologramManager();
exports.default = Holograms;
