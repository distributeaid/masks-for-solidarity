import React, { useState, useEffect } from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { rotate } from '../rotate'
import { shuffle } from '../shuffle'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Link } from './Links'
import { breakpoints } from '../settings'
import styled from 'styled-components'
import { Content } from './Content'

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
	@media (min-width: ${breakpoints.medium}) {
		height: 50%;
		flex-direction: row-reverse;
		width: 100%;
	}
	margin: 0 auto;
`

const Container = styled.div`
	margin: 0 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 50%;
	@media (min-width: ${breakpoints.medium}) {
		width: 50%;
		height: 100%;
	}
	Section {
		max-width: calc(${breakpoints.wide} / 2 - 2rem);
		margin: 2rem auto;
	}
`

const GalleryContainer = styled.aside`
	padding-top: calc((3 / 4) * 100%);
	transition: background 1s;
	background-position: 50% 50%;
	background-size: cover;
	background-color: #333;
	@media (min-width: ${breakpoints.medium}) {
		height: 100%;
		width: 50%;
		padding-top: 0;
	}
`

const Section = styled.section`
	${Content} {
		margin-bottom: 2rem;
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
		width: (windowGlobal?.innerWidth ?? 1000) / 2,
		height: (windowGlobal?.innerHeight ?? 500) / 2,
	})
	const galleryPhotos = rotate(shuffle(gallery.map(imageToUrl)))
	return (
		<Wrapper>
			<Gallery galleryPhotos={galleryPhotos} />
			<Container>
				<Section>
					<Content>
						<h1>
							<small>{content.remark.frontmatter.subtitle}</small>
							<br />
							{content.remark.frontmatter.title}
						</h1>
						<p>{renderHtmlAstToReact(content.remark.htmlAst)}</p>
					</Content>
					<Link
						button
						large
						href="https://donorbox.org/refugees-care"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Donate now
					</Link>
				</Section>
			</Container>
		</Wrapper>
	)
}
