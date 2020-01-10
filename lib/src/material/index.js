"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
///
var materialImpl = environment_1.default.IS_NUKKIT
    ? require('./material-nukkit')
    : require('./material-bukkit');
exports.default = materialImpl;
