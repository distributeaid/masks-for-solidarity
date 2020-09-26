import React, { useRef, useEffect, useState } from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import { Link } from './Links'
import { breakpoints } from '../settings'
import styled from 'styled-components'
import { Content } from './Content'

const windowGlobal = (typeof window !== 'undefined' && window) || undefined

const Section = styled.section`
	${Content} {
		margin-bottom: 2rem;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	${Section} {
		margin: 1rem;
		text-align: center;
		@media (min-width: ${breakpoints.mediumPx}) {
			text-align: inherit;
			padding: 5rem 0;
			margin: 2rem;
		}
		@media (min-width: ${breakpoints.widePx}) {
			max-width: calc(${breakpoints.widePx} / 2 - 2rem);
			margin: 2rem auto;
		}
	}
`

const Image = styled.div`
	background-position: 50% 50%;
	background-size: cover;
	background-color: #333;
	width: 100vw;
	height: 40vh;
	@media (min-width: ${breakpoints.mediumPx}) {
		width: 50vw;
		height: 100%;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	@media (min-width: ${breakpoints.mediumPx}) {
		flex-direction: row-reverse;
		width: 100%;
	}
	${Container} {
		@media (min-width: ${breakpoints.mediumPx}) {
			width: 50%;
			height: auto;
		}
	}
`

export const Header = ({
	image,
	content,
}: {
	image: GalleryImage
	content: Page
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const [heroImage, setHeroImage] = useState<{
		width: number
		height: number
		containerHeight: number
		url: string
	}>()

	useEffect(() => {
		let isCancelled = false
		if (ref.current !== null) {
			let w = windowGlobal?.innerWidth ?? 1000
			const h = (windowGlobal?.innerHeight ?? 500) / 2
			if (w > breakpoints.medium) {
				w = w / 2
			}
			if (!isCancelled)
				setHeroImage({
					url: responsiveUrl({ image, w, h }),
					width: w,
					height: h,
					containerHeight: w > breakpoints.medium ? h : h * 2,
				})
		}

		return () => {
			isCancelled = true
		}
	}, [ref])

	return (
		<Wrapper
			ref={ref}
			style={{ height: heroImage ? heroImage.containerHeight : 'auto' }}
		>
			{heroImage && (
				<Image
					style={{
						backgroundImage: `url(${heroImage.url})`,
					}}
				/>
			)}
			{!heroImage && <Image />}
			<Container>
				<Section>
					<Content>
						<h1>
							<small>{content.remark.frontmatter.subtitle}</small>
							<br />
							{content.remark.frontmatter.title}
						</h1>
						<p>{renderHtmlAstToReact(content.remark.htmlAst)}</p>
						<Link
							button
							large
							href="https://donorbox.org/refugees-care"
							target="_blank"
							rel="nofollow noreferrer"
						>
							Donate now
						</Link>
					</Content>
				</Section>
			</Container>
		</Wrapper>
	)
}
