import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from './page'

const GlobalStyle = createGlobalStyle`
      html,
      body {
		font-family: 'Catamaran', sans-serif;
		height: 100%;
		background-color: #2d2d2d;
		color: #c7c7c7;
      }
	  #___gatsby, #gatsby-focus-wrapper {
		height: 100%;
	  }
	  h1, h2, h3, h4, h5, h6 {
		font-family: 'Bitter', serif;
	  }
`

export const Head = ({
	siteMetaData: { title, description },
}: {
	siteMetaData: SiteMetaData
}) => (
	<>
		<Helmet>
			<link
				href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Bitter&family=Catamaran:wght@300&amp;display=swap"
				rel="stylesheet"
			></link>
			<title>{title}</title>
			<meta name="description" content={description} />
			<html lang="en" />
			<link rel="icon" type="image/svg+xml" href={withPrefix('/favicon.svg')} />
		</Helmet>
		<GlobalStyle />
	</>
)
