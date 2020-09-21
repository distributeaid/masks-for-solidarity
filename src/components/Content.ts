import styled from 'styled-components'
import { fonts, colors, fontSizes } from '../settings'

export const Small = styled.p``
export const Micro = styled.p``

export const H1Tiny = styled.h1`
	font-family: ${fonts.sans.name};
	font-weight: ${fonts.sans.weights.medium};
	font-size: ${fontSizes.h3};
	text-transform: uppercase;
`

export const Content = styled.div`
	color: ${colors.text};
	h1 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.h1};
		small {
			font-family: ${fonts.sans.name};
			font-weight: ${fonts.sans.weights.medium};
			font-size: ${fontSizes.h3};
			text-transform: uppercase;
			color: ${colors.lightText};
		}
	}
	h2 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.h2};
		small {
			font-family: ${fonts.sans.name};
			font-weight: ${fonts.sans.weights.medium};
			font-size: ${fontSizes.h3};
			text-transform: uppercase;
			color: ${colors.lightText};
		}
	}
	h3 {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
		font-size: ${fontSizes.h3};
		text-transform: uppercase;
		color: ${colors.lightText};
	}
	p {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.text};
		line-height: 150%;
		margin-bottom: 1rem;
		margin-top: 0;
	}
	small,
	${Small} {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.light};
		font-size: ${fontSizes.small};
	}
	${Micro} {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.regular};
		font-size: ${fontSizes.micro};
	}
	blockquote {
		margin: 0;
		padding: 0;
		p {
			font-size: ${fontSizes.hero.text};
		}
	}
`

export const CenteredContent = styled(Content)`
	text-align: center;
`
