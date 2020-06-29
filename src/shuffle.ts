/**
 * Returns a shuffled copy of items
 */
export const shuffle = <T>(items: T[]): T[] => {
	const shuffled = [...items]
	let currentIndex = shuffled.length
	let temporaryValue
	let randomIndex
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		temporaryValue = shuffled[currentIndex]
		shuffled[currentIndex] = shuffled[randomIndex]
		shuffled[randomIndex] = temporaryValue
	}
	return shuffled
}
