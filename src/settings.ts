export const buttonHeight = '48px'

export const breakpoints = {
	medium: '800px',
	wide: '1200px',
}

const teal = '#008080'
const lightSeaGreen = '#20B2AA'
const terracotta = '#cc4c1d'
const white = '#fff'
const black = '#000'
const mediumGrey = '#939393'
const lightGray = '#f2f2f2'
const stoplight = '#fc4100'
const mountaindew = '#00c147'
export const colors = {
	primary: teal,
	secondary: lightSeaGreen,
	highlight: terracotta,
	text: black,
	lightText: mediumGrey,
	offsetBackground: lightGray,
	background: white,
	error: stoplight,
	success: mountaindew,
} as const

export const fontSizes = {
	h1: '36px',
	h2: '24px',
	h3: '16px',
	text: '18px',
	small: '16px',
	micro: '14px',
	hero: {
		h1: '46px',
		h2: '32px',
		h3: '24px',
		text: '28px',
		small: '24px',
		micro: '24px',
	},
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
