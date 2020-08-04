import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

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
		allSanityGallery {
			nodes {
				title
				photo {
					hotspot {
						x
						y
					}
					asset {
						url
						metadata {
							dimensions {
								width
								height
							}
						}
					}
				}
			}
		}
	}
`

export type SiteMetaData = {
	title: string
	shortTitle: string
	description: string
	gitHubUrl: string
}

const PageTemplate = (data: {
	data: {
		site: {
			siteMetadata: SiteMetaData
		}
		allSanityGallery: {
			nodes: Record<string, any>[]
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
}) => (
	<Wrapper>
		<Head siteMetaData={data.data.site.siteMetadata} />
		<Header gallery={data.data.allSanityGallery.nodes} />
		<Main>
			{data.pageContext.page.remark?.htmlAst !== undefined &&
				renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
		</Main>
		<Footer siteMetaData={data.data.site.siteMetadata} />
	</Wrapper>
)

export default PageTemplate
