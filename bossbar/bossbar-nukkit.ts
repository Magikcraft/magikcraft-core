import * as environment from '../environment'
import { logger } from '../log'

import { IBossBar } from './bossbar'

const log = logger(__filename)

type NukkitPlayer = any

let PokkitPlayer
let barID = 0

try {
	PokkitPlayer = Java.type('nl.rutgerkok.pokkit.player.PokkitPlayer')
} catch (e) {
	console.log('No Pokkit Bar') // tslint:disable-line
}

const toNukkitPlayer = player => PokkitPlayer.toNukkit(player)

const NukkitColors = {
	PINK: 0,
	BLUE: 1,
	RED: 2,
	GREEN: 3,
	YELLOW: 4,
	PURPLE: 5,
	WHITE: 6,
}

export class NukkitBossBar implements IBossBar {
	private static BossBar = Java.type(environment.NUKKIT_BOSSBAR_TYPE)
	private bar
	private id: number
	private player: NukkitPlayer

	constructor(msg: string, player: Player) {
		this.id = barID
		barID++
		this.bar = new NukkitBossBar.BossBar(
			player.getName() + this.id,
			msg,
			0,
			100
		)
		this.player = toNukkitPlayer(player)
		return this
	}
	public render() {
		// For the Nukkit bar we render on any property update
		// this.bar.sendTo(this.player)
		return this
	}
	public color(color) {
		// Nukkit has no bar color - it's always purple
		// We have a method for it, and it may work in a future update of the client
		this.bar.setColor(this.player, this.id, NukkitColors[color])
		this.bar.sendTo(this.player)
		return this
	}
	public style() {
		// Nukkit has no bar style
		this.bar.sendTo(this.player)
		return this
	}
	public text(title: string) {
		this.bar.setTitle(title)
		this.bar.sendTo(this.player)
		return this
	}
	public progress(percentage: number) {
		this.bar.setHealth(percentage)
		this.bar.sendTo(this.player)
		return this
	}
	public remove() {
		this.bar.removeFrom(this.player)
		log(`Removing bar ${this.id}`)
		return this
	}
	public removeAllBars() {
		// @TODO
	}
}
