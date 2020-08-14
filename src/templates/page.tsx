import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SiteMetaData, Page } from './types'
import { Section, Markdown } from '../components/Main'

const Wrapper = styled.div`
	height: 100%;
`
export const query = graphql`
	query PageTemplateQuery {
		site {
			siteMetadata {
				title
				shortTitle
				description
				gitHubUrl
			}
		}
	}
`

const PageTemplate = (data: {
	data: {
		site: {
			siteMetadata: SiteMetaData
		}
	}
	pageContext: {
		page: Page
		pages: Page[]
	}
}) => (
	<>
		<Head
			siteMetaData={data.data.site.siteMetadata}
			pageTitle={data.pageContext.page.remark.frontmatter?.title}
		/>
		<Wrapper>
			<Navbar />
			<main>
				<Section>
					<Markdown>
						{data.pageContext.page.remark?.htmlAst !== undefined &&
							renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
					</Markdown>
				</Section>
			</main>
			<Footer siteMetaData={data.data.site.siteMetadata} />
		</Wrapper>
	</>
)

export default PageTemplate
