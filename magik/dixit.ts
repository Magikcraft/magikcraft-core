import * as utils from 'utils'

export function dixit(msg: string | any, playerName = self.getName()) {
	const recipient = utils.player(playerName)
	if (typeof msg === 'string') {
		echo(recipient, msg)
	} else {
		echo(recipient, msg.toString())
	}
}
