"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hardLimitIterations = 15;
var minDelayms = 10;
function doNTimes(action, nTimes, delay, callback) {
    if (nTimes === void 0) { nTimes = 1; }
    if (delay === void 0) { delay = 100; }
    var maxN = hardLimitIterations;
    nTimes = Math.min(nTimes, maxN);
    delay = Math.max(delay, minDelayms);
    function iterate(theAction, i) {
        if (i > 0) {
            theAction(i);
            global.setTimeout(function () { return iterate(theAction, i - 1); }, delay);
        }
        else {
            if (callback) {
                return callback();
            }
            else {
                return;
            }
        }
    }
    iterate(action, nTimes);
}
exports.doNTimes = doNTimes;
