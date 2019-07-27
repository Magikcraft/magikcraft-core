import * as environment from '../environment'
import { IBossBar, BossBarColor, BossBarStyle } from './bossbar'

let BossBarImpl: new (player: Player) => IBossBar

if (environment.HAS_BOSSBAR_BUKKIT) {
	BossBarImpl = require('./bossbar-bukkit') // tslint:disable-line
}

if (environment.HAS_BOSSBAR_NUKKIT) {
	BossBarImpl = require('./bossbar-nukkit') // tslint:disable-line
}

// export let BossBar = {
// 	bar,
// 	color: BossBarColor,
// 	style: BossBarStyle,
// }

export class BossBar implements IBossBar {
	static Color: { [index: string]: BossBarColor } = {
		BLUE: 'BLUE',
		GREEN: 'GREEN',
		PINK: 'PINK',
		PURPLE: 'PURPLE',
		RED: 'RED',
		WHITE: 'WHITE',
	}
	static Style = {
		NOTCHED_10: 'NOTCHED_10',
		NOTCHED_12: 'NOTCHED_12',
		NOTCHED_20: 'NOTCHED_20',
	}
	private BossBarImpl: IBossBar
	constructor(player: Player) {
		this.BossBarImpl = new BossBarImpl(player)
	}
	render() {
		this.BossBarImpl.render()
	}
	color(color: BossBarColor) {
		this.BossBarImpl.color(color)
	}
	style(style: BossBarStyle) {
		this.BossBarImpl.style(style)
	}
	text(msg: string) {
		this.BossBarImpl.text(msg)
	}
	progress(progress: number) {
		this.BossBarImpl.progress(progress)
	}
	removeAllBars() {
		this.BossBarImpl.removeAllBars()
	}
	remove() {
		this.BossBarImpl.remove()
	}
}
