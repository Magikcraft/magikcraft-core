import { Logger } from '../log'
const log = Logger(__filename)

export class Queue {
	static PollIntervalMs = 500
	private ready = false
	constructor() {
		this.doCheck()
	}
	public queueOperation(fn: () => void) {
		return new Promise(resolve => {
			const awaiter = () => {
				if (this.ready) {
					fn()
					resolve()
				} else {
					log('Delaying operation...')
					setTimeout(() => awaiter(), Queue.PollIntervalMs)
				}
			}
			awaiter()
		})
	}
	private recheck() {
		setTimeout(() => this.doCheck(), Queue.PollIntervalMs)
	}
	private doCheck() {
		const result = __plugin.server.getPluginCommand('mv')
		if (!result) {
			log('Not ready to import worlds yet...')
			this.recheck()
		} else {
			log('Ready to operate.')
			this.ready = true
		}
	}
}
