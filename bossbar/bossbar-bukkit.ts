import * as environment from '../environment'
const hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT

const BarColor = Java.type('org.bukkit.boss.BarColor')
const BarStyle = Java.type('org.bukkit.boss.BarStyle')

const BossBarAPI = hasBukkitBossBar
	? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
	: { Color: {}, Style: {} }

const NamespacedKey = Java.type('org.bukkit.NamespacedKey')
type TextComponent = any

import { logger } from '../log'
import { TextComponent } from '../text'
import { IBossBar, BossBarStyle, BossBarColor } from './bossbar'
const log = logger(__filename)

export class BukkitBossBar implements IBossBar {
	private bar: KeyedBossBar
	private barColor
	private barStyle
	private init = false
	private msg
	private barProgress = 0.5
	private barTextComponent
	private hasTextComponent = false
	private player
	BossBarStyle: { NOTCHED_10: any; NOTCHED_12: any; NOTCHED_20: any }
	BossBarColor: {
		BLUE: any
		GREEN: any
		PINK: any
		PURPLE: any
		RED: any
		WHITE: any
		YELLOW: any
	}

	constructor(player = global.self, namespace: string, key: string) {
		this.player = player
		const nsKey = new NamespacedKey(namespace, key)

		this.BossBarStyle = {
			NOTCHED_10: BarStyle.SEGMENTED_10,
			NOTCHED_12: BarStyle.SEGMENTED_12,
			NOTCHED_20: BarStyle.SEGMENTED_20,
		}
		this.BossBarColor = {
			BLUE: BarColor.BLUE,
			GREEN: BarColor.GREEN,
			PINK: BarColor.PINK,
			PURPLE: BarColor.PURPLE,
			RED: BarColor.RED,
			WHITE: BarColor.WHITE,
			YELLOW: BarColor.YELLOW,
		}
		this.barColor = this.BossBarColor.RED
		this.barStyle = this.BossBarStyle.NOTCHED_20
		const existingBar = __plugin.server.getBossBar(nsKey)
		this.bar = existingBar
			? existingBar
			: __plugin.server.createBossBar(
					nsKey,
					'',
					this.barColor,
					this.barStyle
			  )
		this.bar.addPlayer(player)
	}

	// public render() {
	// 	if (this.init) {
	// 		return this
	// 	}
	// 	this.barTextComponent = this.hasTextComponent
	// 		? new TextComponent(this.barTextComponent)
	// 		: new TextComponent(this.msg + '')
	// 	this.bar = BossBarAPI.addBar(
	// 		this.player,
	// 		this.barTextComponent,
	// 		this.barColor,
	// 		this.barStyle,
	// 		this.barProgress // Progress (0.0 - 1.0)
	// 	)
	// 	this.init = true
	// 	return this
	// }
	public color(color: BossBarColor) {
		this.barColor = this.BossBarColor[color]
		if (this.init) {
			this.bar.setColor(this.barColor)
		}
		return this
	}
	public style(style: BossBarStyle) {
		this.barStyle = BossBarAPI.Style[style]
		if (this.init) {
			this.bar.setStyle(this.barStyle)
		}
		return this
	}

	public text(msg: string) {
		this.msg = msg
		if (this.init) {
			this.bar.setTitle(msg)
		}
		return this
	}

	public progress(progress: number = 50) {
		const _progress = Math.min(progress / 100, 0.99)
		const progressRounded = Math.round(_progress * 100) / 100
		this.barProgress = progressRounded
		if (this.init) {
			this.bar.setProgress(this.barProgress)
		}
		return this
	}
	public removeAllBars = () => BossBarAPI.removeAllBars(this.player)
	public show() {
		if (this.init) {
			this.bar.setVisible(true)
		}
	}
	public hide() {
		if (this.init) {
			this.bar.setVisible(false)
		}
	}
	public remove() {
		if (this.init) {
			this.bar.removePlayer(this.player)
			this.init = false
		}
		return undefined
	}
}
