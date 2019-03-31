"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * readFile
 * @param {string} filename - path to file, relative to Minecraft server root
 * @return {string}
 *
 * Reads the contents of a file from the filesystem.
 */
function readFile(filename) {
    var FileReader = java.io.FileReader;
    var BufferedReader = java.io.BufferedReader;
    var buffered = new BufferedReader(new FileReader(filename));
    var code = '';
    var line;
    while ((line = buffered.readLine()) !== null) {
        code += line + '\n';
    }
    buffered.close();
    return code;
}
exports.readFile = readFile;
