import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../settings'
import { Content } from './Content'

export const Section = styled.section`
	margin: 0 auto;
	max-width: ${breakpoints.widePx};
	${Content} {
		padding: 1rem;
	}
`
