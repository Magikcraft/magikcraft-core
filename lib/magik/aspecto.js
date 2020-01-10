"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aspecto() {
    return self
        ? self
            .getTargetBlock(null, 200)
            .getRelative(0, 1, 0)
            .getLocation()
        : null;
}
exports.aspecto = aspecto;
