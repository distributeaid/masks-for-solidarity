import React from 'react'
import { graphql } from 'gatsby'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import './page.scss'
import { GalleryImage } from '../sanity'

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
	<>
		<Head siteMetaData={data.data.site.siteMetadata} />
		<Header gallery={data.data.allSanityGallery.nodes as GalleryImage[]} />
		<main>
			{data.pageContext.page.remark?.htmlAst !== undefined &&
				renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
		</main>
		<Footer siteMetaData={data.data.site.siteMetadata} />
	</>
)

export default PageTemplate
