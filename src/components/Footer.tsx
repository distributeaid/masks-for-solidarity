import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import { breakpoints, colors, fonts, fontSizes } from '../settings'
import { SiteMetaData } from '../templates/page'

import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import GitHubIcon from 'feather-icons/dist/icons/github.svg'
import VictoryIcon from './noun_victory_394398.svg'
import { Emoji } from './Emoji'
import { Content } from './Content'

const StyledFooter = styled.footer`
	margin: 0 auto;
	max-width: ${breakpoints.widePx};
	padding: 4rem 1rem 2rem 1rem;
	svg {
		display: inline-block;
		margin-bottom: -8px;
		padding: 0 0.25rem;
	}
	line-height: 1.5rem;
`

const StyledVictoryIcon = styled(VictoryIcon)`
	height: 24px;
	width: 17px;
	fill: ${colors.text};
	margin-bottom: -5px;
	opacity: 0.75;
`

const StyledHeartIcon = styled(HeartIcon)`
	color: #f11748;
`

const Nav = styled.nav`
	a {
		text-decoration: none;
	}
	> *:not(:first-child) {
		margin-left: 2rem;
	}
`

const Wrapper = styled.div`
	background-color: ${colors.offsetBackground};
`

const TwoCols = styled.section`
	margin-top: 4rem;
	@media (min-width: ${breakpoints.mediumPx}) {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-direction: row-reverse;
		${Nav} {
			margin-bottom: 0;
		}
		> *:last-child {
			width: 50%;
		}
		> *:first-child {
			width: 50%;
		}
		aside p:last-child {
			margin-bottom: 0;
		}
	}
	${Nav}, aside {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.regular};
		font-size: ${fontSizes.micro};
	}
	aside a,
	${Nav} a {
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
	}
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		flex-grow: 1;
	}
`

const HR = styled.hr`
	margin-top: 4rem;
`

const WithEmoji = styled.p`
	display: flex;
	span {
		margin-left: 0.5rem;
	}
`

export const Footer = ({
	siteMetaData: { gitHubUrl },
	children,
}: React.PropsWithChildren<{
	siteMetaData: SiteMetaData
}>) => (
	<Wrapper>
		<StyledFooter>
			{children}
			<HR />
			<TwoCols>
				<aside>
					<Content>
						<h3>Acknowledgements</h3>
					</Content>
					<WithEmoji>
						{/* The ✌️ graphic used in the logo is from The Noun Project and requires attribution: https://thenounproject.com/term/victory/394398/ */}
						<StyledVictoryIcon />
						<span>
							icon used in logo created by Sergey Demushkin from the Noun
							Project.
						</span>
					</WithEmoji>
					<WithEmoji>
						<Emoji alt={'🙋'} small code={'1F64B-1F3FD'} />
						<span>
							All emojis designed by{' '}
							<a
								href="https://openmoji.org/"
								rel="noopener noreferrer"
								target="_blank"
							>
								OpenMoji
							</a>{' '}
							– the open-source emoji and icon project. License:{' '}
							<a
								href="https://creativecommons.org/licenses/by-sa/4.0/"
								rel="noopener noreferrer"
								target="_blank"
							>
								CC BY-SA 4.0
							</a>
						</span>
					</WithEmoji>
					<p>
						<em>Man in black tank top carrying girl in blue tank top</em> photo
						by{' '}
						<a
							href="https://unsplash.com/photos/CCK5pfzTwDQ"
							rel="noopener noreferrer"
							target="_blank"
						>
							Nathan Dumlao from unsplash
						</a>
						. All other photos Licensed under{' '}
						<a
							href="https://creativecommons.org/licenses/by-sa/4.0/"
							rel="noopener noreferrer"
							target="_blank"
						>
							CC BY-SA 4.0
						</a>{' '}
						by{' '}
						<a
							href="https://teamhumanity.info/"
							target="_blank"
							rel="nofollow noreferrer"
						>
							Team Humanity
						</a>
						.
					</p>
					<p>
						{/* We need to credit Netlify to be eligible for the open-source plan: https://www.netlify.com/legal/open-source-policy/ */}
						<a
							href="https://www.netlify.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								alt="Deploys by Netlify"
								data-src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
								className="lazyload"
								width={114}
								height={51}
							/>
						</a>
					</p>
				</aside>
				<section>
					<div>
						<p>
							Made with <StyledHeartIcon /> by Refugees in Moria.
						</p>
					</div>
					<Nav>
						<span>
							&copy;2020{' '}
							<a
								href="https://distributeaid.org/"
								target="_blank"
								rel="nofollow noreferrer"
							>
								Distribute Aid
							</a>
							. All rights reserved.
						</span>
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
				</section>
			</TwoCols>
		</StyledFooter>
	</Wrapper>
)
