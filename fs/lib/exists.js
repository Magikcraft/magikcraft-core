"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {boolean}
 *
 * Checks if file or directory exists.
 */
function exists(filename) {
    var File = java.io.File;
    var file = new File(filename);
    return file.exists();
}
exports.exists = exists;
