/**
 * Iterates over the given items in an endless loop
 */
export function* rotate<T>(items: T[]): Generator<T> {
	let i = 0
	while (true) {
		yield items[i]
		i = ++i % items.length
	}
}
