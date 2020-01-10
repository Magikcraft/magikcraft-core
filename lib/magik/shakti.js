"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aspecto_1 = require("./aspecto");
function shakti(loc) {
    loc = loc ? loc : aspecto_1.aspecto();
    if (loc) {
        loc.world.strikeLightning(loc);
    }
}
exports.shakti = shakti;
