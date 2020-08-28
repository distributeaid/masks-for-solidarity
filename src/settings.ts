export const mediumBreakpoint = '800px'
export const wideBreakpoint = '1200px'

const teal = '#008080'
const lightSeaGreen = '#20B2AA'
const terracotta = '#e65722'
const white = '#ffffff'
const lightGray = '#f2f2f2'
const offBlack = 'rgba(0,0,0,0.85)'
const dimmedBlack = 'rgba(0,0,0,0.45)'
export const colors = {
	primary: teal,
	secondary: lightSeaGreen,
	highlight: terracotta,
	text: offBlack,
	lightText: dimmedBlack,
	offsetBackground: lightGray,
	background: white,
} as const

export const fonts = {
	text: {
		name: 'Roboto Slab',
		weights: {
			light: 300,
			default: 400,
			bold: 700,
		},
	},
	headline: {
		name: 'Roboto',
		weights: {
			default: 500,
		},
	},
} as const
