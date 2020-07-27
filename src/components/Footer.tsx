import React from 'react'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import GitHubIcon from 'feather-icons/dist/icons/github.svg'
import { SiteMetaData } from '../templates/page'

import './Footer.scss'

export const Footer = ({
	siteMetaData: { gitHubUrl },
}: {
	siteMetaData: SiteMetaData
}) => (
	<footer id="footer">
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
	</footer>
)
