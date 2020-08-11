import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import { mediumBreakpoint } from '../settings'
import { SiteMetaData } from '../templates/page'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import GitHubIcon from 'feather-icons/dist/icons/github.svg'
import VictoryIcon from './noun_victory_394398.svg'
import Logo from './logo-currentColor.svg'

const StyledFooter = styled.footer`
	margin: 0 auto;
	max-width: ${mediumBreakpoint};
	padding: 4rem 1rem 2rem 1rem;
	svg {
		display: inline-block;
		margin-bottom: -8px;
		padding: 0 0.25rem;
	}
	a {
		color: inherit;
	}
`

const P = styled.p`
	margin-bottom: 2rem;
`

const StyledVictoryIcon = styled(VictoryIcon)`
	height: 24px;
	width: 24px;
	fill: #fff;
	margin-bottom: -5px;
	opacity: 0.75;
`

const StyledHeartIcon = styled(HeartIcon)`
	color: #f11748;
`

const Attributions = styled.aside`
	margin-top: 4rem;
	margin-bottom: 2rem;
	opacity: 0.75;
	font-size: 85%;
	@media (min-width: ${mediumBreakpoint}) {
		text-align: center;
	}
`

const Nav = styled.nav`
	text-transform: uppercase;
	a {
		text-decoration: none;
	}
	a + a {
		&:before {
			content: ' · ';
		}
	}
`

const StyledLogo = styled(Logo)`
	max-width: 200px;
	height: auto;
`

const Wrapper = styled.div`
	background-color: #222;
`

const TwoCols = styled.section`
	${Nav} {
		margin-bottom: 4rem;
		text-align: center;
	}
	@media (min-width: ${mediumBreakpoint}) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row-reverse;
		${Nav} {
			margin-bottom: 0;
		}
	}
`

export const Footer = ({
	siteMetaData: { gitHubUrl },
}: {
	siteMetaData: SiteMetaData
}) => (
	<Wrapper>
		<StyledFooter>
			<TwoCols>
				<Nav>
					<a href={withPrefix('/Privacy')}>Privacy</a>
					<a
						href={gitHubUrl}
						target="_blank"
						rel="nofollow noreferrer"
						title="GitHub project for this site"
					>
						<GitHubIcon />
					</a>
				</Nav>
				<div>
					<StyledLogo />
					<P>
						Made with <StyledHeartIcon /> by Refugees in Moria.
					</P>
				</div>
			</TwoCols>
			<Attributions>
				<p>
					{/* The ✌️ graphic used in the logo is from The Noun Project and requires attribution: https://thenounproject.com/term/victory/394398/ */}
					<StyledVictoryIcon /> icon used in logo created by Sergey Demushkin
					from the Noun Project.
				</p>
				<p>
					{/* We need to credit Netlify to be eligible for the open-source plan: https://www.netlify.com/legal/open-source-policy/ */}

					<a href="https://www.netlify.com">
						<img
							alt="Deploys by Netlify"
							target="_blank"
							rel="nofollow noreferrer"
							data-src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
							className="lazyload"
						/>
					</a>
				</p>
				<p>
					&copy;2020{' '}
					<a
						href="https://distributeaid.org/"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Distribute Aid
					</a>
					. All rights reserved.
				</p>
			</Attributions>
		</StyledFooter>
	</Wrapper>
)
