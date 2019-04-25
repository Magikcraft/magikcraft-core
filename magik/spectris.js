"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameMode = Java.type('org.bukkit.GameMode');
function spectris() {
    var player = self;
    if (!self)
        return;
    if (player.gameMode == 'SPECTATOR')
        return;
    var gameMode = player.gameMode;
    var isFlying = player.isFlying();
    player.setGameMode(GameMode.SPECTATOR);
    var count = 5;
    echo(player, "WARPING... " + count);
    count--;
    var timer = setInterval(function () {
        echo(player, "WARPING... " + count);
        count--;
        if (count === 0) {
            clearInterval(timer);
            player.setGameMode(GameMode[gameMode]);
            player.setFlying(isFlying);
        }
    }, 1000);
}
exports.spectris = spectris;
