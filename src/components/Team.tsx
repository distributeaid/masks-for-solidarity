import React from 'react'
import { Page } from '../templates/types'
import { renderHtmlAstToReact } from '../renderHtmlToReact'
import styled from 'styled-components'

import LinkIcon from 'feather-icons/dist/icons/link.svg'
import FacebookIcon from 'feather-icons/dist/icons/facebook.svg'
import TwitterIcon from 'feather-icons/dist/icons/twitter.svg'
import InstagramIcon from 'feather-icons/dist/icons/instagram.svg'
import { withPrefix } from 'gatsby'

const plainTextLink = (link: string): string =>
	link.replace(/^https?:\/\//, '').replace(/\/$/, '')

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	a {
		display: flex;
		svg {
			height: 20px;
			width: 20px;
			margin-right: 0.5rem;
		}
	}
	a + a {
		margin-top: 0.5rem;
	}
`

const TeamTitle = styled.h3`
	small {
		font-weight: 200;
		font-size: 60%;
	}
`

const Logo = styled.img`
	float: right;
	max-width: 250px;
	max-height: 150px;
	margin-left: 1rem;
`

export const Team = ({ intro, entries }: { intro: Page; entries: Page[] }) => (
	<section>
		<h2>{intro.remark.frontmatter.title}</h2>
		{renderHtmlAstToReact(intro.remark.htmlAst)}
		{entries.map((entry, id) => (
			<React.Fragment key={id}>
				<TeamTitle>
					<small>{entry.remark.frontmatter.role}:</small>
					<br />
					{entry.remark.frontmatter.title}
				</TeamTitle>
				{renderHtmlAstToReact(entry.remark.htmlAst)}
				<Nav>
					{entry.remark.frontmatter.website !== null && (
						<a
							href={entry.remark.frontmatter.website}
							target="_blank"
							rel="nofollow noreferrer"
						>
							<LinkIcon />
							{plainTextLink(entry.remark.frontmatter.website)}
						</a>
					)}
					{entry.remark.frontmatter.facebook !== null && (
						<a
							href={`https://facebook.com/${entry.remark.frontmatter.facebook}`}
							target="_blank"
							rel="nofollow noreferrer"
						>
							<FacebookIcon />
							{entry.remark.frontmatter.facebook}
						</a>
					)}
					{entry.remark.frontmatter.instagram !== null && (
						<a
							href={`https://instagram.com/${entry.remark.frontmatter.instagram}`}
							target="_blank"
							rel="nofollow noreferrer"
						>
							<InstagramIcon />
							{entry.remark.frontmatter.instagram}
						</a>
					)}
					{entry.remark.frontmatter.twitter !== null && (
						<a
							href={`https://twitter.com/${entry.remark.frontmatter.twitter}`}
							target="_blank"
							rel="nofollow noreferrer"
						>
							<TwitterIcon />
							{entry.remark.frontmatter.twitter}
						</a>
					)}
				</Nav>
			</React.Fragment>
		))}
	</section>
)
