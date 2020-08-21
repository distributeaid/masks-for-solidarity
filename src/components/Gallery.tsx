import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mediumBreakpoint } from '../settings'

const GalleryHeader = styled.header`
	height: calc(100% - 48px);
	@media (min-width: ${mediumBreakpoint}) {
		height: 50%;
	}
	min-height: 250px;
	transition: background 1s;
	background-position: 50% 50%;
	background-size: cover;
	position: relative;
	background-color: #333;
`

/**
 * Renders a rotating Gallery from a generator that returns URLs to photos
 */
export const Gallery = ({
	galleryPhotos,
	children,
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
		<GalleryHeader style={{ backgroundImage: `url(${currentPhoto})` }}>
			{children}
		</GalleryHeader>
	)
}
