import React from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { Gallery } from './Gallery'
import { rotate } from '../rotate'
import { shuffle } from '../shuffle'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { PrimaryButton } from './Buttons'
import { mediumBreakpoint } from '../settings'
import styled from 'styled-components'
import { CampaignProgress } from './CampaingProgress'
import { Markdown } from './Main'

const windowGlobal = (typeof window !== 'undefined' && window) || undefined

/**
 * Creates a URL for the given image that fits the target viewport size
 */
const toResponsiveUrl = ({
	width,
	height,
}: {
	width: number
	height: number
}) => (image: GalleryImage): string =>
	responsiveUrl({ image, w: width, h: height })

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: ${mediumBreakpoint};
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column-reverse;
`

const Content = styled.div`
	padding: 1rem;
	@media (min-width: ${mediumBreakpoint}) {
		padding: 0;
		width: 50%;
	}
	margin-bottom: 2rem;
	${PrimaryButton} {
		margin-top: 2rem;
		text-shadow: inherit;
		box-shadow: 1px 1px 4px #00000099, -1px 1px 4px #00000099,
			-1px -1px 4px #00000099, 1px -1px 4px #00000099;
	}
	h2 {
		margin: 0 0 2rem 0;
	}
	text-shadow: 1px 1px 4px #00000099, -1px 1px 4px #00000099,
		-1px -1px 4px #00000099, 1px -1px 4px #00000099;
`

const StyledMarkdown = styled(Markdown)`
	margin-bottom: 1rem;
`

export const Header = ({
	gallery,
	content,
}: {
	gallery: GalleryImage[]
	content: Page
}) => {
	const imageToUrl = toResponsiveUrl({
		width: windowGlobal?.innerWidth ?? 1000,
		height: (windowGlobal?.innerHeight ?? 500) / 2,
	})
	const galleryPhotos = rotate(shuffle(gallery.map(imageToUrl)))
	return (
		<Gallery galleryPhotos={galleryPhotos}>
			<Wrapper>
				<Content>
					<h2>
						<small>{content.remark.frontmatter.subtitle}:</small>
						<br />
						{content.remark.frontmatter.title}
					</h2>
					<StyledMarkdown>
						{renderHtmlAstToReact(content.remark.htmlAst)}
					</StyledMarkdown>
					<CampaignProgress />
					<PrimaryButton>Donate now</PrimaryButton>
				</Content>
			</Wrapper>
		</Gallery>
	)
}
