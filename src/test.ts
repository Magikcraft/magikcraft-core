import * as events from 'events'
import * as core from '.'
import reflection = require('./utils/reflection')
;(global as any).holograms = require('@magikcraft/core/holograms').default
export function init() {
	require('@magikcraft/op-all/autoload')

	console.log('Registering Creative mode handler')
	events.playerJoin(({ player }) => {
		setTimeout(() => {
			const GameMode = Java.type('org.bukkit.GameMode')

			// Initial join is a bit chaotic
			player.setGameMode(GameMode.CREATIVE)
			echo(player, `Creative Mode set.`)
			console.log(`Set creative mode for ${player.name}`)
		}, 1000)
	})
}

export function create() {
	const core = require('@magikcraft/core')
	const hologram = core.holograms
	const utils = require('utils')
	const p = utils.player('sitapati')
	const h = hologram.createHologram({
		lines: ['Yolo'],
		location: p.getLocation(),
	})
	return h
}

export function get() {
	const hologram = core.holograms
	const hs = hologram.getHolograms()
	return hs
}
