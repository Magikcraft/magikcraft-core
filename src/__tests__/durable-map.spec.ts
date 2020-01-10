import { fs, magik } from '..'

const DurableMap = magik.DurableMap

describe('DurableMap', () => {
	it('Creates a map', () => {
		const m = DurableMap('__test')
		m.clear()
		const key = Math.random()
		expect(m.getKeys().length).toBe(0)
		m.put(key, 'test')
		expect(m.getKeys().length).toBe(1)
	})
	it('Returns the same reference', () => {
		const m = DurableMap('__test2')
		m.put('b', 'testing')
		const m1 = DurableMap('__test2')
		expect(m1.getKeys().length).toBe(1)
		m1.put('a', 'test')
		expect(m1.getKeys().length).toBe(2)
		expect(m.get('a')).toEqual('test')
	})
	it('flushes to disk', () => {
		const m = DurableMap('__test')
		m.put('a', 'test')
		const f = fs.readJson(m.storageFile)
		expect(f.a).toBe('test')
	})
})
