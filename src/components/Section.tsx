import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../settings'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${breakpoints.widePx};
	padding: 1rem;
	@media (min-width: ${breakpoints.mediumPx}) {
		padding: 4rem 1rem;
	}
`
