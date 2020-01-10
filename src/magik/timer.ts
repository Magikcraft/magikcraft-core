// import { DurableMap } from './durable-map';
// import environment from '../environment'
// // Decorate setInterval and clearInterval to deal with clearing setIntervals when users quit
// const $: any = global;
// let timers;
// // If the Magikcraft.io plugin is not present
// if (environment.SINGLE_ENGINE_MODE) {
// 	timers = {
// 		clearInterval: $.clearInterval,
// 		clearTimeout: $.clearTimeout,
// 		setInterval: $.setInterval,
// 		setTimeout: $.setTimeout,
// 	}
// } else {
// 	const map = DurableMap('__timer_map-' + environment.ENGINE_NAME);
// 	const setInterval = (task, delay) => {
// 		const handle = $.setInterval(task, delay);
// 		const timerMap = map.get('INTERVALS') || [];
// 		timerMap.push(handle);
// 		map.put('INTERVALS', timerMap);
// 		return handle;
// 	}
// 	const clearInterval = (handle) => {
// 		$.clearInterval(handle);
// 		const index = timers.indexOf(handle);
// 		if (index !== -1) {
// 			timers.splice(index, 1);
// 		}
// 		map.put('INTERVALS', timers)
// 	}
// 	const setTimeout = (task, delay) => {
// 		const handle = $.setTimeout(task, delay);
// 		const timerMap = map.get('TIMERS') || [];
// 		timerMap.push(handle);
// 		map.put('TIMERS', timerMap);
// 		return handle;
// 	}
// 	const clearTimeout = (handle) => {
// 		$.clearTimeout(handle);
// 		const timerMap = map.get('TIMERS') || [];
// 		const index = timerMap.indexOf(handle);
// 		if (index !== -1) {
// 			timerMap.splice(index, 1);
// 		}
// 		map.put('TIMERS', timerMap)
// 	}
// 	timers = {
// 		clearInterval,
// 		clearTimeout,
// 		setInterval,
// 		setTimeout,
// 	}
// }
// export = timers;
