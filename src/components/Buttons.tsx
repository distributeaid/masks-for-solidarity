import React from 'react'
import styled from 'styled-components'
import { colors, fonts, buttonSizes } from '../settings'
import { mix } from 'polished'
import { classNames } from '../util/classNames'

const ButtonBase = styled.button`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.bold};
	border: 0;

	height: ${buttonSizes.regular};
	border-radius: ${buttonSizes.regular};
	padding: 0 ${buttonSizes.regular};
	&.large {
		border-radius: ${buttonSizes.large};
		height: ${buttonSizes.large};
		padding: 0 ${buttonSizes.large};
	}
	&.small {
		height: ${buttonSizes.small};
		border-radius: ${buttonSizes.small};
		padding: 0 ${buttonSizes.small};
	}

	background-color: ${colors.primary};
	color: ${colors.background};
	&.secondary {
		background-color: ${colors.background};
		border: 1px solid ${colors.primary};
		color: ${colors.primary};
	}

	&:hover,
	&.hover {
		background-color: ${mix(0.25, '#fff', colors.primary)};
		&.secondary {
			background-color: ${colors.offsetBackground};
		}
	}

	&:active,
	&.active {
		background-color: ${mix(0.25, '#000', colors.primary)};
		&.secondary {
			background-color: ${mix(0.25, '#000', colors.background)};
		}
	}

	&:focus,
	&.focus {
		outline: 2px solid ${colors.text};
		-moz-outline-radius: ${buttonSizes.large};
		&.large {
			-moz-outline-radius: ${buttonSizes.regular};
		}
		&.small {
			-moz-outline-radius: ${buttonSizes.small};
		}
	}

	&:disabled,
	&.disabled {
		background-color: ${colors.offsetBackground};
		&.secondary {
			border-color: ${colors.offsetBackground};
			background-color: ${colors.background};
		}
	}
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	hover?: boolean
	active?: boolean
	focus?: boolean
	large?: boolean
	small?: boolean
	secondary?: boolean
}

export const Button = ({
	children,
	secondary,
	large,
	small,
	hover,
	active,
	focus,
	...rest
}: ButtonProps) => (
	<ButtonBase
		className={classNames({ secondary, large, small, hover, active, focus })}
		{...rest}
	>
		{children}
	</ButtonBase>
)
