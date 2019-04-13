"use strict";
module.exports = function (_a) {
    var onRun = _a.onRun, _b = _a.onCompletion, onCompletion = _b === void 0 ? function () { } : _b;
    var AsyncTaskNukkit = Java.type('cn.nukkit.scheduler.AsyncTask');
    var AsyncTaskClass = Java.extend(AsyncTaskNukkit, {
        onRun: onRun,
        onCompletion: onCompletion,
    });
    return new AsyncTaskClass();
};
