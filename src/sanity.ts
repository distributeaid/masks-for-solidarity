import { toQueryString } from './toQueryString'

export type GalleryImage = {
	title: string
	photo: {
		hotspot?: { x: number; y: number }
		asset: {
			url: string
			metadata: { dimensions: { width: number; height: number } }
		}
	}
}

/**
 * Returns a Sanity image URL for the given target size incorporating the images hotspot settings.
 *
 * Handles smaller images (this is not handled on Sanity size, the crop method will upscale images)
 */
export const responsiveUrl = ({
	image,
	w,
	h,
}: {
	image: GalleryImage
	w: number
	h: number
}): string => {
	const viewRatio = h / w
	const isLandscape = viewRatio < 1
	const isPortrait = !isLandscape

	// Do not upscale image (not supported server side with Sanity in case of hotspot use)
	let scaledWidth = Math.floor((w ?? 1000) / 100) * 100
	let scaledHeight = Math.floor((h ?? 500) / 100) * 100
	if (
		isLandscape &&
		scaledWidth > image.photo.asset.metadata.dimensions.width
	) {
		// landscape image is smaller than target size
		scaledWidth = image.photo.asset.metadata.dimensions.width
		scaledHeight = Math.round(scaledWidth * viewRatio)
	}
	if (
		isPortrait &&
		scaledHeight > image.photo.asset.metadata.dimensions.height
	) {
		// portrait image is smaller than target size
		scaledHeight = image.photo.asset.metadata.dimensions.height
		scaledWidth = Math.round(scaledWidth * (1 / viewRatio))
	}

	return `${image.photo.asset.url}?${toQueryString({
		w: Math.min(image.photo.asset.metadata.dimensions.width, scaledWidth),
		h: Math.min(image.photo.asset.metadata.dimensions.height, scaledHeight),
		'fp-x': image.photo.hotspot?.x ?? 0.5,
		'fp-y': image.photo.hotspot?.y ?? 0.5,
		fit: 'crop',
		auto: 'format',
	})}`
}
