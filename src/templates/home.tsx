import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Head } from '../components/Head'
import { Header } from '../components/Header'
import { Main, Section, Offset } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NewsletterSubscribeForm } from '../components/NewsletterSubscribeForm'
import { SiteMetaData, Page } from './types'
import { Team } from '../components/Team'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'

const Wrapper = styled.div`
	height: 100%;
`
const StyledContentSection = styled(Section)`
	h1,
	h2 {
		font-size: 14px;
		margin-bottom: 1rem;
	}
	div,
	p,
	li {
		font-size: 14px;
	}
	blockquote {
		margin: 0;
		p {
			font-size: 16px;
			font-weight: 500;
		}
	}
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
				<Navbar />
				<Header
					gallery={data.data.allSanityGallery.nodes}
					content={headerContent}
				/>
				<Main>
					{storyIntro && (
						<Offset>
							<StyledContentSection>
								<h1>{storyIntro.remark.frontmatter.title}</h1>
								<div>{renderHtmlAstToReact(storyIntro.remark.htmlAst)}</div>
								<p>
									<PrimaryButton>Donate</PrimaryButton>
									<SecondaryButton href="#get-masks">
										Request Masks
									</SecondaryButton>
								</p>
							</StyledContentSection>
						</Offset>
					)}
					{aboutTheMasks && (
						<StyledContentSection>
							<h1>{aboutTheMasks.remark.frontmatter.title}</h1>
							<div>{renderHtmlAstToReact(aboutTheMasks.remark.htmlAst)}</div>
						</StyledContentSection>
					)}
					{supportUs && (
						<Offset>
							<StyledContentSection>
								<h1>{supportUs.remark.frontmatter.title}</h1>
								<div>{renderHtmlAstToReact(supportUs.remark.htmlAst)}</div>
								<p>
									<PrimaryButton>Donate</PrimaryButton>
								</p>
							</StyledContentSection>
						</Offset>
					)}
					{share && (
						<StyledContentSection>
							<h1>{share.remark.frontmatter.title}</h1>
							<div>{renderHtmlAstToReact(share.remark.htmlAst)}</div>
						</StyledContentSection>
					)}
					{getMasks && (
						<Offset id="get-masks">
							<StyledContentSection>
								<h1>{getMasks.remark.frontmatter.title}</h1>
								<div>{renderHtmlAstToReact(getMasks.remark.htmlAst)}</div>
							</StyledContentSection>
						</Offset>
					)}
					<Section>
						{teamIntro !== undefined && teamPages.length > 0 && (
							<Team intro={teamIntro} entries={teamPages} />
						)}
					</Section>
					{faq && (
						<Offset>
							<StyledContentSection>
								<h1>{faq.remark.frontmatter.title}</h1>
								<div>{renderHtmlAstToReact(faq.remark.htmlAst)}</div>
							</StyledContentSection>
						</Offset>
					)}
					<Section>
						<NewsletterSubscribeForm />
					</Section>
				</Main>
				<Footer siteMetaData={data.data.site.siteMetadata} />
			</Wrapper>
		</>
	)
}

export default HomeTemplate
