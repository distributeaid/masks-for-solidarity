import React from 'react'
import styled from 'styled-components'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'

const StyledFooter = styled.footer`
	padding: 4rem;
	svg {
		color: #f11748;
		padding: 0 0.25rem;
	}
	p {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const Footer = () => (
	<StyledFooter>
		<p>
			Made with <HeartIcon /> by Refugees in Moria.
		</p>
	</StyledFooter>
)
