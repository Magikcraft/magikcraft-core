const JavaChatColor = Java.type('net.md_5.bungee.api.ChatColor')

export enum TextColor {
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
	'YELLOW' = JavaChatColor.YELLOW,
}

// Requires the Spigot server or a plugin that provides this
export const TextComponent = Java.type('net.md_5.bungee.api.chat.TextComponent')

export const ComponentBuilderClass = Java.type(
	'net.md_5.bungee.api.chat.ComponentBuilder'
)
export const ComponentBuilder = (msg: string): IComponentBuilder =>
	new ComponentBuilderClass(msg)

interface IComponentBuilder {
	(text: string): IComponentBuilder
	append(msg: string): IComponentBuilder
	bold(bold: boolean): IComponentBuilder
	color(color: TextColor): IComponentBuilder
	create(): any
	italic(italic: boolean): IComponentBuilder
	strikethrough(strikethrough: boolean): IComponentBuilder
	underlined(underlined: boolean): IComponentBuilder
}
