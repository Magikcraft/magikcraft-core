"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("../log");
var log = log_1.Logger(__filename);
var Queue = /** @class */ (function () {
    function Queue() {
        this.ready = false;
        this.doCheck();
    }
    Queue.prototype.queueOperation = function (fn) {
        var _this = this;
        return new Promise(function (resolve) {
            var awaiter = function () {
                if (_this.ready) {
                    fn();
                    resolve();
                }
                else {
                    log('Delaying operation...');
                    setTimeout(function () { return awaiter(); }, Queue.PollIntervalMs);
                }
            };
            awaiter();
        });
    };
    Queue.prototype.recheck = function () {
        var _this = this;
        setTimeout(function () { return _this.doCheck(); }, Queue.PollIntervalMs);
    };
    Queue.prototype.doCheck = function () {
        var result = __plugin.server.getPluginCommand('mv');
        if (!result) {
            log('Not ready to import worlds yet...');
            this.recheck();
        }
        else {
            log('Ready to operate.');
            this.ready = true;
        }
    };
    Queue.PollIntervalMs = 500;
    return Queue;
}());
exports.Queue = Queue;
