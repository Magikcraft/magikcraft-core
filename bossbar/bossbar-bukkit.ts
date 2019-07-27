import * as environment from '../environment'

const hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT

const BossBarAPI = hasBukkitBossBar
	? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
	: { Color: {}, Style: {} }

export type TextComponent = any

import { logger } from '../log'
import { TextComponent } from '../text'
import { IBossBar, BossBarStyle, BossBarColor } from './bossbar'
const log = logger(__filename)

export class BukkitBossBar implements IBossBar {
	private bar
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

	constructor(player = global.self) {
		this.player = player
		this.BossBarStyle = {
			NOTCHED_10: BossBarAPI.Style.NOTCHED_10,
			NOTCHED_12: BossBarAPI.Style.NOTCHED_12,
			NOTCHED_20: BossBarAPI.Style.NOTCHED_20,
		}
		this.BossBarColor = {
			BLUE: BossBarAPI.Color.BLUE,
			GREEN: BossBarAPI.Color.GREEN,
			PINK: BossBarAPI.Color.PINK,
			PURPLE: BossBarAPI.Color.PURPLE,
			RED: BossBarAPI.Color.RED,
			WHITE: BossBarAPI.Color.WHITE,
			YELLOW: BossBarAPI.Color.YELLOW,
		}
		this.barColor = this.BossBarColor.RED
		this.barStyle = this.BossBarStyle.NOTCHED_20
	}

	public render() {
		if (this.init) {
			return this
		}
		this.barTextComponent = this.hasTextComponent
			? new TextComponent(this.barTextComponent)
			: new TextComponent(this.msg + '')
		this.bar = BossBarAPI.addBar(
			this.player,
			this.barTextComponent,
			this.barColor,
			this.barStyle,
			this.barProgress // Progress (0.0 - 1.0)
		)
		this.init = true
		return this
	}
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
	public textComponent(msg: TextComponent) {
		this.barTextComponent = msg
		this.hasTextComponent = true
		this.msg = null
		if (this.init) {
			this.remove()
			this.render()
		}
		return this
	}
	public text(msg: string) {
		this.msg = msg + ''
		this.barTextComponent = null
		this.hasTextComponent = false
		if (this.init) {
			this.remove()
			this.render()
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
