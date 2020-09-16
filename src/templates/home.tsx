import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Content, CenteredContent } from '../components/Content'
import { ContentWithImage } from '../components/ContentWithImage'
import { Offset } from '../components/Offset'
import { NewsletterSubscribeForm } from '../components/NewsletterSubscribeForm'
import { SiteMetaData, Page } from './types'
import { Team } from '../components/Team'
import { FAQ } from '../components/FAQ'
import { Link } from '../components/Links'
import { Footer } from '../components/Footer'
import {
	CampaignProgress,
	CampaignProgressPlaceholder,
} from '../components/CampaingProgress'
import { PlaceholderOffScreen } from '../components/PlaceholderOffScreen'
import { Navigation } from './navigation'

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
				_id
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
	const findPageByRelativePath = (search: string) =>
		data.pageContext.pages.find(({ relativePath }) => relativePath === search)
	const headerContent = findPageByRelativePath('home/header.md')
	const storyIntro = findPageByRelativePath('home/our-story.md')
	const storyHistory = findPageByRelativePath('home/our-story-history.md')
	const donate = findPageByRelativePath('home/donate.md')
	const aboutTheMasks = findPageByRelativePath('home/about-the-masks.md')
	const supportUs = findPageByRelativePath('home/support-us.md')
	const share = findPageByRelativePath('home/share.md')
	const getMasks = findPageByRelativePath('home/get-masks.md')
	const faq = findPageByRelativePath('home/faq.md')
	const teamIntro = findPageByRelativePath('organizations/index.md')
	const teamPages = data.pageContext.pages.filter(
		({ id, relativeDirectory }) =>
			`${relativeDirectory}/` === 'organizations/' && id !== teamIntro?.id,
	)
	return (
		<>
			<Head
				siteMetaData={data.data.site.siteMetadata}
				pageTitle={data.pageContext.page.remark.frontmatter?.title}
			/>
			<Wrapper>
				<Navigation siteMetaData={data.data.site.siteMetadata} />
				<Header
					gallery={data.data.allSanityGallery.nodes}
					content={headerContent}
				/>
				<main>
					{storyIntro && (
						<Offset>
							<Section id="our-story">
								<CenteredContent>
									<h2>
										<small>{storyIntro.remark.frontmatter.title}</small>
									</h2>
									{renderHtmlAstToReact(storyIntro.remark.htmlAst)}
								</CenteredContent>
								<ContentWithImage
									image={data.data.allSanityGallery.nodes?.find(
										(n) =>
											n._id === storyHistory.remark.frontmatter.photoSanityId,
									)}
								>
									{renderHtmlAstToReact(storyHistory.remark.htmlAst)}
								</ContentWithImage>
								<CenteredContent>
									<h2>
										<small>{donate.remark.frontmatter.title}</small>
									</h2>
									{renderHtmlAstToReact(donate.remark.htmlAst)}
									<p>
										<Link
											button
											href="https://donorbox.org/refugees-care"
											target="_blank"
											rel="nofollow noreferrer"
										>
											Donate now
										</Link>
										<Link button secondary href="#get-masks">
											Request Masks
										</Link>
									</p>
								</CenteredContent>

								<PlaceholderOffScreen>
									{(visible) =>
										visible ? (
											<CampaignProgress />
										) : (
											<CampaignProgressPlaceholder />
										)
									}
								</PlaceholderOffScreen>
							</Section>
						</Offset>
					)}
					{aboutTheMasks && (
						<Section id="about-the-masks">
							<Content>
								<h1>{aboutTheMasks.remark.frontmatter.title}</h1>
								{renderHtmlAstToReact(aboutTheMasks.remark.htmlAst)}
							</Content>
						</Section>
					)}
					{supportUs && (
						<Offset>
							<Section id="support-us">
								<Content>
									<h1>{supportUs.remark.frontmatter.title}</h1>
									{renderHtmlAstToReact(supportUs.remark.htmlAst)}
								</Content>
								<p>
									<Link
										button
										href="https://donorbox.org/refugees-care"
										target="_blank"
										rel="nofollow noreferrer"
									>
										Donate now
									</Link>
								</p>
							</Section>
						</Offset>
					)}
					{share && (
						<Section id="share">
							<Content>
								<h1>{share.remark.frontmatter.title}</h1>
								{renderHtmlAstToReact(share.remark.htmlAst)}
							</Content>
							<NewsletterSubscribeForm />
						</Section>
					)}
					{getMasks && (
						<Offset>
							<Section id="get-masks">
								<Content>
									<h1>{getMasks.remark.frontmatter.title}</h1>
									{renderHtmlAstToReact(getMasks.remark.htmlAst)}
								</Content>
							</Section>
						</Offset>
					)}
					{faq && <FAQ content={faq} />}
					<Offset>
						<Section id="team">
							{teamIntro !== undefined && teamPages.length > 0 && (
								<Team intro={teamIntro} entries={teamPages} />
							)}
						</Section>
					</Offset>
				</main>
				<Footer siteMetaData={data.data.site.siteMetadata}>
					<Section>
						<p>
							<strong>{headerContent?.remark.frontmatter.title}</strong>
						</p>
						<p>
							<Link
								button
								href="https://donorbox.org/refugees-care"
								target="_blank"
								rel="nofollow noreferrer"
							>
								Donate now
							</Link>
							<Link button secondary href="#get-masks">
								Request Masks
							</Link>
						</p>
					</Section>
				</Footer>
			</Wrapper>
		</>
	)
}

export default HomeTemplate
