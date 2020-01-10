"use strict";
var fs = require('../lib').fs;
var testDir = "./__test_dir__";
var testFile = testDir + '/test.txt';
var testContent = 'Test content';
describe('fs', function () {
    it('Can correctly detect the (non)-existence of a file', function () {
        expect(fs.exists('./')).toBe(true);
        expect(fs.exists('./absolutelyNoWayThisEvenExists')).toBe(false);
    });
    it('Can create, write, read, and remove files', function () {
        if (fs.exists(testDir)) {
            fs.remove(testDir);
        }
        expect(fs.exists(testDir)).toBe(false);
        fs.writeFile(testFile, testContent);
        expect(fs.exists(testFile)).toBe(true);
        var content = fs.readFile(testFile);
        // Note, fs.write adds a new-line to the file
        expect(content).toBe(testContent + '\n');
        // Clean-up
        fs.remove(testDir);
        expect(fs.exists(testDir)).toBe(false);
    });
    it('can copy an entire directory recursively', function () {
        if (fs.exists(testDir)) {
            fs.remove(testDir);
        }
        expect(fs.exists(testDir)).toBe(false);
        fs.writeFile(testFile, testContent);
        expect(fs.exists(testFile)).toBe(true);
        var destDir = testDir + '1';
        var destFile = destDir + '/test.txt';
        expect(fs.exists(destFile)).toBe(false);
        fs.copyDir(testDir, destDir);
        expect(fs.exists(destFile)).toBe(true);
        fs.remove(destDir);
        expect(fs.exists(destFile)).toBe(false);
    });
});
