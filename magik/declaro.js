"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
function declaro(itemToDeclare) {
    var allowedItems = {
        APPLE: 'APPLE',
        ELYTRA: 'ELYTRA',
    };
    function getTheThing(item) {
        if (item) {
            return allowedItems[item.toUpperCase()];
        }
        else {
            return false;
        }
    }
    var manifest = function (item) {
        var MATERIAL = Java.type('org.bukkit.Material');
        var ItemStack = Java.type('org.bukkit.inventory.ItemStack');
        var TheThing = new ItemStack(MATERIAL[item]);
        self.getInventory().addItem(TheThing);
        echo(self, gettext_1.gettext('Declaro! you manifest %s', item));
    };
    var thing = getTheThing(itemToDeclare);
    if (thing) {
        manifest(thing);
    }
}
exports.declaro = declaro;
