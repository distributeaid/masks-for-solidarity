import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Section, Offset, Markdown } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NewsletterSubscribeForm } from '../components/NewsletterSubscribeForm'
import { SiteMetaData, Page } from './types'
import { Team } from '../components/Team'
import { FAQ } from '../components/FAQ'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'

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
	const findPageByRelativePath = (search: string) =>
		data.pageContext.pages.find(({ relativePath }) => relativePath === search)
	const headerContent = findPageByRelativePath('home/header.md')
	const storyIntro = findPageByRelativePath('home/our-story.md')
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
				<Navbar siteMetaData={data.data.site.siteMetadata} />
				<Header
					gallery={data.data.allSanityGallery.nodes}
					content={headerContent}
				/>
				<main>
					{storyIntro && (
						<Offset>
							<Section id="our-story">
								<h1>{storyIntro.remark.frontmatter.title}</h1>
								<Markdown>
									{renderHtmlAstToReact(storyIntro.remark.htmlAst)}
								</Markdown>
								<p>
									<PrimaryButton
										href="https://donorbox.org/refugees-care"
										target="_blank"
										rel="nofollow noreferrer"
									>
										Donate now
									</PrimaryButton>
									<SecondaryButton href="#get-masks">
										Request Masks
									</SecondaryButton>
								</p>
							</Section>
						</Offset>
					)}
					{aboutTheMasks && (
						<Section id="about-the-masks">
							<h1>{aboutTheMasks.remark.frontmatter.title}</h1>
							<Markdown>
								{renderHtmlAstToReact(aboutTheMasks.remark.htmlAst)}
							</Markdown>
						</Section>
					)}
					{supportUs && (
						<Offset>
							<Section id="support-us">
								<h1>{supportUs.remark.frontmatter.title}</h1>
								<Markdown>
									{renderHtmlAstToReact(supportUs.remark.htmlAst)}
								</Markdown>
								<p>
									<PrimaryButton
										href="https://donorbox.org/refugees-care"
										target="_blank"
										rel="nofollow noreferrer"
									>
										Donate now
									</PrimaryButton>
								</p>
							</Section>
						</Offset>
					)}
					{share && (
						<Section id="share">
							<h1>{share.remark.frontmatter.title}</h1>
							<Markdown>{renderHtmlAstToReact(share.remark.htmlAst)}</Markdown>
							<NewsletterSubscribeForm />
						</Section>
					)}
					{getMasks && (
						<Offset>
							<Section id="get-masks">
								<h1>{getMasks.remark.frontmatter.title}</h1>
								<Markdown>
									{renderHtmlAstToReact(getMasks.remark.htmlAst)}
								</Markdown>
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
						<h1>{headerContent?.remark.frontmatter.title}</h1>
						<p>
							<PrimaryButton
								href="https://donorbox.org/refugees-care"
								target="_blank"
								rel="nofollow noreferrer"
							>
								Donate now
							</PrimaryButton>
							<SecondaryButton href="#get-masks">Request Masks</SecondaryButton>
						</p>
					</Section>
				</Footer>
			</Wrapper>
		</>
	)
}

export default HomeTemplate
