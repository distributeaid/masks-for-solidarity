import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/types'
import { colors, fonts } from '../settings'

const GlobalStyle = createGlobalStyle`
      html,
      body {
		font-family: ${fonts.text.name}, sans-serif;
		font-weight: ${fonts.text.weights.default};
		height: 100%;
		background-color: ${colors.background};
		color: ${colors.text};
      }
	  #___gatsby, #gatsby-focus-wrapper {
		height: 100%;
	  }
	  h1, h2, h3, h4, h5, h6 {
		font-family: ${fonts.headline.name}, sans-serif;
		font-weight: ${fonts.headline.weights.default};
		text-transform: uppercase;
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
	siteMetaData: SiteMetaData
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
		</Helmet>
		<GlobalStyle />
	</>
)
