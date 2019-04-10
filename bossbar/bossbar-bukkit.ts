import { color, IBossBar, style } from './bossbar';
import * as environment from '../environment';

const hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT

const BossBarAPI = hasBukkitBossBar
	? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
	: {Color: {}, Style: {}}

// Requires the Spigot server or a plugin that provides this
export const TextComponent = hasBukkitBossBar
	? Java.type('net.md_5.bungee.api.chat.TextComponent')
	: undefined
export type TextComponent = any

import { logger } from '../log'
const log = logger(__filename)

/**
 *
 * new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true )
 * .append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create();
 */
const ComponentBuilderClass = hasBukkitBossBar
	? Java.type('net.md_5.bungee.api.chat.ComponentBuilder')
	: undefined
export const ComponentBuilder = (msg: string): IComponentBuilder =>
	new ComponentBuilderClass(msg)

export const bar = (msg?: string, player?: BukkitPlayer) => new Bar(msg, player)

export class Bar implements IBossBar {
	private bar
	private barColor = color.RED
	private barStyle = style.NOTCHED_20
	private init = false
	private msg
	private barProgress = 0.5
	private barTextComponent
	private hasTextComponent = false
	private player

	constructor(msg = '', player = global.self) {
		this.msg = msg
		this.player = player
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
	public color(theColor: color) {
		this.barColor = BossBarAPI.Color[theColor]
		if (this.init) {
			this.bar.setColor(this.barColor)
		}
		return this
	}
	public style(theStyle: style) {
		this.barStyle = theStyle
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