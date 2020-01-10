'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var events = require('events')
var core = require('./lib')
global.holograms = require('@magikcraft/core/holograms').default
function init() {
	require('@magikcraft/op-all/autoload')
	console.log('Registering Creative mode handler')
	events.playerJoin(function(_a) {
		var player = _a.player
		setTimeout(function() {
			var GameMode = Java.type('org.bukkit.GameMode')
			// Initial join is a bit chaotic
			player.setGameMode(GameMode.CREATIVE)
			echo(player, 'Creative Mode set.')
			console.log('Set creative mode for ' + player.name)
		}, 1000)
	})
}
exports.init = init
function create() {
	var core = require('@magikcraft/core')
	var hologram = core.holograms
	var utils = require('utils')
	var p = utils.player('sitapati')
	var h = hologram.createHologram({
		lines: ['Yolo'],
		location: p.getLocation(),
	})
	return h
}
exports.create = create
function get() {
	var hologram = core.holograms
	var hs = hologram.getHolograms()
	return hs
}
exports.get = get
