export interface IBossBar {
	// render()
	color(color: BossBarColor): IBossBar
	style(style: BossBarStyle)
	text(msg: string)
	progress(progress: number)
	removeAllBars()
	remove()
}

export type BossBarColor =
	| 'BLUE'
	| 'GREEN'
	| 'PINK'
	| 'PURPLE'
	| 'RED'
	| 'WHITE'
export type BossBarStyle = 'NOTCHED_10' | 'NOTCHED_12' | 'NOTCHED_20'
