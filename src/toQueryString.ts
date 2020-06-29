/**
 * Convert an object to a query string
 */
export const toQueryString = (params: Record<string, any>): string =>
	Object.entries(params)
		.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
		.join('&')
