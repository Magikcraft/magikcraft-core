"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
var Pokkit = /** @class */ (function () {
    function Pokkit() {
        this.pokkit = server_1.default.getPlugin('Pokkit');
    }
    return Pokkit;
}());
exports.default = new Pokkit();
