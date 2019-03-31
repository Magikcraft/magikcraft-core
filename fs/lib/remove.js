"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {boolean}
 *
 * Delete file or directory (recursive).
 */
function remove(filename) {
    var File = java.io.File;
    var file = new File(filename);
    if (file.exists()) {
        if (file.isDirectory()) {
            // Recursively delete all files in dir.
            var files = Java.from(file.listFiles());
            files.forEach(function (_file) {
                remove(_file.getPath());
            });
            // Now delete empty dir
            file.delete();
        }
        else {
            file.delete();
        }
    }
}
exports.remove = remove;
