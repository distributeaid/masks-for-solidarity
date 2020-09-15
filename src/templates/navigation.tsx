import React from 'react'
import { withPrefix } from 'gatsby'
import { Menu } from '../components/Menu'
import { SiteMetaData } from './types'

export const Navigation = ({
	siteMetaData,
}: {
	siteMetaData: SiteMetaData
}) => (
	<Menu siteMetaData={siteMetaData}>
		<a href={withPrefix('/#our-story')}>Our Story</a>
		<a href={withPrefix('/#about-the-masks')}>Masks</a>
		<a href={withPrefix('/#team')}>About</a>
		<a href={withPrefix('/#faq')}>FAQ</a>
		<a
			href="https://donorbox.org/refugees-care"
			target="_blank"
			rel="nofollow noreferrer"
			className="button"
		>
			Donate
		</a>
	</Menu>
)
