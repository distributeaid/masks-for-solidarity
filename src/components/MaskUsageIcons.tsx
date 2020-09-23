import styled from 'styled-components'
import React from 'react'
import { Content } from './Content'
import { ContentWithGridList } from './ContentWithGridList'
import { breakpoints, buttonSizes } from '../settings'
import { withPrefix } from 'gatsby'

export const MaskUsageIcons = styled(ContentWithGridList)`
	ul {
		li {
			&:before {
				content: '';
				display: block;
				width: ${buttonSizes.large};
				height: ${buttonSizes.large};
				margin-bottom: 1.5rem;
			}
			line-height: 1.5rem;
		}
	}
	ul:first-of-type {
		li {
			&:first-child {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F325.svg',
					)}');
				}
			}
			&:nth-child(2) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/26D1.svg',
					)}');
				}
			}
			&:nth-child(3) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F30D.svg',
					)}');
				}
			}
			&:nth-child(4) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F637.svg',
					)}');
				}
			}
		}
	}
	ul:last-of-type {
		li {
			&:nth-child(1) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/23F1.svg',
					)}');
				}
			}
			&:nth-child(2) {
				&:before {
					background-image: url('${withPrefix(
						'/openmoji-svg-color/1F469-1F3FD-200D-2695-FE0F.svg',
					)}');
				}
			}
		}
	}
`
