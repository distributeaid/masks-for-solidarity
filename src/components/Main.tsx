import React from 'react'
import styled from 'styled-components'
import { mediumBreakpoint, colors } from '../settings'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${mediumBreakpoint};
	line-height: 1.5rem;
	padding: 1rem;
	@media (min-width: ${mediumBreakpoint}) {
		padding: 4rem 0;
	}
`

export const Offset = styled.div`
	background-color: ${colors.gunpowderDark};
`

export const Markdown = styled.div`
	h1,
	h2 {
		font-size: 14px;
		margin-bottom: 1rem;
	}
	div,
	p,
	li {
		font-size: 14px;
	}
	blockquote {
		margin: 0;
		p {
			font-size: 16px;
			font-weight: 500;
		}
	}
	a {
		color: ${colors.bossOrange};
	}
`
