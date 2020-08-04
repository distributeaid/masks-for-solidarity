import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/page'

const GlobalStyle = createGlobalStyle`
      html,
      body {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		height: 100%;
		background-color: #2d2d2d;
		color: #c7c7c7;
      }
	  #___gatsby, #gatsby-focus-wrapper {
		height: 100%;
	  }
	  h1, h2, h3, h4, h5, h6 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
	  }
`

const loadAsync = (src: string): string => `(function(d){
	var x = d.createElement("link");
	var y = d.getElementsByTagName("script")[0];
	x.rel = "stylesheet";
	x.href = "${src}";
	y.parentNode.insertBefore(x, y);
})(document);`

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
			<script type="text/javascript">
				{loadAsync(
					'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins&display=swap',
				)}
			</script>
			<script type="text/javascript">
				{loadAsync(
					'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
				)}
			</script>
		</Helmet>
		<GlobalStyle />
	</>
)
