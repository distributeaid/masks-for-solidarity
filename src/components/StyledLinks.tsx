import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, fonts, buttonSizes } from '../settings'
import { mix } from 'polished'
import { classNames } from '../util/classNames'

export const GlobalLinkStyle = createGlobalStyle`
	a {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.bold};
		color: ${colors.primary};
		text-decoration: underline;
		text-decoration-color: ${colors.secondary};
		text-decoration-thickness: 2px;

		&.secondary {
			color: ${colors.text};
			font-weight: ${fonts.serif.weights.regular};
		}

		&.button {
			display: inline-block;
			background-color: ${colors.primary};
			height: ${buttonSizes.regular};
			line-height: ${buttonSizes.regular};
			border-radius: ${buttonSizes.regular};
			padding: 0 calc(${buttonSizes.regular} / 2);
			text-decoration: none;
			color: ${colors.background};
		}

		&:hover,
		&.hover {
			color: ${mix(0.15, '#000', colors.primary)};
			text-decoration-color: ${mix(0.25, '#fff', colors.secondary)};
			&.secondary {
				color: ${mix(0.25, '#fff', colors.text)};
			}
			&.button {
				color: ${colors.background};
				background-color: ${mix(0.25, '#fff', colors.primary)};
			}
		}

		&:active,
		&.active {
			color: ${mix(0.25, '#000', colors.primary)};
			text-decoration-color: ${mix(0.25, '#000', colors.secondary)};
			&.secondary {
				color: ${colors.text};
			}
			&.button {
				color: ${colors.background};
				background-color: ${mix(0.25, '#000', colors.primary)};
			}
		}

		&:focus,
		&.focus {
			outline: 2px solid ${colors.text};
		}

		&:visited, &.visited {
			color: ${colors.primary};
			&.secondary {
				color: ${colors.text};
			}
			&.button {
				color: ${colors.background};
			}
		}
	}
`

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	hover?: boolean
	active?: boolean
	focus?: boolean
	secondary?: boolean
	visited?: boolean
	button?: boolean
}

export const Link = ({
	children,
	secondary,
	hover,
	active,
	focus,
	visited,
	button,
	...rest
}: LinkProps) => (
	<a
		className={classNames({ secondary, hover, active, focus, visited, button })}
		{...rest}
	>
		{children}
	</a>
)
