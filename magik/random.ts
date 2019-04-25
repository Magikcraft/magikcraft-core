export const random = (min = 1, max = 10) =>
	Math.floor(Math.random() * (max - min + 1)) + min
