import styled from 'styled-components'
import { fonts, colors, responsiveFontSize, breakpoints } from '../settings'

export const Small = styled.p``
export const Micro = styled.p``

export const H1Tiny = styled.h1`
	font-family: ${fonts.sans.name};
	font-weight: ${fonts.sans.weights.medium};
	${responsiveFontSize.h3()};
	text-transform: uppercase;
`

export const Content = styled.div`
	color: ${colors.text};
	h1 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		${responsiveFontSize.h1()};
		small {
			font-family: ${fonts.sans.name};
			font-weight: ${fonts.sans.weights.medium};
			${responsiveFontSize.h3()};
			text-transform: uppercase;
			color: ${colors.lightText};
		}
	}
	h2 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		${responsiveFontSize.h2()};
		small {
			font-family: ${fonts.sans.name};
			font-weight: ${fonts.sans.weights.medium};
			${responsiveFontSize.h3()};
			text-transform: uppercase;
			color: ${colors.lightText};
		}
	}
	h3 {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
		${responsiveFontSize.h3()};
		text-transform: uppercase;
		color: ${colors.lightText};
	}
	p {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		${responsiveFontSize.text()};
		line-height: 140%;
		margin-bottom: 1rem;
		margin-top: 0;
	}
	small,
	${Small} {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.light};
		${responsiveFontSize.small()};
	}
	${Micro} {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.regular};
		${responsiveFontSize.micro()};
	}
	blockquote {
		margin: 0;
		padding: 0;
		p {
			${responsiveFontSize.large()};
		}
	}
`

export const CenteredContent = styled(Content)`
	text-align: center;
	p {
		max-width: calc(${breakpoints.widePx} / 2);
		margin: 0 auto;
	}
`
