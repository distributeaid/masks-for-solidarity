import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import Header from './header'

const Main = styled.main``

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
		<>
			<Header
				title={data.data.site.siteMetadata.title}
				description={data.data.site.siteMetadata.description}
			/>
			<Main>
				{data.pageContext.page.remark?.htmlAst !== undefined &&
					renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
			</Main>
		</>
	)
}

export default PageTemplate
