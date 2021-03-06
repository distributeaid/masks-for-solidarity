import React from 'react'
import styled from 'styled-components'
import { colors, fonts, buttonSizes } from '../settings'
import { mix } from 'polished'
import { classNames } from '../util/classNames'

export const ButtonBase = styled.button`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.bold};
	border: 0;

	height: ${buttonSizes.regular};
	border-radius: ${buttonSizes.regular};
	padding: 0 calc(${buttonSizes.regular} / 2);
	&.large {
		border-radius: ${buttonSizes.large};
		height: ${buttonSizes.large};
		padding: 0 calc(${buttonSizes.large} / 2);
	}
	&.small {
		height: ${buttonSizes.small};
		border-radius: ${buttonSizes.small};
		padding: 0 calc(${buttonSizes.small} / 2);
	}

	background-color: ${colors.primary};
	color: ${colors.background};
	&.secondary {
		background-color: ${colors.background};
		border: 1px solid ${colors.primary};
		color: ${colors.primary};
	}
	&.link {
		height: auto;
		border: 0;
		padding: 0;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: ${colors.text};
		font-weight: ${fonts.serif.weights.regular};
		padding: 0;
	}

	&:hover,
	&.hover {
		background-color: ${mix(0.25, '#fff', colors.primary)};
		&.secondary {
			background-color: ${colors.offsetBackground};
		}
		&.link {
			background-color: transparent;
		}
	}

	&:active,
	&.active {
		background-color: ${mix(0.25, '#000', colors.primary)};
		&.secondary {
			background-color: ${mix(0.25, '#000', colors.background)};
		}
		&.link {
			background-color: transparent;
		}
	}

	&:focus,
	&.focus {
		outline: 2px solid ${colors.text};
		-moz-outline-radius: ${buttonSizes.regular};
		&.large {
			-moz-outline-radius: ${buttonSizes.large};
		}
		&.small {
			-moz-outline-radius: ${buttonSizes.small};
		}
		&.link {
			background-color: transparent;
		}
	}

	&:disabled,
	&.disabled {
		background-color: ${colors.offsetBackground};
		border: 1px solid ${colors.border};
		color: ${colors.border};
		&.secondary {
			border-color: ${colors.border};
			background-color: ${colors.background};
			color: ${colors.border};
		}
		&.link {
			background-color: transparent;
			border: 0;
		}
	}
	& + & {
		margin-left: 1rem;
	}
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	hover?: boolean
	active?: boolean
	focus?: boolean
	large?: boolean
	small?: boolean
	secondary?: boolean
	link?: boolean
}

export const Button = ({
	children,
	secondary,
	large,
	small,
	hover,
	active,
	focus,
	link,
	className,
	...rest
}: ButtonProps) => (
	<ButtonBase
		className={`${className} ${classNames({
			secondary,
			large,
			small,
			hover,
			active,
			focus,
			link,
		})}`}
		{...rest}
	>
		{children}
	</ButtonBase>
)
