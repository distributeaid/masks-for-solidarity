import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../settings'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${breakpoints.wide};
	padding: 1rem;
	@media (min-width: ${breakpoints.medium}) {
		padding: 4rem 0;
	}
`
