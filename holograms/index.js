"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
var holograms_bukkit_1 = require("./holograms-bukkit");
var holograms_nukkit_1 = require("./holograms-nukkit");
var convert_1 = require("../convert");
var HologramManager = /** @class */ (function () {
    function HologramManager() {
        this.implementation = environment.IS_NUKKIT
            ? new holograms_nukkit_1.NukkitHologramManager()
            : new holograms_bukkit_1.BukkitHologramManager();
    }
    HologramManager.prototype.createHologram = function (_a) {
        var lines = _a.lines, location = _a.location;
        return this.implementation.createHologram({ lines: lines, location: location });
    };
    HologramManager.prototype.getHolograms = function () {
        return convert_1.HashMapToObject(this.implementation.getHolograms());
    };
    return HologramManager;
}());
exports.default = new HologramManager();
