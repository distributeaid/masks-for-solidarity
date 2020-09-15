import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SiteMetaData, Page } from './types'
import { Section } from '../components/Section'
import { Content } from '../components/Content'
import { Navigation } from './navigation'

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
			<Navigation siteMetaData={data.data.site.siteMetadata} />
			<main>
				<Section>
					<Content>
						{data.pageContext.page.remark?.htmlAst !== undefined &&
							renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
					</Content>
				</Section>
			</main>
			<Footer siteMetaData={data.data.site.siteMetadata} />
		</Wrapper>
	</>
)

export default PageTemplate
