"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* class decorator */
function staticImplements() {
    return function (constructor) {
        constructor;
    };
}
exports.staticImplements = staticImplements;
var BossBarColorIndex;
(function (BossBarColorIndex) {
    BossBarColorIndex["BLUE"] = "BLUE";
    BossBarColorIndex["GREEN"] = "GREEN";
    BossBarColorIndex["PINK"] = "PINK";
    BossBarColorIndex["PURPLE"] = "PURPLE";
    BossBarColorIndex["RED"] = "RED";
    BossBarColorIndex["WHITE"] = "WHITE";
})(BossBarColorIndex = exports.BossBarColorIndex || (exports.BossBarColorIndex = {}));
var BossBarStyleIndex;
(function (BossBarStyleIndex) {
    BossBarStyleIndex["NOTCHED_10"] = "SEGMENTED_10";
    BossBarStyleIndex["NOTCHED_12"] = "SEGMENTED_12";
    BossBarStyleIndex["NOTCHED_20"] = "SEGMENTED_20";
    BossBarStyleIndex["NOTCHED_6"] = "SEGMENTED_6";
})(BossBarStyleIndex = exports.BossBarStyleIndex || (exports.BossBarStyleIndex = {}));
