"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
function actionbar(playername, text, color) {
    server_1.default.executeCommand("title " + playername + " actionbar {\"text\":\"" + text + "\",\"color\":\"" + color + "\"}\n    ");
}
exports.actionbar = actionbar;
