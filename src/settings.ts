export const menuHeight = '64px'

export const buttonSizes = {
	regular: '48px',
	large: '56px',
	small: '40px',
} as const

const medium = 800
const wide = 1200
export const breakpoints = {
	medium,
	wide,
	mediumPx: `${medium}px`,
	widePx: `${wide}px`,
} as const

const teal = '#007777'
const lightSeaGreen = '#20B2AA'
const terracotta = '#c0471b'
const white = '#fff'
const charcoal = '#333'
const mediumGrey = '#6d6d6d'
const fog = '#e2e2e2'
const lightGray = '#f2f2f2'
const stoplight = '#fc4100'
const mountaindew = '#00c147'
export const colors = {
	primary: teal,
	secondary: lightSeaGreen,
	highlight: terracotta,
	text: charcoal,
	lightText: mediumGrey,
	border: fog,
	offsetBackground: lightGray,
	background: white,
	error: stoplight,
	success: mountaindew,
} as const

export const mobileFontSizes = {
	h1: 30,
	h2: 22,
	h3: 14,
	text: 14,
	large: 18,
	small: 14,
	micro: 12,
} as const

export const desktopFontSizes = {
	h1: 36,
	h2: 24,
	h3: 16,
	text: 18,
	large: 28,
	small: 16,
	micro: 14,
} as const

export const fontSizes = {
	h1: `${desktopFontSizes.h1}px`,
	h2: `${desktopFontSizes.h2}px`,
	h3: `${desktopFontSizes.h3}px`,
	text: `${desktopFontSizes.text}px`,
	large: `${desktopFontSizes.large}px`,
	small: `${desktopFontSizes.small}px`,
	micro: `${desktopFontSizes.micro}px`,
} as const

const r = (mobile: number, desktop: number, attribute: string): string =>
	`${attribute}: ${mobile}px; @media (min-width: ${breakpoints.mediumPx}) { ${attribute}: ${desktop}px; }`

export const responsiveFontSize = {
	h1: (attribute = 'font-size') =>
		r(mobileFontSizes.h1, desktopFontSizes.h1, attribute),
	h2: (attribute = 'font-size') =>
		r(mobileFontSizes.h2, desktopFontSizes.h2, attribute),
	h3: (attribute = 'font-size') =>
		r(mobileFontSizes.h3, desktopFontSizes.h3, attribute),
	text: (attribute = 'font-size') =>
		r(mobileFontSizes.text, desktopFontSizes.text, attribute),
	large: (attribute = 'font-size') =>
		r(mobileFontSizes.large, desktopFontSizes.large, attribute),
	small: (attribute = 'font-size') =>
		r(mobileFontSizes.small, desktopFontSizes.small, attribute),
	micro: (attribute = 'font-size') =>
		r(mobileFontSizes.micro, desktopFontSizes.micro, attribute),
} as const

export const fonts = {
	serif: {
		name: 'Roboto Slab',
		weights: {
			light: 300,
			regular: 400,
			bold: 700,
		},
	},
	sans: {
		name: 'Roboto',
		weights: {
			regular: 300,
			medium: 500,
		},
	},
} as const
