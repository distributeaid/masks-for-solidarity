import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { wideBreakpoint } from './settings'

const windowGlobal = (typeof window !== 'undefined' && window) || undefined

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

const photos = [
	'https://cdn.sanity.io/images/1z6tpjf0/production/27fee9d809ff6017fafdf3cbc5514eebd1acff9a-1600x843.jpg',
	'https://cdn.sanity.io/images/1z6tpjf0/production/231bac93a65504138921fb8938ab58fb8f73c8c4-1186x720.jpg',
	'https://cdn.sanity.io/images/1z6tpjf0/production/a5adcbe500d309fa3a8cb63d435cc6413489c353-1280x720.jpg',
	'https://cdn.sanity.io/images/1z6tpjf0/production/fa89f0afaf0c7fae5745de2f505bdfc5db951089-1600x843.jpg',
	'https://cdn.sanity.io/images/1z6tpjf0/production/341ceaa1f3be4b16894a66e7798abf9f2a1b7fd1-1024x540.jpg',
]

function* rotate<T>(items: T[]): Generator<T> {
	let i = 0
	while (true) {
		yield items[i]
		i = ++i % items.length
	}
}

const galleryPhotos = rotate(photos)

const toQueryString = (params: Record<string, any>) =>
	Object.entries(params)
		.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
		.join('&')

const responsiveUrl = ({
	url,
	w,
	h,
}: {
	url: string
	w?: number
	h?: number
}) =>
	`${url}?${toQueryString({
		w: Math.floor((w ?? 1000) / 100) * 100,
		h: Math.floor((h ?? 500) / 100) * 100,
		fit: 'crop',
		auto: 'format',
	})}`

export const Header = ({ gallery }: { gallery: Record<string, any>[] }) => {
	console.log({ gallery })

	const [currentPhoto, setCurrentPhoto] = useState(
		responsiveUrl({
			url: galleryPhotos.next().value,
			w: windowGlobal?.innerWidth,
			h: (windowGlobal?.innerHeight ?? 500) / 2,
		}),
	)

	useEffect(() => {
		let isCancelled = false
		const i = setInterval(() => {
			if (!isCancelled)
				setCurrentPhoto(
					responsiveUrl({
						url: galleryPhotos.next().value,
						w: windowGlobal?.innerWidth,
						h: (windowGlobal?.innerHeight ?? 500) / 2,
					}),
				)
		}, 1000)
		return () => {
			isCancelled = true
			clearInterval(i)
		}
	}, [galleryPhotos])

	return (
		<GalleryHeader style={{ backgroundImage: `url(${currentPhoto})` }}>
			<Title>
				<h1>Masks for Solidarity</h1>
			</Title>
		</GalleryHeader>
	)
}
