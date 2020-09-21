import styled from 'styled-components'
import React from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { breakpoints } from '../settings'

const Container = styled.div`
	display: flex;
	flex-direction: column-reverse;
	@media (min-width: ${breakpoints.mediumPx}) {
		display: grid;
		grid-template-columns: 47.5% 47.5%;
		grid-template-rows: 1fr;
		grid-gap: 5%;
	}
	align-items: center;
`
const Content = styled.div`
	width: 100%;
`
const ImagePlaceholder = styled.div`
	img {
		width: 100%;
		height: auto;
	}
`

export const WithImage = ({
	children,
	image,
}: React.PropsWithChildren<{ image: GalleryImage }>) => (
	<Container>
		<Content>{children}</Content>
		<ImagePlaceholder>
			<img
				alt={image.title}
				data-src={responsiveUrl({ image, w: 400, h: 300 })}
				className="lazyload"
				width="400"
				height="300"
			/>
		</ImagePlaceholder>
	</Container>
)
