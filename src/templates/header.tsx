import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const GlobalStyle = createGlobalStyle`
      html,
      body {
        font-family: "Lato", sans-serif;
      }
`

const Header = ({
	title,
	description,
}: {
	title: string
	description: string
}) => (
	<>
		<Helmet>
			<link
				href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&amp;display=swap"
				rel="stylesheet"
			/>
			<title>{title}</title>
			<meta name="description" content={description} />
			<html lang="en" />
			<link rel="icon" type="image/svg+xml" href={withPrefix('/favicon.svg')} />
		</Helmet>
		<GlobalStyle />
	</>
)

export default Header
