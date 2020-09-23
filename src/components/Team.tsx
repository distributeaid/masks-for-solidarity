import React from 'react'
import { Page } from '../templates/types'
import styled from 'styled-components'
import { colors, fonts } from '../settings'

const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (min-width: 700px) {
		grid-template-columns: repeat(6, 1fr);
	}
	align-items: center;
	justify-items: center;
	margin-top: 2rem;
`

const TeamEntry = styled.a`
	text-align: center;
	display: flex;
	width: 90%;
	flex-direction: column;
	margin: 2rem 0;
	text-decoration: none;
	align-items: center;
	span {
		color: ${colors.text};
		font-size: 80%;
		font-weight: ${fonts.sans.weights.regular};
		font-family: ${fonts.sans.name};
	}
	img {
		width: 80%;
		max-width: 100px;
		height: auto;
		margin-bottom: 1rem;
		filter: grayscale(1);
		&:hover,
		&:active {
			filter: none;
		}
	}
`

const imageUrl = (url: string) => {
	if (url.endsWith('svg')) return url
	return `${url}?w=100`
}

const imageDimensions = (url: string): { width: number; height: number } =>
	/-(?<width>[0-9]+)x(?<height>[0-9]+)\.[a-z]+$/.exec(url)?.groups ?? {
		width: 100,
		height: 100,
	}

export const Team = ({ entries }: { entries: Page[] }) => (
	<Nav>
		{entries.map((entry, id) => {
			const dim = imageDimensions(entry.remark.frontmatter.logo as string)
			return (
				<TeamEntry
					key={id}
					href={entry.remark.frontmatter.website}
					target="_blank"
					rel="nofollow noreferrer"
				>
					<img
						alt={entry.remark.frontmatter.title}
						target="_blank"
						data-src={imageUrl(entry.remark.frontmatter.logo ?? '')}
						className="lazyload"
						width={100}
						height={Math.round(100 * (dim.height / dim.width))}
					/>
					<span>{entry.remark.frontmatter.role}</span>
				</TeamEntry>
			)
		})}
	</Nav>
)
