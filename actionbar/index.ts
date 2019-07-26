import server from '../server'
import * as utils from 'utils'
import { ComponentBuilder, TextColor } from '../text'
const ChatMessageType = Java.type('net.md_5.bungee.api.ChatMessageType')
export function actionbar(playername: string, text: string, color: TextColor) {
	utils
		.player(playername)
		.spigot()
		.sendMessage(
			ChatMessageType.ACTION_BAR,
			ComponentBuilder(text)
				.color(color)
				.create()
		)
}
