"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var DurableMap = __1.magik.DurableMap;
describe('DurableMap', function () {
    it('Creates a map', function () {
        var m = DurableMap('__test');
        m.clear();
        var key = Math.random();
        expect(m.getKeys().length).toBe(0);
        m.put(key, 'test');
        expect(m.getKeys().length).toBe(1);
    });
    it('Returns the same reference', function () {
        var m = DurableMap('__test2');
        m.put('b', 'testing');
        var m1 = DurableMap('__test2');
        expect(m1.getKeys().length).toBe(1);
        m1.put('a', 'test');
        expect(m1.getKeys().length).toBe(2);
        expect(m.get('a')).toEqual('test');
    });
    it('flushes to disk', function () {
        var m = DurableMap('__test');
        m.put('a', 'test');
        var f = __1.fs.readJson(m.storageFile);
        expect(f.a).toBe('test');
    });
});
