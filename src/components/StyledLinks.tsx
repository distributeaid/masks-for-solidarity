import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from '../settings'
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

		&:hover,
		&.hover {
			color: ${mix(0.15, '#000', colors.primary)};
			text-decoration-color: ${mix(0.25, '#fff', colors.secondary)};
			&.secondary {
				color: ${mix(0.25, '#fff', colors.text)};
				
			}
		}

		&:active,
		&.active {
			color: ${mix(0.25, '#000', colors.primary)};
			text-decoration-color: ${mix(0.25, '#000', colors.secondary)};
			&.secondary {
				color: ${colors.text};

			}
		}

		&:focus,
		&.focus {
			outline: 2px solid ${colors.text};
		}
	}
`

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	hover?: boolean
	active?: boolean
	focus?: boolean
	secondary?: boolean
}

export const Link = ({
	children,
	secondary,
	hover,
	active,
	focus,
	...rest
}: LinkProps) => (
	<a className={classNames({ secondary, hover, active, focus })} {...rest}>
		{children}
	</a>
)
