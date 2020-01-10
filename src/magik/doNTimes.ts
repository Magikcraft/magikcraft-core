const hardLimitIterations = 15
const minDelayms = 10

export function doNTimes(action, nTimes = 1, delay = 100, callback?) {
	const maxN = hardLimitIterations
	nTimes = Math.min(nTimes, maxN)
	delay = Math.max(delay, minDelayms)
	function iterate(theAction, i) {
		if (i > 0) {
			theAction(i)
			global.setTimeout(() => iterate(theAction, i - 1), delay)
		} else {
			if (callback) {
				return callback()
			} else {
				return
			}
		}
	}
	iterate(action, nTimes)
}
