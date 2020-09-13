import React, { useState } from 'react'
import styled from 'styled-components'
import {
	colors,
	fontSizes,
	fonts,
	breakpoints,
	menuHeight,
} from '../../settings'
import { MenuIcon, XIcon } from '../Icons'
import { rgba } from 'polished'
import { SiteMetaData } from '../../templates/types'
import { Button } from '../Buttons'

import LogoIcon from '../logo-colored.svg'
import { classNames } from '../../util/classNames'

const NavBar = styled.div`
	background-color: ${colors.offsetBackground};
	height: ${menuHeight};
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: ${breakpoints.wide};
	margin: 0 auto;
`

const LogoText = styled.span`
	font-size: ${fontSizes.text};
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
	@media (min-width: ${breakpoints.medium}) {
		padding: 1rem 2rem;
	}
	display: flex;
	flex-direction: row;
	align-items: center;
	svg {
		display: block;
		width: auto;
		height: 30px;
		margin-right: 0.5rem;
	}
`

const Links = styled.nav``

const MobileNavigation = styled.nav`
	background-color: ${rgba(colors.offsetBackground, 0.9)};
	${Links} {
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		a:not(.button) {
			font-size: ${fontSizes.h2};
			color: ${colors.text};
			text-decoration: none;
			font-weight: ${fonts.serif.weights.regular};
			margin: 0.5rem 0;
			padding: 0 0 0.5rem 0;
			&:hover,
			&.hover,
			&.current {
				font-weight: ${fonts.serif.weights.bold};
			}
			&.current {
				border-bottom: 4px solid ${colors.highlight};
			}
		}
		a.button {
			margin-top: 2rem;
		}
	}
`

const DesktopNavigation = styled.nav`
	${Links} {
		display: flex;
		align-items: center;
		height: ${menuHeight};
		a:not(.button) {
			margin: 0 0.5rem;
			height: calc(${menuHeight} - 8px);
			line-height: calc(${menuHeight} - 8px);
			color: ${colors.text};
			text-decoration: none;
			font-weight: ${fonts.serif.weights.regular};
			border-bottom: 4px solid transparent;
			border-top: 4px solid transparent;
			&:hover,
			&.hover,
			&.current {
				font-weight: ${fonts.serif.weights.bold};
			}
			&.current {
				border-bottom: 4px solid ${colors.highlight};
			}
		}
		a.button {
			margin: 0 2rem;
			height: calc(${menuHeight} * 0.6);
			line-height: calc(${menuHeight} * 0.6);
			padding: 0 calc(${menuHeight} * 0.6);
		}
	}
`

const LinkButton = ({
	children,
	...rest
}: React.PropsWithChildren<HTMLButtonElement>) => (
	<Button link {...rest}>
		{children}
	</Button>
)

const MenuButton = styled(LinkButton)`
	margin: 1rem;
	padding: 1rem;
	svg {
		margin-left: 0.5rem;
	}
`

const Container = styled.div`
	${DesktopNavigation} {
		display: none;
	}
	@media (min-width: ${breakpoints.medium}) {
		&:not(.mobile) {
			${DesktopNavigation} {
				display: block;
			}
			${MenuButton} {
				display: none;
			}
		}
	}
`

const ShowMenu = (props: any) => (
	<MenuButton {...props}>
		Menu
		<MenuIcon />
	</MenuButton>
)

const CloseMenu = (props: any) => (
	<MenuButton {...props}>
		Close
		<XIcon />
	</MenuButton>
)

export const Menu = ({
	desktop,
	mobile,
	expanded,
	className,
	siteMetaData: { title: siteTitle },
	children,
}: React.PropsWithChildren<{
	desktop?: boolean
	mobile?: boolean
	expanded?: boolean
	className?: string
	siteMetaData: SiteMetaData
}>) => {
	const [open, setOpen] = useState(expanded === true ?? false)
	return (
		<Container className={`${className} ${classNames({ desktop, mobile })}`}>
			<NavBar>
				<Wrapper>
					<Logo href="/" title={'Home'}>
						<LogoIcon />
						<LogoText>
							{siteTitle.split(' ').map((s, i) => (
								<span key={i}>{s}</span>
							))}
						</LogoText>
					</Logo>
					<DesktopNavigation>
						<Links>{children}</Links>
					</DesktopNavigation>
					{!open && <ShowMenu onClick={() => setOpen(true)} />}
					{open && <CloseMenu onClick={() => setOpen(false)} />}
				</Wrapper>
			</NavBar>
			{open && (
				<MobileNavigation>
					<Links>{children}</Links>
				</MobileNavigation>
			)}
		</Container>
	)
}
