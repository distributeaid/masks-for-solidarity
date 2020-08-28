import React, { useState, useEffect } from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { rotate } from '../rotate'
import { shuffle } from '../shuffle'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { PrimaryButton } from './Buttons'
import { mediumBreakpoint, wideBreakpoint, fonts, colors } from '../settings'
import styled from 'styled-components'
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
	display: flex;
	flex-direction: column;
	@media (min-width: ${mediumBreakpoint}) {
		height: 50%;
		flex-direction: row-reverse;
		width: 100%;
	}
	margin: 0 auto;
`

const Content = styled.div`
	margin: 0 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 50%;
	@media (min-width: ${mediumBreakpoint}) {
		width: 50%;
		height: 100%;
	}
	h2 {
		text-align: center;
		font-family: ${fonts.text.name};
		font-weight: ${fonts.text.weights.default};
		font-size: 200%;
		text-transform: none;
		small {
			font-family: ${fonts.headline.name};
			color: ${colors.lightText};
			text-transform: uppercase;
			font-size: 50%;
		}
	}
	${PrimaryButton} {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	section {
		max-width: calc(${wideBreakpoint} / 2 - 2rem);
		margin: 0 auto;
	}
`
const StyledMarkdown = styled(Markdown)`
	text-align: center;
`
const GalleryContainer = styled.aside`
	padding-top: calc((3 / 4) * 100%);
	transition: background 1s;
	background-position: 50% 50%;
	background-size: cover;
	background-color: #333;
	@media (min-width: ${mediumBreakpoint}) {
		height: 100%;
		width: 50%;
		padding-top: 0;
	}
`

/**
 * Renders a rotating Gallery from a generator that returns URLs to photos
 */
const Gallery = ({
	galleryPhotos,
}: React.PropsWithChildren<{
	galleryPhotos: Generator<string>
}>) => {
	const [currentPhoto, setCurrentPhoto] = useState(galleryPhotos.next().value)
	useEffect(() => {
		let isCancelled = false
		const i = setInterval(() => {
			if (!isCancelled) setCurrentPhoto(galleryPhotos.next().value)
		}, 10000)
		return () => {
			isCancelled = true
			clearInterval(i)
		}
	}, [galleryPhotos])

	return (
		<GalleryContainer style={{ backgroundImage: `url(${currentPhoto})` }} />
	)
}

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
		<Wrapper>
			<Gallery galleryPhotos={galleryPhotos} />
			<Content>
				<section>
					<h2>
						<small>{content.remark.frontmatter.subtitle}</small>
						<br />
						{content.remark.frontmatter.title}
					</h2>
					<StyledMarkdown>
						{renderHtmlAstToReact(content.remark.htmlAst)}
					</StyledMarkdown>
					<PrimaryButton
						href="https://donorbox.org/refugees-care"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Donate now
					</PrimaryButton>
				</section>
			</Content>
		</Wrapper>
	)
}
