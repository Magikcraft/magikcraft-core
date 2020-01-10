"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var testDir = "./__test_dir__";
var testFile = testDir + '/test.txt';
var testContent = 'Test content';
describe('fs', function () {
    it('Can correctly detect the (non)-existence of a file', function () {
        expect(lib_1.fs.exists('./')).toBe(true);
        expect(lib_1.fs.exists('./absolutelyNoWayThisEvenExists')).toBe(false);
    });
    it('Can create, write, read, and remove files', function () {
        if (lib_1.fs.exists(testDir)) {
            lib_1.fs.remove(testDir);
        }
        expect(lib_1.fs.exists(testDir)).toBe(false);
        lib_1.fs.writeFile(testFile, testContent);
        expect(lib_1.fs.exists(testFile)).toBe(true);
        var content = lib_1.fs.readFile(testFile);
        // Note, fs.write adds a new-line to the file
        expect(content).toBe(testContent + '\n');
        // Clean-up
        lib_1.fs.remove(testDir);
        expect(lib_1.fs.exists(testDir)).toBe(false);
    });
    it('can copy an entire directory recursively', function () {
        if (lib_1.fs.exists(testDir)) {
            lib_1.fs.remove(testDir);
        }
        expect(lib_1.fs.exists(testDir)).toBe(false);
        lib_1.fs.writeFile(testFile, testContent);
        expect(lib_1.fs.exists(testFile)).toBe(true);
        var destDir = testDir + '1';
        var destFile = destDir + '/test.txt';
        expect(lib_1.fs.exists(destFile)).toBe(false);
        lib_1.fs.copyDir(testDir, destDir);
        expect(lib_1.fs.exists(destFile)).toBe(true);
        lib_1.fs.remove(destDir);
        expect(lib_1.fs.exists(destFile)).toBe(false);
    });
});
