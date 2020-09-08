import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors, fonts, fontSizes } from '../settings'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${breakpoints.medium};
	padding: 1rem;
	@media (min-width: ${breakpoints.medium}) {
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
		text-align: center;
	}
	h1 {
		font-size: ${fontSizes.h1};
	}
	h2 {
		font-size: ${fontSizes.h2};
	}
	div,
	p,
	li {
		letter-spacing: -0.25px;
		font-size: 14px;
		font-weight: ${fonts.serif.weights.regular};
	}
	blockquote {
		margin: 0;
		p {
			font-size: ${fontSizes.hero.text};
			&:first-child {
				margin-top: 0;
			}
		}
	}
`
