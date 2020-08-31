export const mediumBreakpoint = '800px'
export const wideBreakpoint = '1200px'
export const buttonHeight = '48px'

const teal = '#008080'
const lightSeaGreen = '#20B2AA'
const terracotta = '#b84014'
const white = '#ffffff'
const lightGray = '#f2f2f2'
const offBlack = 'rgba(0,0,0,0.85)'
const dimmedBlack = 'rgba(0,0,0,0.55)'
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
		sizes: {
			default: '16px',
			highlight: '21px',
		},
	},
	headline: {
		name: 'Roboto',
		weights: {
			default: 500,
		},
		sizes: {
			h1: '36px',
		},
	},
} as const
