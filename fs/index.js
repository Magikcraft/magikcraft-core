"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File = Java.type('java.io.File');
exports.fs = {
    readDir: function (path) {
        var folder = new File(path);
        var listOfFiles = folder.listFiles();
        var files = [];
        if (listOfFiles && listOfFiles.length) {
            for (var i = 0; i < listOfFiles.length; i++) {
                if (listOfFiles[i].isFile()) {
                    files.push(listOfFiles[i].getName());
                }
            }
        }
        return files;
    },
    /**
     * exists
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {boolean}
     *
     * Checks if file or directory exists.
     */
    exists: function (filename) {
        var file = new File(filename);
        return file.exists();
    },
    /**
     * readFile
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {string}
     *
     * Reads the contents of a file from the filesystem.
     */
    readFile: function (filename) {
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
    },
    /**
     * remove
     * @param {string} filename - path to file, relative to Minecraft server root
     * @return {boolean}
     *
     * Delete file or directory (recursive).
     */
    remove: function (filename) {
        var file = new File(filename);
        if (file.exists()) {
            if (file.isDirectory()) {
                // Recursively delete all files in dir.
                var files = Java.from(file.listFiles());
                files.forEach(function (_file) {
                    exports.fs.remove(_file.getPath());
                });
                // Now delete empty dir
                file.delete();
            }
            else {
                file.delete();
            }
        }
    },
    /**
     * writeFile
     * @param {string} filename - path to file, relative to Minecraft server root
     * @param {string} content - file content to write
     * @return {void}
     *
     * Writes the contents of a file to the filesystem.
     */
    writeFile: function (filename, content) {
        var FileWriter = Java.type('java.io.FileWriter');
        var path = filename.replace(filename.split('/').pop(), '');
        new File(path).mkdirs();
        var fw = new FileWriter(filename);
        fw.write(content);
        fw.close();
    },
};
