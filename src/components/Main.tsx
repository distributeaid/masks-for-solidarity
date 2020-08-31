import React from 'react'
import styled from 'styled-components'
import { mediumBreakpoint, colors, fonts } from '../settings'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${mediumBreakpoint};
	padding: 1rem;
	@media (min-width: ${mediumBreakpoint}) {
		padding: 4rem 0;
	}
`

export const Offset = styled.div`
	background-color: ${colors.offsetBackground};
`

export const MarkdownContent = styled.div`
	line-height: 1.5rem;
	h1,
	h2 {
		letter-spacing: -0.5px;
		margin-top: 1rem;
		margin-bottom: 0;
		text-transform: uppercase;
		color: ${colors.lightText};
		text-align: center;
		font-size: ${fonts.text.sizes.default};
	}
	div,
	p,
	li {
		letter-spacing: -0.25px;
		font-size: 14px;
		font-weight: ${fonts.text.weights.default};
	}
	blockquote {
		text-align: center;
		margin: 0;
		p {
			font-size: ${fonts.text.sizes.highlight};
			&:first-child {
				margin-top: 0;
			}
		}
	}
	a {
		color: ${colors.highlight};
	}
`
