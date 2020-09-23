import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { breakpoints, buttonSizes } from '../settings'
import { Content } from '../components/Content'

// Used to display icons next to list items
export const MaskPropertyIcons = styled(Content)`
	padding: 1rem;
	@media (min-width: ${breakpoints.mediumPx}) {
		padding: 4rem 1rem;
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		margin-left: 2rem;
		@media (min-width: ${breakpoints.mediumPx}) {
			flex-direction: row;
			margin-left: 0;
		}
		li {
			display: flex;
			align-items: center;
			& + & {
				margin-left: 2rem;
			}
			&:before {
				content: '';
				display: inline-block;
				width: ${buttonSizes.small};
				height: ${buttonSizes.small};
				@media (min-width: ${breakpoints.mediumPx}) {
					width: ${buttonSizes.large};
					height: ${buttonSizes.large};
				}
				margin-right: 0.5rem;
			}
			&:first-child {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F4AA-1F3FD.svg',
					)}');
				}
			}
			&:nth-child(2) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F9FD.svg',
					)}');
				}
			}
			&:last-child {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/267B.svg',
					)}');
				}
			}
		}
	}
`
