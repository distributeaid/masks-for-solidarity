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
import { breakpoints } from '../settings'
import { Emoji } from '../components/Emoji'
import { MaskPropertyIcons } from '../components/MaskPropertyIcons'
import { MaskUsageIcons } from '../components/MaskUsageIcons'

const Wrapper = styled.div`
	height: 100%;
`
const FAQSection = styled(Section)`
	@media (min-width: ${breakpoints.mediumPx}) {
		padding-bottom: 4rem;
	}
`
const PaddedContent = styled(Content)`
	padding: 2rem 1rem;
	@media (min-width: ${breakpoints.mediumPx}) {
		padding: 4rem 1rem;
	}
`

const PaddedSection = styled(Section)`
	padding: 1rem 0;
	@media (min-width: ${breakpoints.mediumPx}) {
		padding: 4rem 0;
	}
`

const StyledEmoji = styled(Emoji)`
	margin: 2rem 0 3rem 0;
	@media (min-width: ${breakpoints.mediumPx}) {
		zoom: 2;
	}
`

const Status = styled.aside`
	background-color: #fffaba;
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
	const getMasksIntro = findPageByRelativePath('home/get-masks-intro.md')
	const getMasksAtCost = findPageByRelativePath('home/get-masks-at-cost.md')
	const getMasksRequest = findPageByRelativePath('home/get-masks-request.md')
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
	const status = findPageByRelativePath('home/status.md')

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
				<Status>
					<Section>
						<PaddedContent>
							<h2>
								<small>{status.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(status.remark.htmlAst)}
						</PaddedContent>
					</Section>
				</Status>
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
							<CenteredContent>
								<StyledEmoji alt={'🕊️'} code={'1F54A'} />
							</CenteredContent>
							<WithImage
								image={getImage(storyHistory.remark.frontmatter.photoSanityId)}
							>
								<PaddedContent>
									{renderHtmlAstToReact(storyHistory.remark.htmlAst)}
								</PaddedContent>
							</WithImage>
						</Section>
						<PaddedSection>
							<CenteredContent>
								<h2>
									<small>{donate.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(donate.remark.htmlAst)}
							</CenteredContent>
							<PaddedContent>
								<CenteredContent>
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
							</PaddedContent>
							<CenteredContent>
								<PlaceholderOffScreen>
									{(visible) =>
										visible ? (
											<CampaignProgress />
										) : (
											<CampaignProgressPlaceholder />
										)
									}
								</PlaceholderOffScreen>
							</CenteredContent>
						</PaddedSection>
					</Offset>
					<Section id="about-the-masks">
						<WithImage
							image={getImage(aboutTheMasks.remark.frontmatter.photoSanityId)}
						>
							<MaskPropertyIcons>
								<h2>
									<small>{aboutTheMasks.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(aboutTheMasks.remark.htmlAst)}
							</MaskPropertyIcons>
						</WithImage>
						<MaskUsageIcons>
							{renderHtmlAstToReact(whenToUse.remark.htmlAst)}
						</MaskUsageIcons>
					</Section>
					<Offset>
						<Section>
							<WithImage
								image={getImage(theFacts.remark.frontmatter.photoSanityId)}
							>
								<PaddedContent>
									<h2>
										<small>{theFacts.remark.frontmatter.title}</small>
									</h2>
									{renderHtmlAstToReact(theFacts.remark.htmlAst)}
								</PaddedContent>
							</WithImage>
						</Section>
					</Offset>
					<Section id="support-us">
						<CenteredContent>
							<h2>
								<small>{supportUs.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(supportUs.remark.htmlAst)}
							<PaddedContent>
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
							</PaddedContent>
						</CenteredContent>
					</Section>
					<PaddedSection id="share">
						<WithImage image={getImage(share.remark.frontmatter.photoSanityId)}>
							<PaddedContent>
								<h3>{share.remark.frontmatter.title}</h3>
								{renderHtmlAstToReact(share.remark.htmlAst)}
								<NewsletterSubscribeForm />
							</PaddedContent>
						</WithImage>
					</PaddedSection>
					<Section id="get-masks">
						<CenteredContent>
							<h2>
								<small>{getMasksIntro.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(getMasksIntro.remark.htmlAst)}
						</CenteredContent>
						<ContentWithGridList>
							<ul>
								<li>
									<p>
										<strong>{getMasksAtCost.remark.frontmatter.title}</strong>
									</p>
									{renderHtmlAstToReact(getMasksAtCost.remark.htmlAst)}
									<p>
										<Link
											button
											href="https://forms.gle/kBrSmH4NCrKZV8yW7"
											target="_blank"
											rel="nofollow noreferrer"
										>
											Order now
										</Link>
									</p>
								</li>
								<li>
									<p>
										<strong>{getMasksRequest.remark.frontmatter.title}</strong>
									</p>
									{renderHtmlAstToReact(getMasksRequest.remark.htmlAst)}
									<p>
										<a
											href={'https://forms.gle/BKjTXX7rqRwg6afZ8'}
											target="_blank"
											rel="nofollow noreferrer"
										>
											Fill out our needs request form
										</a>
									</p>
								</li>
							</ul>
						</ContentWithGridList>
					</Section>
					<Offset>
						<FAQSection id="faq">
							<PaddedContent>
								<h2>
									<small>{faqIntro.remark.frontmatter.title}</small>
								</h2>
								{renderHtmlAstToReact(faqIntro.remark.htmlAst)}
							</PaddedContent>
							{faqEntries.map((faq, i) => (
								<Accordion key={i} title={faq.remark.frontmatter.title}>
									<Content>{renderHtmlAstToReact(faq.remark.htmlAst)}</Content>
								</Accordion>
							))}
						</FAQSection>
					</Offset>
					<Section id="team">
						<CenteredContent>
							<h2>
								<small>{teamIntro.remark.frontmatter.title}</small>
							</h2>
							{renderHtmlAstToReact(teamIntro.remark.htmlAst)}
						</CenteredContent>
						<Team entries={teamPages} />
					</Section>
				</main>
				<Footer siteMetaData={data.data.site.siteMetadata}>
					<CenteredContent>
						<PaddedContent>
							<p>
								<strong>{headerContent?.remark.frontmatter.title}</strong>
							</p>
						</PaddedContent>
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
				</Footer>
			</Wrapper>
		</>
	)
}

export default HomeTemplate
