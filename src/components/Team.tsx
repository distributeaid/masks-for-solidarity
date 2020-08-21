import React from 'react'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import styled from 'styled-components'
import { Markdown } from './Main'
import { fonts } from '../settings'

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
	min-width: 150px;
	@media (min-width: 500px) {
		width: 250px;
	}
	flex-direction: column;
	margin: 2rem 0;
	text-decoration: none;
	align-items: center;
	span {
		color: white;
		opacity: 0.75;
		font-size: 90%;
		small {
			font-size: 90%;
			opacity: 0.85;
		}
	}
	img {
		width: 25%;
		max-width: 100px;
		@media (min-width: 500px) {
			width: 60%;
		}
		filter: grayscale(1);
		margin-bottom: 1rem;
	}
	&:hover {
		img {
			filter: none;
		}
		span {
			opacity: 1;
		}
	}
`

const imageUrl = (url: string) => {
	if (url.endsWith('svg')) return url
	return `${url}?w=150`
}

export const Team = ({ intro, entries }: { intro: Page; entries: Page[] }) => (
	<section>
		<h2>{intro.remark.frontmatter.title}</h2>
		<Markdown>{renderHtmlAstToReact(intro.remark.htmlAst)}</Markdown>
		<Nav>
			{entries.map((entry, id) => (
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
						height={100}
					/>
					<span>
						{entry.remark.frontmatter.title}
						<br />
						<small>{entry.remark.frontmatter.role}</small>
					</span>
				</TeamEntry>
			))}
		</Nav>
	</section>
)
