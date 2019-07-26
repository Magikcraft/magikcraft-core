"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils");
var text_1 = require("text");
var ChatMessageType = Java.type('net.md_5.bungee.api.ChatMessageType');
function actionbar(playername, text, color) {
    utils
        .player(playername)
        .spigot()
        .sendMessage(ChatMessageType.ACTION_BAR, text_1.ComponentBuilder(text)
        .color(color)
        .create());
}
exports.actionbar = actionbar;
