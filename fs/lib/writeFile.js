"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * writeFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @param {string} content - file content to write
 * @return {void}
 *
 * Writes the contents of a file to the filesystem.
 */
function writeFile(filename, content) {
    var FileWriter = Java.type('java.io.FileWriter');
    var File = Java.type('java.io.File');
    var path = filename.replace(filename.split('/').pop(), '');
    new File(path).mkdirs();
    var fw = new FileWriter(filename);
    fw.write(content);
    fw.close();
}
exports.writeFile = writeFile;
