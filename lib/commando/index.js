"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File = java.io.File;
var serverDir = new File('.').getAbsolutePath();
exports.commando = require("/" + serverDir + "/scriptcraft/plugins/commando/commando")
    .commando;
