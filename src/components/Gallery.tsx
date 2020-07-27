import React, { useEffect, useState } from 'react'

import './Gallery.scss'

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
		<header
			id="galleryHeader"
			style={{ backgroundImage: `url(${currentPhoto})` }}
		>
			<div className="title">
				<h1>Masks for Humanity</h1>
			</div>
		</header>
	)
}
