// Do (10).times(() => {//something}).withDelay(1000).now();
// tslint:disable:max-classes-per-file

export type TaskCallback = (iterations?: number) => void

export interface IDoable {
	times: (fn: () => void) => ISchedulable
}

export interface ISchedulable {
	now: () => void;
	withDelay: (delay: number) => IDelayedExecutable;
}

export interface IDelayedExecutable {
	now: () => void;
}

export class Doable {
	private iterations: number
	constructor(iterations: number) {
		this.iterations = iterations
	}

	public times = (fn: () => void) =>
		new Schedulable({ iterations: this.iterations, fn })
}

export class Schedulable {
	private iterations: number
	private fn: () => any
	constructor(opts: any) {
		this.iterations = opts.iterations
		this.fn = opts.fn
	}

	public now(done?: TaskCallback) {
		return new Executable({
			done,
			fn: this.fn,
			iterations: this.iterations,
		}).execute()
	}

	public withDelay(delay: number) {
		return new DelayedExecutable({
			fn: this.fn,
			iterations: this.iterations,
		})
	}
}

export class Executable {
	private iterations: number
	private fn: any
	private done: any
	constructor(opts: any) {
		this.iterations = opts.iterations
		this.fn = opts.fn
		this.done = opts.done
	}
	public execute() {
		// Set up the iterations, with delay
		let n
		for (n = 0; n < this.iterations; n++) {
			this.fn(n)
		}
		if (this.done) {
			this.done(n - 1)
		}
	}
}

export class DelayedExecutable {
	private iterations: number
	private fn: any
	private delay: number

	constructor(opts: any) {
		this.iterations = opts.iterations
		this.fn = opts.fn
		this.delay = opts.delay
	}

	public now = (done?: TaskCallback) => this.execute(done)

	private execute(done?: TaskCallback) {
		// Set up the iterations, with delay
		for (let n = 0; n < this.iterations; n++) {
			const fn =
				n === this.iterations - 1
					? () => {
							this.fn(this.iterations - 1)
							if (typeof done !== 'undefined') {
								done(this.iterations - 1)
							}
						}
					: () => this.fn(n)
			setTimeout(fn, n * this.delay)
		}
	}
}

/**
 * The implementation below uses a closure to maintain configuration state. It's a more elegant,
 * purely functional implementation - but the intellisense experience for users sucks.
 * The class-based implementation above has a much more discoverable and traversible API via
 * intellisense.
 */
/*
export const Do = function Do(iterations: number) {
	return {
		times: function (fn: (iteration?: number) => any) {
			return {
				withDelay: function (delay: number) {
					return {
						now: function (done?: (n: number) => void) {
							// Set up the iterations, with delay
							for (let n = 0; n < iterations; n++) {
								const _fn = (n === iterations - 1) ?
									function () {
										fn(iterations - 1);
										if (typeof done !== "undefined") {
											done(iterations - 1);
										}
									} :
									() => fn(n)
								magikcraft.io.setTimeout(_fn, n * delay);
							}
						}
					}
				},
				now: function (done?: (n: number) => void) {
					// Set up the iterations, with delay
					let n;
					for (n = 0; n < iterations; n++) {
						fn(n)
					}
					if (done) done(n - 1);
				}
			}
		}
	}
}
*/
