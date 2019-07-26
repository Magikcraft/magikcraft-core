import * as environment from '../environment'

export interface IBossBar {
	render()
	color(color: BossBarColor)
	style(style: BossBarStyle)
	text(msg: string)
	progress(progress: number)
	removeAllBars()
	remove()
}

const hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT

const NukkitColors = {
	PINK: 0,
	BLUE: 1,
	RED: 2,
	GREEN: 3,
	YELLOW: 4,
	PURPLE: 5,
	WHITE: 6,
}

const BossBarAPI = hasBukkitBossBar
	? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
	: { Color: NukkitColors, Style: {} }

export enum BossBarColor {
	'BLUE' = BossBarAPI.Color.BLUE,
	'GREEN' = BossBarAPI.Color.GREEN,
	'PINK' = BossBarAPI.Color.PINK,
	'PURPLE' = BossBarAPI.Color.PURPLE,
	'RED' = BossBarAPI.Color.RED,
	'WHITE' = BossBarAPI.Color.WHITE,
	'YELLOW' = BossBarAPI.Color.YELLOW,
}

export enum BossBarStyle {
	'NOTCHED_10' = BossBarAPI.Style.NOTCHED_10,
	'NOTCHED_12' = BossBarAPI.Style.NOTCHED_12,
	'NOTCHED_20' = BossBarAPI.Style.NOTCHED_20,
}
