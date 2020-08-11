import React from 'react'
import styled from 'styled-components'
import { mediumBreakpoint, colors } from '../settings'

export const Main = styled.main`
	h1 {
		font-size: 250%;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 200%;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 175%;
		margin-bottom: 0.75rem;
	}

	h4 {
		font-size: 150%;
		margin-bottom: 0.5rem;
	}

	h5 {
		font-size: 125%;
		margin-bottom: 0.25rem;
	}

	h6 {
		font-size: 100%;
		margin-bottom: 0;
	}

	a {
		color: ${colors.bossOrange};
	}
`

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${mediumBreakpoint};
	line-height: 1.5rem;
	@media (min-width: ${mediumBreakpoint}) {
		padding: 4rem 0;
	}
`

export const Offset = styled.div`
	background-color: ${colors.wetGunpowder};
`
