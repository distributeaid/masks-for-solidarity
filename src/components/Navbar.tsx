import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, wideBreakpoint, mediumBreakpoint } from '../settings'
import { withPrefix } from 'gatsby'
import { rgba } from 'polished'
import { fonts } from '../settings'
import { SiteMetaData } from '../templates/types'

import LogoIcon from './logo-colored.svg'
import MenuToggleIcon from 'feather-icons/dist/icons/menu.svg'

const Link = styled.a`
	color: ${rgba(colors.text, 0.6)};
	text-decoration: none;
	font-family: ${fonts.sans.name}, sans-serif;
	font-weight: ${fonts.sans.weights.medium};
	&:hover {
		color: ${colors.text};
	}
`

const LinksContainer = styled.div`
	display: none;
	@media (min-width: ${mediumBreakpoint}) {
		display: block;
		margin-right: 2rem;
		${Link} + ${Link} {
			margin-left: 1rem;
		}
	}
	@media (min-width: ${wideBreakpoint}) {
		${Link} + ${Link} {
			margin-left: 2rem;
		}
		${Link} {
			font-size: 120%;
		}
	}
`

const Nav = styled.nav`
	@media (max-width: ${mediumBreakpoint}) {
		&.toggled {
			${LinksContainer} {
				display: flex;
				flex-direction: column;
				padding: 0 1rem 1rem 1rem;
				${Link} + ${Link} {
					margin-top: 0.5rem;
				}
			}
		}
	}
`

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${wideBreakpoint};
	@media (min-width: ${mediumBreakpoint}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const MenuToggle = styled.button`
	background-color: transparent;
	border: 0;
	color: ${rgba(colors.text, 0.8)};
	width: 48px;
	height: 48px;
	&:hover {
		color: ${colors.text};
	}
	position: absolute;
	top: 10px;
	right: 10px;
	@media (min-width: ${mediumBreakpoint}) {
		display: none;
	}
`

const LogoText = styled.span`
	@media (min-width: ${mediumBreakpoint}) {
		font-size: 20px;
	}
	span {
		&:after {
			content: ' ';
		}
	}
	span:first-child {
		color: ${colors.highlight};
	}
	span:last-child {
		color: ${colors.primary};
	}
	font-weight: ${fonts.serif.weights.regular};
	font-family: ${fonts.serif.name};
`

const Logo = styled.a`
	text-decoration: none;
	padding: 1rem;
	@media (min-width: ${mediumBreakpoint}) {
		padding: 1rem 2rem;
	}
	display: flex;
	flex-direction: row;
	align-items: center;
	svg {
		display: block;
		width: auto;
		height: 32px;
		@media (min-width: ${mediumBreakpoint}) {
			height: 50px;
		}
		margin-right: 0.5rem;
	}
`

export const Navbar = ({
	siteMetaData: { title: siteTitle },
}: {
	siteMetaData: SiteMetaData
}) => {
	const [toggled, setToggled] = useState(false)
	const toggleMenu = () => setToggled((toggled) => !toggled)
	return (
		<Nav className={toggled ? 'toggled' : ''}>
			<Wrapper>
				<Logo href="/" title={'Home'}>
					<LogoIcon title={siteTitle} />
					<LogoText>
						{siteTitle.split(' ').map((s, i) => (
							<span key={i}>{s}</span>
						))}
					</LogoText>
				</Logo>
				<MenuToggle onClick={toggleMenu} title={'Toggle Menu'}>
					<MenuToggleIcon />
				</MenuToggle>
				<LinksContainer>
					<Link href={withPrefix('/#our-story')} onClick={toggleMenu}>
						Our Story
					</Link>
					<Link href={withPrefix('/#about-the-masks')} onClick={toggleMenu}>
						Masks
					</Link>
					<Link href={withPrefix('/#support-us')} onClick={toggleMenu}>
						Donate
					</Link>
					<Link href={withPrefix('/#team')} onClick={toggleMenu}>
						About
					</Link>
					<Link href={withPrefix('/#faq')} onClick={toggleMenu}>
						FAQ
					</Link>
				</LinksContainer>
			</Wrapper>
		</Nav>
	)
}
