"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require("events");
var Material = Java.type('org.bukkit.Material');
function icePath() {
    if (!self)
        return;
    var sneakDebounce = false;
    var active = true;
    var eventHandler = events.playerMove(function (event) {
        if (!event.player || event.player.name !== self.name)
            return;
        if (!active)
            return;
        var headBlock = event.from.block.getRelative(0, 1, 0);
        var feetBlock = event.from.block.getRelative(0, 0, 0);
        var blockBeneath = event.from.block.getRelative(0, -1, 0);
        var block2Beneath = event.from.block.getRelative(0, -2, 0);
        if (headBlock.type == Material.ICE)
            headBlock.setType(Material.AIR);
        if (feetBlock.type == Material.ICE)
            feetBlock.setType(Material.AIR);
        if (event.player.isSneaking() && !sneakDebounce) {
            if (blockBeneath.type == Material.ICE) {
                sneakDebounce = true;
                blockBeneath.setType(Material.AIR);
                setTimeout(function () { return (sneakDebounce = false); }, 100);
            }
            if (block2Beneath.type == Material.AIR) {
                var type_1 = block2Beneath.type;
                block2Beneath.setType(Material.ICE);
                setTimeout(function () { return block2Beneath.setType(type_1); }, 20000);
            }
        }
        else {
            if (blockBeneath.type == Material.AIR ||
                blockBeneath.type == Material.WATER) {
                var type_2 = blockBeneath.type;
                setTimeout(function () { return blockBeneath.setType(type_2); }, 20000);
                blockBeneath.setType(Material.ICE);
            }
        }
    });
    setTimeout(function () { return eventHandler.unregister(); }, 10000);
}
exports.icePath = icePath;
