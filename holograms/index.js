"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
var BukkitPlugin = 'HolographicDisplays';
var HologramsAPI = /** @class */ (function () {
    function HologramsAPI() {
        if (!server_1.default.isPluginEnabled(BukkitPlugin)) {
            throw new Error('Holographics Display plugin not found on this server.');
        }
        this.API = com.gmail.filoghost.holographicdisplays.api.HologramsAPI;
    }
    HologramsAPI.prototype.createHologram = function (_a) {
        var _b = _a.lines, lines = _b === void 0 ? [] : _b, location = _a.location;
        var hologram = this.API.createHologram(__plugin, location);
        lines.forEach(function (line) { return hologram.appendTextLine(line); });
        return hologram;
    };
    return HologramsAPI;
}());
var APISurface = new HologramsAPI();
exports.default = APISurface;
