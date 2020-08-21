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
	background-color: ${colors.gunpowderDark};
`

export const Markdown = styled.div`
	line-height: 1.5rem;
	h1,
	h2 {
		letter-spacing: -0.5px;
		margin-bottom: 1rem;
	}
	div,
	p,
	li {
		letter-spacing: -0.25px;
	}
	blockquote {
		margin: 0;
		p {
			font-size: 120%;
			font-weight: ${fonts.text.weights.light};
		}
	}
	a {
		color: ${colors.bossOrange};
	}
`
