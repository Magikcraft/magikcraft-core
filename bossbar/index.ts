import * as environment from '../environment'
import { IBossBar, BossBarColorIndex, BossBarStyleIndex } from './bossbar'

let BossBarImpl: new (
	player: Player,
	namespace: string,
	key: string
) => IBossBar

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
	static Color = BossBarColorIndex
	static Style = BossBarStyleIndex
	private BossBarImpl: IBossBar
	constructor(player: Player, namespace: string, key: string) {
		this.BossBarImpl = new BossBarImpl(player, namespace, key)
	}
	// render() {
	// 	return this.BossBarImpl.render()
	// }
	color(color: BossBarColorIndex) {
		return this.BossBarImpl.color(color)
	}
	style(style: BossBarStyleIndex) {
		return this.BossBarImpl.style(style)
	}
	text(msg: string) {
		return this.BossBarImpl.text(msg)
	}
	progress(progress: number) {
		return this.BossBarImpl.progress(progress)
	}
	remove() {
		return this.BossBarImpl.remove()
	}
}
