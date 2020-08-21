import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../settings'
import { rgba } from 'polished'

const Button = styled.a`
	font-weight: ${fonts.text.weights.bold};
	&:hover {
		color: white;
		border-color: white;
	}
	padding: 0.75rem;
	background-color: transparent;
	display: inline-block;
	text-decoration: none;
`

export const PrimaryButton = styled(Button)`
	color: ${colors.bossOrange};
	border: 1.5px solid ${rgba(colors.bossOrange, 0.8)};
`

export const SecondaryButton = styled(Button)`
	color: ${colors.maskLighterGreen};
	border: 1.5px solid ${rgba(colors.maskLighterGreen, 0.8)};
	${PrimaryButton} + & {
		margin-left: 1rem;
	}
`
