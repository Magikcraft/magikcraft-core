"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = require("../gettext");
function ianuae(location) {
    if (!location) {
        echo(self, gettext_1.gettext('Nowhere to teleport to...'));
    }
    else {
        self.teleport(location);
    }
}
exports.ianuae = ianuae;
