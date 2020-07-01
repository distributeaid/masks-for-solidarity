import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { wideBreakpoint } from '../settings'

const Title = styled.div`
	width: 100%;
	@media (min-width: ${wideBreakpoint}) {
		width: auto;
	}
	h1 {
		margin: 0;
		color: #fff;
		background-color: #3f797a;
		padding: 1rem;
		@media (min-width: ${wideBreakpoint}) {
			font-size: 60px;
			float: left;
			padding: 1rem 1rem 0.5rem 1rem;
		}
	}
`

const GalleryHeader = styled.header`
	height: 50%;
	min-height: 250px;
	transition: background 1s;
	background-position: 50% 50%;
	background-size: cover;
	position: relative;
	background-color: #333;
	${Title} {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	@media (min-width: ${wideBreakpoint}) {
		${Title} {
			position: absolute;
			left: 3rem;
			bottom: 3rem;
		}
	}
`

/**
 * Renders a rotating Gallery from a generator that returns URLs to photos
 */
export const Gallery = ({
	galleryPhotos,
}: {
	galleryPhotos: Generator<string>
}) => {
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
			<Title>
				<h1>Masks for Humanity</h1>
			</Title>
		</GalleryHeader>
	)
}
