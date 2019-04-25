"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = function (player) {
    return player ? __plugin.server.getPlayer(player) : null;
};
