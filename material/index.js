"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("../environment");
///
var materialImpl = environment.IS_NUKKIT
    ? require('./material-nukkit')
    : require('./material-bukkit');
exports.default = materialImpl;
