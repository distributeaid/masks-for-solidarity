import React from 'react'
import styled from 'styled-components'
import { colors, fonts, buttonSizes } from '../settings'

const Button = styled.a`
	font-weight: ${fonts.serif.weights.bold};
	&:hover {
		color: ${colors.text};
		border-color: ${colors.background};
	}
	background-color: transparent;
	display: inline-block;
	text-decoration: none;
	height: ${buttonSizes.regular};
	line-height: ${buttonSizes.regular};
	width: 100%;
	text-align: center;
	font-size: 90%;
	border-radius: ${buttonSizes.regular};
`

export const PrimaryButton = styled(Button)`
	color: ${colors.background};
	background-color: ${colors.primary};
`

export const SecondaryButton = styled(Button)`
	color: ${colors.primary};
	background-color: ${colors.background};
	border: 1.5px solid ${colors.primary};
	${PrimaryButton} + & {
		margin-top: 1rem;
	}
`
