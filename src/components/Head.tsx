import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/page'

export const Head = ({
	siteMetaData: { title, description },
}: {
	siteMetaData: SiteMetaData
}) => (
	<>
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<html lang="en" />
			<link rel="icon" type="image/svg+xml" href={withPrefix('/favicon.svg')} />
			<link rel="apple-touch-icon" href={withPrefix('/favicon-ios.png')}></link>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Bitter&family=Catamaran:wght@300&amp;display=swap"
				rel="stylesheet"
			></link>
		</Helmet>
	</>
)
