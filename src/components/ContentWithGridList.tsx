import styled from 'styled-components'
import { Content } from './Content'
import { breakpoints, colors } from '../settings'

export const ContentWithGridList = styled(Content)`
	ul {
		list-style: none;
		padding: 0;
		margin: 2rem 0;
		@media (min-width: ${breakpoints.mediumPx}) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 1.5rem;
		}
		li {
			background-color: ${colors.offsetBackground};
			border-radius: 0.75rem;
			padding: 2rem;
			margin-bottom: 1rem;
			@media (min-width: ${breakpoints.mediumPx}) {
				margin-bottom: 0;
			}
		}
	}
`
