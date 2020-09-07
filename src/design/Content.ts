import styled from 'styled-components'
import { fonts, colors, fontSizes } from '../settings'

export const Small = styled.p``
export const Micro = styled.p``
export const Content = styled.div`
	color: ${colors.text};
	h1 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.h1};
	}
	h2 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.h2};
	}
	h3 {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
		font-size: ${fontSizes.h3};
		text-transform: uppercase;
	}
	p {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: ${fontSizes.text};
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
`
