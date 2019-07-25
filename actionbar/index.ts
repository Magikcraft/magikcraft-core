import server from '../server'

export function actionbar(
	playername: string,
	text: string,
	color: 'red' | 'yellow' | 'green' | 'blue'
) {
	server.executeCommand(`title ${playername} actionbar {"text":"${text}","color":"${color}"}
    `)
}
