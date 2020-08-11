import React from 'react'
import styled from 'styled-components'
import { colors } from '../settings'

const Button = styled.a`
	font-weight: 700;
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
	border: 1.5px solid ${colors.bossOrange}cc;
`

export const SecondaryButton = styled(Button)`
	color: ${colors.maskLightGreen} !important;
	border: 1.5px solid ${colors.maskLightGreen}cc;
	${PrimaryButton} + & {
		margin-left: 1rem;
	}
`
