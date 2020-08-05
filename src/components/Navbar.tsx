import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, wideBreakpoint, mediumBreakpoint } from '../settings'

import LogoIcon from './logo-colored.svg'
import LogoIconWide from './logo-colored-wide.svg'
import MenuToggleIcon from 'feather-icons/dist/icons/menu.svg'

const StyledLogoIcon = styled(LogoIcon)`
	display: none;
	@media (min-width: ${mediumBreakpoint}) {
		display: block;
		width: auto;
		height: 50px;
		padding: 1rem 2rem;
	}
	@media (min-width: ${wideBreakpoint}) {
		height: 60px;
		padding: 2rem;
	}
`

const StyledLogoIconWide = styled(LogoIconWide)`
	display: block;
	height: 35px;
	padding: 1rem;
	width: auto;
	@media (min-width: ${mediumBreakpoint}) {
		display: none;
	}
`

const Link = styled.a`
	color: #ffffffcc;
	text-decoration: none;
	font-family: Montserrat, sans-serif;
	font-weight: 500;
	&:hover {
		color: white;
	}
`

const DonateButton = styled(Link)`
	font-weight: 700;
	color: ${colors.bossOrange};
	&:hover {
		color: white;
	}
	@media (min-width: ${mediumBreakpoint}) {
		border: 1.5px solid ${colors.bossOrange}cc;
		padding: 0.75rem;
		&:hover {
			border-color: white;
		}
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
	background-color: ${colors.maskDarkGreen};
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
	margin-right: 1rem;
	color: #ffffffcc;
	&:hover {
		color: white;
	}
	position: absolute;
	top: 1rem;
	right: 1rem;
	@media (min-width: ${mediumBreakpoint}) {
		display: none;
	}
`

export const Navbar = () => {
	const [toggled, setToggled] = useState(false)
	const toggleMenu = () => setToggled((toggled) => !toggled)
	return (
		<Nav className={toggled ? 'toggled' : ''}>
			<Wrapper>
				<a href="/" title={'Home'}>
					<StyledLogoIcon title={'Masks for Humanity'} />
					<StyledLogoIconWide title={'Masks for Humanity'} />
				</a>
				<MenuToggle onClick={toggleMenu} title={'Toggle Menu'}>
					<MenuToggleIcon />
				</MenuToggle>
				<LinksContainer>
					<Link href="#" onClick={toggleMenu}>
						Makers
					</Link>
					<Link href="#" onClick={toggleMenu}>
						Masks
					</Link>
					<Link href="#" onClick={toggleMenu}>
						FAQ
					</Link>
					<Link href="#" onClick={toggleMenu}>
						About
					</Link>
					<DonateButton href="#" onClick={toggleMenu}>
						Buy &amp; Donate
					</DonateButton>
				</LinksContainer>
			</Wrapper>
		</Nav>
	)
}
