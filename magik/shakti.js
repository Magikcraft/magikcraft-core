"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shakti(loc) {
    loc = loc ? loc : this.aspecto();
    if (loc) {
        loc.world.strikeLightning(loc);
    }
}
exports.shakti = shakti;
