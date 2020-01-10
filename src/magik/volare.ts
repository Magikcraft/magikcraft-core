import { potion } from './potion'

export function volare(duration) {
	if (duration === void 0) {
		duration = 200
	}
	potion('LEVITATION', { duration: duration })
	echo(self, 'Volare!')
}
