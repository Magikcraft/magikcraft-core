import * as environment from '../environment'
import { IBossBar, BossBarColor, BossBarStyle } from './bossbar'

let BossBarImpl: new (player: Player) => IBossBar

if (environment.HAS_BOSSBAR_BUKKIT) {
	BossBarImpl = require('./bossbar-bukkit').BukkitBossBar // tslint:disable-line
}

if (environment.HAS_BOSSBAR_NUKKIT) {
	BossBarImpl = require('./bossbar-nukkit').NukkitBossBar // tslint:disable-line
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
	static Style: { [index: string]: BossBarStyle } = {
		NOTCHED_10: 'NOTCHED_10',
		NOTCHED_12: 'NOTCHED_12',
		NOTCHED_20: 'NOTCHED_20',
	}
	private BossBarImpl: IBossBar
	constructor(player: Player) {
		this.BossBarImpl = new BossBarImpl(player)
	}
	render() {
		return this.BossBarImpl.render()
	}
	color(color: BossBarColor) {
		return this.BossBarImpl.color(color)
	}
	style(style: BossBarStyle) {
		return this.BossBarImpl.style(style)
	}
	text(msg: string) {
		return this.BossBarImpl.text(msg)
	}
	progress(progress: number) {
		return this.BossBarImpl.progress(progress)
	}
	removeAllBars() {
		return this.BossBarImpl.removeAllBars()
	}
	remove() {
		return this.BossBarImpl.remove()
	}
}
