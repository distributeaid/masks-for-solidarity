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
			&:not(.button) {
				font-weight: ${fonts.serif.weights.regular};
			}
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
			&.large {
				height: ${buttonSizes.large};
				line-height: ${buttonSizes.large};
				border-radius: ${buttonSizes.large};
				padding: 0 calc(${buttonSizes.large} / 2);
			}
			&.secondary {
				background-color: ${colors.background};
				border: 1px solid ${colors.primary};
				color: ${colors.primary};
			}
		}

		&:hover,
		&.hover {
			color: ${mix(0.15, '#000', colors.primary)};
			text-decoration-color: ${mix(0.25, '#fff', colors.secondary)};
			&.secondary {
				color: ${mix(0.25, '#fff', colors.text)};
				&.button {
					background-color: ${colors.offsetBackground};
					color: ${colors.primary};
				}
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
				&.button {
					background-color: ${mix(0.25, '#000', colors.background)};
					color: ${colors.primary};
				}
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
			&.button {
				color: ${colors.background};
			}
			&.secondary {
				color: ${colors.text};
				&.button {
					color: ${colors.primary};
				}
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
	large?: boolean
}

export const Link = ({
	children,
	secondary,
	hover,
	active,
	focus,
	visited,
	button,
	large,
	...rest
}: LinkProps) => (
	<a
		className={classNames({
			secondary,
			hover,
			active,
			focus,
			visited,
			button,
			large,
		})}
		{...rest}
	>
		{children}
	</a>
)
