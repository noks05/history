export const addZeroToStart = (text: string, countZero = 2) => {
	return text.padStart(countZero, '0')
}
