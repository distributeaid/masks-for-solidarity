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
import { Link } from '../StyledLinks'

import LogoIcon from '../logo-colored.svg'
import { SiteMetaData } from '../../templates/types'
import { Button } from '../Buttons'

const Nav = styled.nav`
	background-color: ${colors.offsetBackground};
	display: flex;
	justify-content: space-between;
	height: ${menuHeight};
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

const Links = styled.div`
	display: none;
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
	expanded,
	className,
	siteMetaData: { title: siteTitle },
}: React.PropsWithChildren<{
	desktop?: boolean
	expanded?: boolean
	className?: string
	siteMetaData: SiteMetaData
}>) => {
	const [open, setOpen] = useState(expanded ?? false)
	return (
		<Nav className={className}>
			<Logo href="/" title={'Home'}>
				<LogoIcon title={siteTitle} />
				<LogoText>
					{siteTitle.split(' ').map((s, i) => (
						<span key={i}>{s}</span>
					))}
				</LogoText>
			</Logo>
			<Links>
				<Link>Our Story</Link>
				<Link>About the masks</Link>
				<Link>Support us</Link>
				<Link>Get masks</Link>
				<Link>FAQ</Link>
				<Link>Who’s involved?</Link>
				<Link button>Donate</Link>
			</Links>
			{!open && <ShowMenu onClick={() => setOpen(true)} />}
			{open && <CloseMenu onClick={() => setOpen(false)} />}
		</Nav>
	)
}
