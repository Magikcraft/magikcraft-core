import { potion } from './potion'

export function noxvida(duration) {
	if (duration === void 0) {
		duration = 200
	}
	echo(self, 'Noxvida!')
	potion('NIGHT_VISION', { duration: duration })
}
