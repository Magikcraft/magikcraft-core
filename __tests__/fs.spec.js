"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var testDir = "./__test_dir__";
var testFile = testDir + '/test.txt';
var testContent = 'Test content';
describe('fs', function () {
    it('Can correctly detect the (non)-existence of a file', function () {
        expect(__1.fs.exists('./')).toBe(true);
        expect(__1.fs.exists('./absolutelyNoWayThisEvenExists')).toBe(false);
    });
    it('Can create, write, read, and remove files', function () {
        if (__1.fs.exists(testDir)) {
            __1.fs.remove(testDir);
        }
        expect(__1.fs.exists(testDir)).toBe(false);
        __1.fs.writeFile(testFile, testContent);
        expect(__1.fs.exists(testFile)).toBe(true);
        var content = __1.fs.readFile(testFile);
        // Note, fs.write adds a new-line to the file
        expect(content).toBe(testContent + '\n');
        // Clean-up
        __1.fs.remove(testDir);
        expect(__1.fs.exists(testDir)).toBe(false);
    });
    it('can copy an entire directory recursively', function () {
        if (__1.fs.exists(testDir)) {
            __1.fs.remove(testDir);
        }
        expect(__1.fs.exists(testDir)).toBe(false);
        __1.fs.writeFile(testFile, testContent);
        expect(__1.fs.exists(testFile)).toBe(true);
        var destDir = testDir + '1';
        var destFile = destDir + '/test.txt';
        expect(__1.fs.exists(destFile)).toBe(false);
        __1.fs.copyDir(testDir, destDir);
        expect(__1.fs.exists(destFile)).toBe(true);
        __1.fs.remove(destDir);
        expect(__1.fs.exists(destFile)).toBe(false);
    });
});
