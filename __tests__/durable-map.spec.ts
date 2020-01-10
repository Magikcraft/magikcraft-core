import { fs } from '../lib'
import { magik } from '../lib'

var DurableMap = magik.DurableMap

describe('DurableMap', () => {
	it('Creates a map', () => {
		var m = DurableMap('__test')
		m.clear()
		var key = Math.random()
		expect(m.getKeys().length).toBe(0)
		m.put(key, 'test')
		expect(m.getKeys().length).toBe(1)
	})
	it('Returns the same reference', () => {
		var m = DurableMap('__test2')
		m.put('b', 'testing')
		var m1 = DurableMap('__test2')
		expect(m1.getKeys().length).toBe(1)
		m1.put('a', 'test')
		expect(m1.getKeys().length).toBe(2)
		expect(m.get('a')).toEqual('test')
	})
	it('flushes to disk', () => {
		var m = DurableMap('__test')
		m.put('a', 'test')
		var f = fs.readJson(m.storageFile)
		expect(f.a).toBe('test')
	})
})
