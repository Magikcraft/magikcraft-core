"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function celeritate(speed) {
    if (speed === void 0) { speed = 1; }
    speed = Math.min(1, speed);
    speed = Math.max(0, speed);
    echo(self, 'Celeritate! You now have super speed!');
    self.setWalkSpeed(speed);
}
exports.celeritate = celeritate;
