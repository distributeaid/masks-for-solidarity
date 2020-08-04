import React from 'react'
import styled from 'styled-components'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import GitHubIcon from 'feather-icons/dist/icons/github.svg'
import { SiteMetaData } from '../templates/page'

const StyledFooter = styled.footer`
	padding: 4rem;
	svg {
		&.heart {
			color: #f11748;
		}
		display: inline-block;
		margin-bottom: -8px;
		padding: 0 0.25rem;
	}
	p {
		text-align: center;
		margin-bottom: 2rem;
		&.dim {
			margin-bottom: 0;
			opacity: 0.5;
		}
	}
	a {
		color: inherit;
	}
`

export const Footer = ({
	siteMetaData: { gitHubUrl },
}: {
	siteMetaData: SiteMetaData
}) => (
	<StyledFooter>
		<p>
			Made with <HeartIcon className="heart" /> by Refugees in Moria.
		</p>
		<p className="dim">
			&copy;2020{' '}
			<a
				href="https://distributeaid.org/"
				target="_blank"
				rel="nofollow noreferrer"
			>
				Distribute Aid
			</a>
			. All rights reserved.
		</p>
		<p className="dim">
			<a
				href={gitHubUrl}
				target="_blank"
				rel="nofollow noreferrer"
				title="GitHub project for this site"
			>
				<GitHubIcon />
			</a>
		</p>
	</StyledFooter>
)
