import React from 'react'
import { GalleryImage, responsiveUrl } from '../sanity'
import { Gallery } from './Gallery'
import { rotate } from '../rotate'
import { shuffle } from '../shuffle'

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

export const Header = ({ gallery }: { gallery: GalleryImage[] }) => {
	const imageToUrl = toResponsiveUrl({
		width: windowGlobal?.innerWidth ?? 1000,
		height: (windowGlobal?.innerHeight ?? 500) / 2,
	})
	const galleryPhotos = rotate(shuffle(gallery.map(imageToUrl)))
	return <Gallery galleryPhotos={galleryPhotos} />
}
