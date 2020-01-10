"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
function radiatum(playerName) {
    var toGlow = __plugin.getServer().getPlayer(playerName);
    if (toGlow !== undefined) {
        toGlow.setGlowing(!toGlow.isGlowing());
        echo(self, gettext_1.gettext('%s is now radioactive!', playerName));
    }
    else {
        echo(self, gettext_1.gettext('Player %s not online!', playerName));
    }
}
exports.radiatum = radiatum;
