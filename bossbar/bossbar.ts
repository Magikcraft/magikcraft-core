export interface IBossBar {
	color(color: BossBarColorIndex): IBossBar
	style(style: BossBarStyleIndex)
	text(msg: string)
	progress(progress: number)
	remove()
}

/* class decorator */
export function staticImplements<T>() {
	return <U extends T>(constructor: U) => {
		constructor
	}
}

export enum BossBarColorIndex {
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	PINK = 'PINK',
	PURPLE = 'PURPLE',
	RED = 'RED',
	WHITE = 'WHITE',
}

export enum BossBarStyleIndex {
	NOTCHED_10 = 'SEGMENTED_10',
	NOTCHED_12 = 'SEGMENTED_12',
	NOTCHED_20 = 'SEGMENTED_20',
	NOTCHED_6 = 'SEGMENTED_6',
}
