import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NewsletterSubscribeForm } from '../components/NewsletterSubscribeForm'
import { SiteMetaData, Page } from './types'
import { Team } from '../components/Team'

const Wrapper = styled.div`
	height: 100%;
`
export const query = graphql`
	query HomeTemplateQuery {
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

const HomeTemplate = (data: {
	data: {
		site: {
			siteMetadata: SiteMetaData
		}
		allSanityGallery: {
			nodes: Record<string, any>[]
		}
	}
	pageContext: {
		page: Page
		pages: Page[]
	}
}) => {
	const teamIntro = data.pageContext.pages.find(
		({ name, relativeDirectory }) =>
			`${relativeDirectory}/${name}` === 'organizations/index',
	)
	const teamPages = data.pageContext.pages.filter(
		({ id, relativeDirectory }) =>
			`${relativeDirectory}/` === 'organizations/' && id !== teamIntro?.id,
	)
	console.log(teamPages)
	return (
		<>
			<Head
				siteMetaData={data.data.site.siteMetadata}
				pageTitle={data.pageContext.page.remark.frontmatter?.title}
			/>
			<Wrapper>
				<Navbar />
				<Header gallery={data.data.allSanityGallery.nodes} />
				<Main>
					{data.pageContext.page.remark?.htmlAst !== undefined &&
						renderHtmlAstToReact(data.pageContext.page.remark.htmlAst)}
					{teamIntro !== undefined && teamPages.length > 0 && (
						<Team intro={teamIntro} entries={teamPages} />
					)}
					<NewsletterSubscribeForm />
				</Main>
				<Footer siteMetaData={data.data.site.siteMetadata} />
			</Wrapper>
		</>
	)
}

export default HomeTemplate
