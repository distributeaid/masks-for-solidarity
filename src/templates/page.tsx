import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from './head'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

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
			}
		}
	}
`

const PageTemplate = (data: {
	data: {
		site: {
			siteMetadata: { title: string; shortTitle: string; description: string }
		}
	}
	pageContext: {
		page: {
			remark: {
				htmlAst: any
				headings: {
					id: string
					depth: number
					value: string
				}[]
			}
		}
	}
}) => {
	return (
		<Wrapper>
			<Head
				title={data.data.site.siteMetadata.title}
				description={data.data.site.siteMetadata.description}
			/>
			<Header />
			<Main>
				{data.pageContext.page.remark?.htmlAst !== undefined &&
					renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
			</Main>
			<Footer />
		</Wrapper>
	)
}

export default PageTemplate
