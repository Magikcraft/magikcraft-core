"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils");
function dixit(msg, playerName) {
    if (playerName === void 0) { playerName = self.getName(); }
    var recipient = utils.player(playerName);
    if (typeof msg === 'string') {
        echo(recipient, msg);
    }
    else {
        echo(recipient, msg.toString());
    }
}
exports.dixit = dixit;
