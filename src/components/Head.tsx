import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/types'
import { colors, fonts } from '../settings'

const GlobalStyle = createGlobalStyle`
      html,
      body {
		font-family: ${fonts.serif.name}, sans-serif;
		font-weight: ${fonts.serif.weights.regular};
		height: 100%;
		background-color: ${colors.background};
		color: ${colors.text};
		line-height: 1.5rem;
      }
	  #___gatsby, #gatsby-focus-wrapper {
		height: 100%;
	  }
	  a {
		  color: ${colors.text};
		  text-decoration: underline;
		  text-decoration-color: ${colors.secondary};
	  }
`

const loadAsync = (src: string): string => `(function(d){
	var x = d.createElement("link");
	var y = d.getElementsByTagName("script")[0];
	x.rel = "stylesheet";
	x.href = "${src}";
	y.parentNode.insertBefore(x, y);
})(document);`

const googleFontsArgs = Object.values(fonts)
	.map(
		({ name, weights }) =>
			`family=${encodeURIComponent(name)}:wght@${Object.values(weights).join(
				';',
			)}`,
	)
	.join('&')

export const Head = ({
	siteMetaData: { title: siteTitle, description },
	pageTitle,
}: {
	siteMetaData: Pick<SiteMetaData, 'title' | 'description'>
	pageTitle?: string
}) => (
	<>
		<Helmet>
			<title>
				{siteTitle}
				{pageTitle !== undefined ? ` · ${pageTitle}` : ''}
			</title>
			<meta name="description" content={description} />
			<html lang="en" />
			<link rel="icon" type="image/svg+xml" href={withPrefix('/favicon.svg')} />
			<link rel="apple-touch-icon" href={withPrefix('/favicon-ios.png')}></link>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<script type="text/javascript">
				{loadAsync(
					`https://fonts.googleapis.com/css2?${googleFontsArgs}&display=swap`,
				)}
			</script>
			<script type="text/javascript">
				{loadAsync(
					'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
				)}
			</script>
			<script
				async
				src="https://afarkas.github.io/lazysizes/lazysizes.min.js"
				crossOrigin="anonymous"
			></script>
			<script
				async
				src={withPrefix('outline.js')}
				crossOrigin="anonymous"
			></script>
		</Helmet>
		<GlobalStyle />
	</>
)
