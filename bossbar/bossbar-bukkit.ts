const BarColor = Java.type('org.bukkit.boss.BarColor')
const BarStyle = Java.type('org.bukkit.boss.BarStyle')

const NamespacedKey = Java.type('org.bukkit.NamespacedKey')

import { logger } from '../log'
import { IBossBar, BossBarStyleIndex, BossBarColorIndex } from './bossbar'
const log = logger(__filename)

export class BukkitBossBar implements IBossBar {
	private bar: KeyedBossBar
	player: Player
	constructor(player = global.self, namespace: string, key: string) {
		const nsKey = new NamespacedKey(namespace, key)
		const existingBar = __plugin.server.getBossBar(nsKey)
		this.bar = existingBar
			? existingBar
			: __plugin.server.createBossBar(
					nsKey,
					'',
					BarColor.RED,
					BarStyle.SEGMENTED_20
			  )
		this.player = player
		this.bar.addPlayer(player)
	}

	public color(color: BossBarColorIndex) {
		this.bar.setColor(BarColor[color])
		return this
	}

	public style(style: BossBarStyleIndex) {
		this.bar.setStyle(BarStyle[style])
		return this
	}

	public text(msg: string) {
		this.bar.setTitle(msg)
		return this
	}

	public progress(progress: number = 50) {
		const _progress = Math.min(progress / 100, 0.99)
		const progressRounded = Math.round(_progress * 100) / 100
		this.bar.setProgress(progressRounded)
		return this
	}

	public show() {
		this.bar.setVisible(true)
	}

	public hide() {
		this.bar.setVisible(false)
	}

	public remove() {
		this.bar.removePlayer(this.player)
		return undefined
	}
}
