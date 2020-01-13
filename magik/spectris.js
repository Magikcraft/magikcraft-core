"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameMode = Java.type('org.bukkit.GameMode');
function spectris() {
    var player = self;
    if (!self)
        return;
    if (player.getGameMode() == GameMode.SPECTATOR)
        return;
    var gameMode = player.getGameMode();
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
            player.setGameMode(gameMode);
            player.setFlying(isFlying);
        }
    }, 1000);
}
exports.spectris = spectris;
