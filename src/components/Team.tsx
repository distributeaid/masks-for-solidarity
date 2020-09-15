import React from 'react'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import styled from 'styled-components'
import { Content } from './Content'
import { colors } from '../settings'

const Nav = styled.nav`
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 500px) {
		grid-template-columns: 1fr 1fr;
	}
	align-items: center;
	justify-items: center;
	margin-top: 2rem;
`

const TeamEntry = styled.a`
	text-align: center;
	display: flex;
	width: 100%;
	min-width: 100px;
	@media (min-width: 500px) {
		width: 250px;
	}
	flex-direction: column;
	margin: 2rem 0;
	text-decoration: none;
	align-items: center;
	span {
		color: ${colors.text};
		font-size: 90%;
		small {
			font-size: 90%;
		}
	}
	img {
		width: 25%;
		max-width: 100px;
		height: auto;
		@media (min-width: 500px) {
			width: 60%;
		}
		margin-bottom: 1rem;
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

export const Team = ({ intro, entries }: { intro: Page; entries: Page[] }) => (
	<section>
		<Content>
			<h2>{intro.remark.frontmatter.title}</h2>
			{renderHtmlAstToReact(intro.remark.htmlAst)}
		</Content>
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
						<span>
							{entry.remark.frontmatter.title}
							<br />
							<small>{entry.remark.frontmatter.role}</small>
						</span>
					</TeamEntry>
				)
			})}
		</Nav>
	</section>
)
