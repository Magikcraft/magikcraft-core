"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("../fs");
var testDir = "./__test_dir__";
var testFile = testDir + '/test.txt';
var testContent = 'Test content';
describe('fs', function () {
    it('Can correctly detect the (non)-existence of a file', function () {
        expect(fs_1.default.exists('./')).toBe(true);
        expect(fs_1.default.exists('./absolutelyNoWayThisEvenExists')).toBe(false);
    });
    it('Can create, write, read, and remove files', function () {
        if (fs_1.default.exists(testDir)) {
            fs_1.default.remove(testDir);
        }
        expect(fs_1.default.exists(testDir)).toBe(false);
        fs_1.default.writeFile(testFile, testContent);
        expect(fs_1.default.exists(testFile)).toBe(true);
        var content = fs_1.default.readFile(testFile);
        // Note, fs.write adds a new-line to the file
        expect(content).toBe(testContent + '\n');
        // Clean-up
        fs_1.default.remove(testDir);
        expect(fs_1.default.exists(testDir)).toBe(false);
    });
});
