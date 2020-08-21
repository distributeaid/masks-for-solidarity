import { darken, lighten } from 'polished'
export const mediumBreakpoint = '800px'
export const wideBreakpoint = '1200px'

const gunpowder = '#2d2d2d'
const maskDarkGreen = '#003333'
const maskLightGreen = '#669999'
export const colors = {
	maskDarkGreen,
	maskLightGreen,
	maskLighterGreen: lighten(0.1, maskLightGreen),
	bossOrange: '#ff6600',
	recycledToiletPaper: '#c7c7c7',
	gunpowder,
	gunpowderDark: darken(0.1, gunpowder),
} as const

export const fonts = {
	text: {
		name: 'Work Sans',
		weights: {
			light: 300,
			default: 450,
			bold: 550,
			headline: 650,
		},
	},
} as const
