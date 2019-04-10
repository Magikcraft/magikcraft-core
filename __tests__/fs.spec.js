"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("../fs");
var testDir = "./__test_dir__";
var testFile = testDir + '/test.txt';
var testContent = 'Test content';
describe('fs', function () {
    it('Can correctly detect the (non)-existence of a file', function () {
        expect(fs_1.fs.exists('./')).toBe(true);
        expect(fs_1.fs.exists('./absolutelyNoWayThisEvenExists')).toBe(false);
    });
    it('Can create, write, read, and remove files', function () {
        if (fs_1.fs.exists(testDir)) {
            fs_1.fs.remove(testDir);
        }
        expect(fs_1.fs.exists(testDir)).toBe(false);
        fs_1.fs.writeFile(testFile, testContent);
        expect(fs_1.fs.exists(testFile)).toBe(true);
        var content = fs_1.fs.readFile(testFile);
        // Note, fs.write adds a new-line to the file
        expect(content).toBe(testContent + '\n');
        // Clean-up
        fs_1.fs.remove(testDir);
        expect(fs_1.fs.exists(testDir)).toBe(false);
    });
    it('can copy an entire directory recursively', function () {
        if (fs_1.fs.exists(testDir)) {
            fs_1.fs.remove(testDir);
        }
        expect(fs_1.fs.exists(testDir)).toBe(false);
        fs_1.fs.writeFile(testFile, testContent);
        expect(fs_1.fs.exists(testFile)).toBe(true);
        var destDir = testDir + '1';
        var destFile = destDir + '/test.txt';
        expect(fs_1.fs.exists(destFile)).toBe(false);
        fs_1.fs.copyDir(testDir, destDir);
        expect(fs_1.fs.exists(destFile)).toBe(true);
        fs_1.fs.remove(destDir);
        expect(fs_1.fs.exists(destFile)).toBe(false);
    });
});
