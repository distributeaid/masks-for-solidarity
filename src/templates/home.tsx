import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Content, CenteredContent } from '../components/Content'
import { WithImage } from '../components/WithImage'
import { ContentWithGridList } from '../components/ContentWithGridList'
import { Offset } from '../components/Offset'
import { NewsletterSubscribeForm } from '../components/NewsletterSubscribeForm'
import { SiteMetaData, Page } from './types'
import { Team } from '../components/Team'
import { Link } from '../components/Links'
import { Footer } from '../components/Footer'
import {
	CampaignProgress,
	CampaignProgressPlaceholder,
} from '../components/CampaingProgress'
import { PlaceholderOffScreen } from '../components/PlaceholderOffScreen'
import { Navigation } from './navigation'
import { GalleryImage } from '../sanity'
import { Accordion } from '../components/Accordion'

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
			nodes: GalleryImage[]
		}
	}
	pageContext: {
		page: Page
		pages: Page[]
	}
}) => {
	const findPageByRelativePath = (search: string): Page => {
		const p = data.pageContext.pages.find(
			({ relativePath }) => relativePath === search,
		)
		if (p === undefined) {
			throw new Error(`Failed to locate page ${search}!`)
		}
		return p
	}
	const headerContent = findPageByRelativePath('home/header.md')
	const storyIntro = findPageByRelativePath('home/our-story.md')
	const storyHistory = findPageByRelativePath('home/our-story-history.md')
	const donate = findPageByRelativePath('home/donate.md')
	const aboutTheMasks = findPageByRelativePath('home/about-the-masks.md')
	const theFacts = findPageByRelativePath('home/mask-facts.md')
	const whenToUse = findPageByRelativePath('home/when-to-use-the-masks.md')
	const supportUs = findPageByRelativePath('home/support-us.md')
	const share = findPageByRelativePath('home/share.md')
	const getMasks = findPageByRelativePath('home/get-masks.md')
	const faqIntro = findPageByRelativePath('home/faq.md')
	const faqEntries = [
		'home/faq-01.md',
		'home/faq-02.md',
		'home/faq-03.md',
		'home/faq-04.md',
	].map(findPageByRelativePath)
	const teamIntro = findPageByRelativePath('organizations/index.md')
	const teamPages = data.pageContext.pages.filter(
		({ id, relativeDirectory }) =>
			`${relativeDirectory}/` === 'organizations/' && id !== teamIntro?.id,
	)

	const getImage = (photoSanityId: string | null): GalleryImage => {
		const i = data.data.allSanityGallery.nodes?.find(
			(n) => n._id === photoSanityId,
		)
		if (i === undefined) throw new Error(`Image ${photoSanityId} not found!`)
		return i
	}

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
					image={getImage(headerContent.remark.frontmatter.photoSanityId)}
				/>
				<main>
					<Offset>
						<Section id="our-story">
							<CenteredContent>
								<h2>
									<small>{storyIntro.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(storyIntro.remark.htmlAst)}
							</CenteredContent>
							<WithImage
								image={getImage(storyHistory.remark.frontmatter.photoSanityId)}
							>
								<Content>
									{renderHtmlAstToReact(storyHistory.remark.htmlAst)}
								</Content>
							</WithImage>
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
					<Section id="about-the-masks">
						<WithImage
							image={getImage(aboutTheMasks.remark.frontmatter.photoSanityId)}
						>
							<Content>
								<h2>
									<small>{aboutTheMasks.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(aboutTheMasks.remark.htmlAst)}
							</Content>
						</WithImage>
						<ContentWithGridList>
							{renderHtmlAstToReact(whenToUse.remark.htmlAst)}
						</ContentWithGridList>
					</Section>
					<Offset>
						<Section>
							<WithImage
								image={getImage(theFacts.remark.frontmatter.photoSanityId)}
							>
								<Content>
									<h2>
										<small>{theFacts.remark.frontmatter.title}</small>
									</h2>
									{renderHtmlAstToReact(theFacts.remark.htmlAst)}
								</Content>
							</WithImage>
						</Section>
					</Offset>
					<Section id="support-us">
						<CenteredContent>
							<h2>
								<small>{supportUs.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(supportUs.remark.htmlAst)}
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
						</CenteredContent>
					</Section>
					<Section id="share">
						<WithImage image={getImage(share.remark.frontmatter.photoSanityId)}>
							<Content>
								<h3>{share.remark.frontmatter.title}</h3>
								{renderHtmlAstToReact(share.remark.htmlAst)}
								<NewsletterSubscribeForm />
							</Content>
						</WithImage>
					</Section>
					<Section id="get-masks">
						<ContentWithGridList>
							<h2>
								<small>{getMasks.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(getMasks.remark.htmlAst)}
						</ContentWithGridList>
					</Section>
					<Offset>
						<Section id="faq">
							<Content>
								<h2>
									<small>{faqIntro.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(faqIntro.remark.htmlAst)}
							</Content>
							{faqEntries.map((faq, i) => (
								<Accordion key={i} title={faq.remark.frontmatter.title}>
									{renderHtmlAstToReact(faq.remark.htmlAst)}
								</Accordion>
							))}
						</Section>
					</Offset>
					<Section id="team">
						{teamIntro !== undefined && teamPages.length > 0 && (
							<Team intro={teamIntro} entries={teamPages} />
						)}
					</Section>
				</main>
				<Footer siteMetaData={data.data.site.siteMetadata}>
					<Section>
						<CenteredContent>
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
						</CenteredContent>
					</Section>
				</Footer>
			</Wrapper>
		</>
	)
}

export default HomeTemplate
