import * as environment from '../environment';

export interface IBossBar {
	render()
	color(theColor: color)
	style(theStyle: style)
	text(msg: string)
	progress(progress: number)
	removeAllBars()
	remove()
}

const hasBukkitBossBar = environment.HAS_BOSSBAR_BUKKIT

const JavaChatColor = hasBukkitBossBar
? Java.type('net.md_5.bungee.api.ChatColor')
: {}

export enum ChatColor {
	'AQUA' = JavaChatColor.AQUA,
	'BLACK' = JavaChatColor.BLACK,
	'BLUE' = JavaChatColor.BLUE,
	'BOLD' = JavaChatColor.BOLD,
	'DARK_AQUA' = JavaChatColor.DARK_AQUA,
	'DARK_BLUE' = JavaChatColor.DARK_BLUE,
	'DARK_GRAY' = JavaChatColor.DARK_GRAY,
	'DARK_GREEN' = JavaChatColor.DARK_GREEN,
	'DARK_PURPLE' = JavaChatColor.DARK_PURPLE,
	'DARK_RED' = JavaChatColor.DARK_RED,
	'GOLD' = JavaChatColor.GOLD,
	'GRAY' = JavaChatColor.GRAY,
	'GREEN' = JavaChatColor.GREEN,
	'ITALIC' = JavaChatColor.ITALIC,
	'LIGHT_PURPLE' = JavaChatColor.LIGHT_PURPLE,
	'MAGIC' = JavaChatColor.MAGIC,
	'RED' = JavaChatColor.RED,
	'RESET' = JavaChatColor.RESET,
	'STRIKETHROUGH' = JavaChatColor.STRIKETHROUGH,
	'UNDERLINE' = JavaChatColor.UNDERLINE,
	'WHITE' = JavaChatColor.WHITE,
	'YELLOW' = JavaChatColor.YELLOW
}

const NukkitColors = {
	PINK: 0,
	BLUE: 1,
	RED: 2,
	GREEN: 3,
	YELLOW: 4,
	PURPLE: 5,
	WHITE: 6
}

const BossBarAPI = hasBukkitBossBar
? Java.type(environment.BUKKIT_BOSSBAR_TYPE)
: { Color: NukkitColors, Style: {}}

const Color = BossBarAPI.Color
export const color = {
	BLUE: BossBarAPI.Color.BLUE,
	GREEN: BossBarAPI.Color.GREEN,
	PINK: BossBarAPI.Color.PINK,
	PURPLE: BossBarAPI.Color.PURPLE,
	RED: BossBarAPI.Color.RED,
	WHITE: BossBarAPI.Color.WHITE,
	YELLOW: BossBarAPI.Color.YELLOW
}

const Style = BossBarAPI.Style
export const style = {
	NOTCHED_10: BossBarAPI.Style.NOTCHED_10,
	NOTCHED_12: BossBarAPI.Style.NOTCHED_12,
	NOTCHED_20: BossBarAPI.Style.NOTCHED_20
}