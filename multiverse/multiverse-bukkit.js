"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils");
var fs_1 = require("../fs");
var server_1 = require("../server");
var log_1 = require("../log");
var log = log_1.logger(__filename);
// https://github.com/Multiverse/Multiverse-Core
var BukkitWorldManager = /** @class */ (function () {
    function BukkitWorldManager() {
        this.multiversePlugin = server_1.server.getPlugin('Multiverse-Core');
        if (!this.multiversePlugin) {
            throw new Error('Multiverse-Core plugin not found! Is it installed on this server?');
        }
        this.worldmanager = this.multiversePlugin.getMVWorldManager();
        this.q = queue();
    }
    BukkitWorldManager.prototype.getWorldPath = function (worldName) {
        var worldDir = server_1.server.getWorldDir();
        var path = worldDir + "/" + worldName;
        return path;
    };
    BukkitWorldManager.prototype.worldExistsOnDisk = function (worldName) {
        var path = this.getWorldPath(worldName);
        return fs_1.fs.exists(path);
    };
    BukkitWorldManager.prototype.destroyWorld = function (worldName) {
        log("Destroying world " + worldName + "...");
        var world = utils.world(worldName);
        if (world) {
            log("Deleting world " + worldName + " from registry...");
            this.worldmanager.deleteWorld(worldName, true, true);
            log("Done.");
        }
        if (this.worldExistsOnDisk(worldName)) {
            log("Deleting world " + worldName + " from disk...");
            fs_1.fs.remove(this.getWorldPath(worldName));
            log("Done.");
        }
        log("Successfully Destroyed world " + worldName + ".");
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 1); });
    };
    BukkitWorldManager.prototype.importWorld = function (worldName) {
        return __awaiter(this, void 0, void 0, function () {
            var world, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log("Importing world " + worldName + "...");
                        world = utils.world(worldName);
                        if (world) {
                            log("World " + worldName + " already imported.");
                            return [2 /*return*/, world];
                        }
                        if (!this.worldExistsOnDisk(worldName)) {
                            err = "Cannot import world " + worldName + ": file not found";
                            log('err', err);
                            throw new Error(err);
                        }
                        return [4 /*yield*/, this.q.queueOperation(function () {
                                return server_1.server.executeCommand("mv import " + worldName + " normal");
                            })];
                    case 1:
                        _a.sent();
                        world = utils.world(worldName);
                        if (!world) {
                            err = "Failed to import world " + worldName;
                            log('err', err);
                            throw new Error(err);
                        }
                        log("Successfully imported world " + worldName);
                        return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(world); }, 1); })];
                }
            });
        });
    };
    BukkitWorldManager.prototype.cloneWorld = function (worldName, templateWorldName) {
        return __awaiter(this, void 0, void 0, function () {
            var templateWorld, cloned, world;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.destroyWorld(worldName)];
                    case 1:
                        _a.sent();
                        log("Cloning world " + worldName);
                        return [4 /*yield*/, this.importWorld(templateWorldName)];
                    case 2:
                        templateWorld = _a.sent();
                        if (!templateWorld) {
                            log("Cannot clone " + worldName + ". " + templateWorldName + " not found.");
                            return [2 /*return*/];
                        }
                        cloned = this.multiversePlugin.cloneWorld(templateWorldName, worldName, 'normal');
                        if (!cloned) {
                            log("Failed to clone world " + templateWorldName);
                            return [2 /*return*/];
                        }
                        world = utils.world(worldName);
                        log("World clone complete for " + worldName);
                        // Have to do this to ensure world fully built.
                        return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(world); }, 1); })];
                }
            });
        });
    };
    BukkitWorldManager.prototype.getMVWorld = function (name) {
        return this.worldmanager.getMVWorld(name);
    };
    BukkitWorldManager.prototype.unloadWorld = function (name) {
        return this.worldmanager.unloadWorld(name, true);
    };
    return BukkitWorldManager;
}());
exports.BukkitWorldManager = BukkitWorldManager;
function queue() {
    var PollIntervalMs = 500;
    var ready = false;
    function doCheck() {
        ready = __plugin.server.getPluginCommand('mv');
        if (!ready) {
            log('Not ready to import worlds yet...');
            return setTimeout(doCheck, PollIntervalMs);
        }
        else {
            log('Ready to operate.');
        }
    }
    doCheck();
    return {
        queueOperation: function (fn) {
            return new Promise(function (resolve) {
                var awaiter = function () {
                    if (ready) {
                        fn();
                        resolve();
                    }
                    else {
                        log('Delaying operation...');
                        setTimeout(awaiter, PollIntervalMs);
                    }
                };
                awaiter();
            });
        },
    };
}
