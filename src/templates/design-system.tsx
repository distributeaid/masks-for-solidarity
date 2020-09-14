import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Head } from '../components/Head'
import { fonts, colors, fontSizes, breakpoints, buttonSizes } from '../settings'
import { Content, Micro } from '../design/Content'
import { Accordion } from '../components/Accordion'
import { Button } from '../components/Buttons'
import { Input, Label } from '../components/Inputs'
import { OneLine } from '../components/Forms'
import { Link } from '../components/Links'
import {
	MinusIcon,
	PlusIcon,
	XIcon,
	MenuIcon,
	FacebookIcon,
	LinkedInIcon,
	TwitterIcon,
	EmailIcon,
	CheckCircleIcon,
	AlertTriangleIcon,
	HeartIcon,
	GitHubIcon,
} from '../components/Icons'
import { SiteMetaData } from './types'
import { Offset } from '../components/Offset'
import { Menu } from '../components/Menu'

const Header = styled.header`
	background: #09328b;
	background: radial-gradient(
		farthest-side at bottom right,
		#fff9f1 0%,
		#b493c4 20%,
		#09328b 60%
	);
	padding: 1rem;
	@media (min-width: ${breakpoints.medium}) {
		padding: 2rem;
	}
	color: #fff;
	h1 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: 24px;
		margin-bottom: 1rem;
		opacity: 0.8;
	}
	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
		font-size: 36px;
		text-transform: none;
	}
	h1 + h2 {
		margin-top: 0.5rem;
	}
	position: relative;
	overflow: hidden;
`

const SectionLabel = styled.p`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.light};
	color: #666;
	font-size: 12px;
`

const SubSection = styled.div`
	border-top: 1px solid ${colors.border};
	padding: 1rem 0;
	@media (min-width: ${breakpoints.medium}) {
		padding: 2rem 0;
	}
`

const SectionHeader = styled.h2`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.regular};
	font-size: 24px;
	color: #09328b;
	text-transform: none;
	margin: 1rem;
	@media (min-width: ${breakpoints.medium}) {
		margin: 2rem 2rem 1rem 2rem;
	}
`

const Color = styled.li<{ color: string }>`
	font-family: ${fonts.serif.name};
	color: #666;
	font-size: 12px;
	width: calc((100% / 5) - 2rem);
	:before {
		content: ' ';
		display: block;
		width: 100%;
		padding-bottom: 100%;
		border: 1px solid ${colors.border};
		border-radius: 100%;
		margin-bottom: 1rem;
		background-color: ${(props) => props.color};
	}
	& + & {
		margin-left: 2rem;
	}
`

const Colors = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
`

const Buttons = styled.div`
	width: calc(100% - 2rem);
	&:first-child {
		padding-top: 1rem;
	}
	&:last-child {
		padding-bottom: 1rem;
	}
	@media (min-width: ${breakpoints.medium}) {
		width: calc(100% - 4rem);
	}
	button {
		&:not(:first-child) {
			display: none;
		}
	}
	& + & {
		margin-top: 0;
		padding-top: 0;
	}
	@media (min-width: ${breakpoints.medium}) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 1rem;
		button {
			&:not(:first-child) {
				display: inline-block;
				&.link {
					display: flex;
				}
			}
		}
	}
`

const Icons = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (min-width: 400px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: ${breakpoints.wide}) {
		grid-template-columns: repeat(4, 1fr);
	}
	grid-gap: 20px;
	list-style: none;
	padding: 0;
	svg {
		background-color: ${colors.offsetBackground};
		padding: calc((50px - 24px) / 2) calc((100px - 24px) / 2);
	}
`

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	&:first-child {
		padding-top: 1rem;
	}
	&:last-child {
		padding-bottom: 1rem;
	}
	a.button {
		&:not(:first-child) {
			display: none;
		}
	}
	@media (min-width: ${breakpoints.medium}) {
		a.button {
			&:not(:first-child) {
				display: inline-block;
			}
		}
	}
`

const Form = styled.form`
	& + & {
		margin-top: 1rem;
	}
	&:not(:first-child) {
		display: none;
	}
	@media (min-width: ${breakpoints.wide}) {
		&:not(:first-child) {
			display: block;
		}
	}
	margin: 1rem;
	@media (min-width: ${breakpoints.medium}) {
		margin: 1rem 2rem;
	}
`

const GitHubRibbon = styled.a`
	background-color: #efefef;
	color: #333;
	position: absolute;
	top: -8px;
	right: -142px;
	@media (min-width: ${breakpoints.medium}) {
		top: 20px;
		right: -115px;
	}

	width: 300px;
	padding: 0.5rem;
	text-align: center;
	transform: rotate(45deg);
	border-bottom: 1px solid #505050;
	border-top: 1px solid #505050;
	box-shadow: -2px 2px 15px -4px #000000b8; ;
`

const StyledAccordion = styled(Accordion)`
	@media (min-width: ${breakpoints.medium}) {
		margin: 1rem;
	}
`

const StyledMenu = styled(Menu)`
	@media (min-width: ${breakpoints.medium}) {
		margin: 0 2rem;
	}
`

const Section = styled.section`
	${Content}, ${SectionLabel}, ${Colors}, ${Links}, ${Buttons}, ${StyledAccordion} {
		margin: 1rem;
		@media (min-width: ${breakpoints.medium}) {
			margin: 1rem 2rem;
		}
	}
`

const Cols = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: ${breakpoints.medium}) {
		flex-direction: row;
	}
	${Section} {
		width: 100%;
		@media (min-width: ${breakpoints.medium}) {
			width: calc(50% - 1rem);
		}
	}

	${Section} + ${Section} {
		@media (min-width: ${breakpoints.medium}) {
			margin-left: 2rem;
		}
	}
`

const OneCol = styled.div``
const OneColDesktop = styled.div`
	display: none;
	@media (min-width: ${breakpoints.medium}) {
		display: block;
	}
`

const Ipsum = () => (
	<>
		Bacon ipsum dolor amet swine spare ribs ground round capicola. Corned beef
		capicola pork belly chuck ribeye. Picanha biltong turkey, corned beef beef
		kielbasa kevin chislic chuck tenderloin.{' '}
		<a href="https://wurst.de/" target="_blank" rel="nofollow noreferrer">
			Salami pastrami
		</a>{' '}
		andouille fatback.
	</>
)

const MenuItems = () => (
	<>
		<a href="#">Our Story</a>
		<a href="#" className="current">
			About the masks
		</a>
		<a href="#">Support us</a>
		<a href="#">Get masks</a>
		<a href="#">FAQ</a>
		<a href="#">Who’s involved?</a>
		<a href="#" className="button">
			Donate
		</a>
	</>
)

export const query = graphql`
	query DesignSystemTemplateQuery {
		site {
			siteMetadata {
				gitHubUrl
				title
			}
		}
	}
`

const DesignSystemTemplate = ({
	data: {
		site: { siteMetadata },
	},
}: {
	data: {
		site: {
			siteMetadata: SiteMetaData
		}
	}
}) => (
	<>
		<Head
			siteMetaData={{
				title: 'Dovetail Design System 1.0',
				description:
					'Design-System for Refugees Care. Created by Mai Anh Rainie Nguyễn (https://www.rainiemai.com/) for Distribute Aid (https://distributeaid.org/).',
			}}
		/>
		<Header>
			<h1>Dovetail Design System 1.0</h1>
			<GitHubRibbon
				href={siteMetadata.gitHubUrl}
				target="_blank"
				rel="nofollow noreferrer"
				title="GitHub project for this site"
			>
				<GitHubIcon />
			</GitHubRibbon>
			<h2>Elements</h2>
		</Header>
		<Cols>
			<Section>
				<SectionHeader>Typography</SectionHeader>
				<SubSection>
					<Content>
						<h1>H1 Heading</h1>
					</Content>
					<SectionLabel>
						Header 1 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.h1}/{fontSizes.hero.h1}
					</SectionLabel>
				</SubSection>
				<SubSection>
					<Content>
						<h2>H2 Heading</h2>
					</Content>
					<SectionLabel>
						Header 2 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.h2}/{fontSizes.hero.h2}
					</SectionLabel>
				</SubSection>
				<SubSection>
					<Content>
						<h3>H3 Heading</h3>
					</Content>
					<SectionLabel>
						Header 3 &mdash; {fonts.sans.name} {fonts.sans.weights.medium}{' '}
						(Uppercase) {fontSizes.h3}/{fontSizes.hero.h3}
					</SectionLabel>
				</SubSection>
				<SubSection>
					<Content>
						<p>This is an example of the body text style.</p>
						<p>
							<Ipsum />
						</p>
					</Content>
					<SectionLabel>
						Body &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.text}/{fontSizes.hero.text}
					</SectionLabel>
				</SubSection>
				<Offset>
					<SubSection>
						<Content>
							<p>
								<small>This is an example of the small body text style.</small>
							</p>
							<p>
								<small>
									<Ipsum />
								</small>
							</p>
						</Content>
						<SectionLabel>
							S Body &mdash; {fonts.serif.name} {fonts.serif.weights.light}{' '}
							{fontSizes.small}/{fontSizes.hero.small}
						</SectionLabel>
					</SubSection>
				</Offset>
				<SubSection>
					<Content>
						<Micro>This is an example of the micro text style.</Micro>
						<Micro>
							<Ipsum />
						</Micro>
					</Content>
					<SectionLabel>
						Micro &mdash; {fonts.sans.name} {fonts.sans.weights.regular}{' '}
						{fontSizes.micro}/{fontSizes.hero.micro}
					</SectionLabel>
				</SubSection>
			</Section>
			<Section>
				<SectionHeader>Colors</SectionHeader>
				<SubSection>
					<SectionLabel>Primary palette</SectionLabel>
					<Colors>
						<Color color={colors.primary}>
							Primary
							<br />
							{colors.primary}
						</Color>
						<Color color={colors.secondary}>
							Secondary
							<br />
							{colors.secondary}
						</Color>
						<Color color={colors.highlight}>
							Highlight
							<br />
							{colors.highlight}
						</Color>
					</Colors>
				</SubSection>
				<SubSection>
					<SectionLabel>Neutral Palette</SectionLabel>
					<Colors>
						<Color color={colors.text}>
							Text
							<br />
							{colors.text}
						</Color>
						<Color color={colors.lightText}>
							Light Text
							<br />
							{colors.lightText}
						</Color>
						<Color color={colors.background}>
							BG
							<br />
							{colors.background}
						</Color>
						<Color color={colors.offsetBackground}>
							Offset BG
							<br />
							{colors.offsetBackground}
						</Color>
						<Color color={colors.border}>
							Border
							<br />
							{colors.border}
						</Color>
					</Colors>
				</SubSection>
				<SubSection>
					<SectionLabel>Extended Palette</SectionLabel>
					<Colors>
						<Color color={colors.success}>
							Success
							<br />
							{colors.success}
						</Color>
						<Color color={colors.error}>
							Error
							<br />
							{colors.error}
						</Color>
					</Colors>
				</SubSection>
			</Section>
		</Cols>
		<Header>
			<h2>Components</h2>
		</Header>
		<Cols>
			<Section>
				<SectionHeader>Links</SectionHeader>
				<SubSection>
					<SectionLabel>Primary</SectionLabel>
					<Links>
						<Link href="#">Link</Link>
						<Link href="#" hover>
							Hover
						</Link>
						<Link href="#" active>
							Active
						</Link>
						<Link href="#" focus>
							Focus
						</Link>
						<Link href="#" visited>
							Visited
						</Link>
					</Links>
					<Offset>
						<Links>
							<Link href="#">Link</Link>
							<Link href="#" hover>
								Hover
							</Link>
							<Link href="#" active>
								Active
							</Link>
							<Link href="#" focus>
								Focus
							</Link>
							<Link href="#" visited>
								Visited
							</Link>
						</Links>
					</Offset>
					<SectionLabel>Icon</SectionLabel>
					<Links>
						<Link href="#" title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" hover title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" active title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" focus title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" visited title="Facebook">
							<FacebookIcon />
						</Link>
					</Links>
					<Offset>
						<Links>
							<Link href="#" title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" hover title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" active title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" focus title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" visited title="Facebook">
								<FacebookIcon />
							</Link>
						</Links>
					</Offset>
					<SectionLabel>Secondary</SectionLabel>
					<Links>
						<Link href="#" secondary>
							Link
						</Link>
						<Link href="#" secondary hover>
							Hover
						</Link>
						<Link href="#" secondary active>
							Active
						</Link>
						<Link href="#" secondary focus>
							Focus
						</Link>
						<Link href="#" secondary visited>
							Visited
						</Link>
					</Links>
					<Offset>
						<Links>
							<Link href="#" secondary>
								Link
							</Link>
							<Link href="#" secondary hover>
								Hover
							</Link>
							<Link href="#" secondary active>
								Active
							</Link>
							<Link href="#" secondary focus>
								Focus
							</Link>
							<Link href="#" secondary visited>
								Visited
							</Link>
						</Links>
					</Offset>
					<SectionLabel>Icon (secondary)</SectionLabel>
					<Links>
						<Link href="#" secondary title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" secondary hover title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" secondary active title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" secondary focus title="Facebook">
							<FacebookIcon />
						</Link>
						<Link href="#" secondary visited title="Facebook">
							<FacebookIcon />
						</Link>
					</Links>
					<Offset>
						<Links>
							<Link href="#" secondary title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" secondary hover title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" secondary active title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" secondary focus title="Facebook">
								<FacebookIcon />
							</Link>
							<Link href="#" secondary visited title="Facebook">
								<FacebookIcon />
							</Link>
						</Links>
					</Offset>
					<SectionLabel>Button Regular (${buttonSizes.regular})</SectionLabel>
					<Links>
						<Link href="#" button>
							Primary
						</Link>
						<Link href="#" button hover>
							Hover
						</Link>
						<Link href="#" button active>
							Active
						</Link>
						<Link href="#" button focus>
							Focus
						</Link>
						<Link href="#" button visited>
							Visited
						</Link>
					</Links>
					<Links>
						<Link href="#" button secondary>
							Secondary
						</Link>
						<Link href="#" button secondary hover>
							Hover
						</Link>
						<Link href="#" button secondary active>
							Active
						</Link>
						<Link href="#" button secondary focus>
							Focus
						</Link>
						<Link href="#" button secondary visited>
							Visited
						</Link>
					</Links>
					<Offset>
						<Links>
							<Link href="#" button>
								Primary
							</Link>
							<Link href="#" button hover>
								Hover
							</Link>
							<Link href="#" button active>
								Active
							</Link>
							<Link href="#" button focus>
								Focus
							</Link>
							<Link href="#" button visited>
								Visited
							</Link>
						</Links>
						<Links>
							<Link href="#" button secondary>
								Secondary
							</Link>
							<Link href="#" button secondary hover>
								Hover
							</Link>
							<Link href="#" button secondary active>
								Active
							</Link>
							<Link href="#" button secondary focus>
								Focus
							</Link>
							<Link href="#" button secondary visited>
								Visited
							</Link>
						</Links>
					</Offset>
					<SectionLabel>Button Large (${buttonSizes.large})</SectionLabel>
					<Links>
						<Link href="#" button large>
							Primary
						</Link>
						<Link href="#" button large hover>
							Hover
						</Link>
						<Link href="#" button large active>
							Active
						</Link>
						<Link href="#" button large focus>
							Focus
						</Link>
						<Link href="#" button large visited>
							Visited
						</Link>
					</Links>
					<Links>
						<Link href="#" button large secondary>
							Secondary
						</Link>
						<Link href="#" button large secondary hover>
							Hover
						</Link>
						<Link href="#" button large secondary active>
							Active
						</Link>
						<Link href="#" button large secondary focus>
							Focus
						</Link>
						<Link href="#" button large secondary visited>
							Visited
						</Link>
					</Links>
				</SubSection>
			</Section>
			<Section>
				<SectionHeader>Icons</SectionHeader>
				<SubSection>
					<Icons>
						<li>
							<MinusIcon /> <SectionLabel>Minus</SectionLabel>
						</li>
						<li>
							<PlusIcon /> <SectionLabel>Plus</SectionLabel>
						</li>
						<li>
							<XIcon /> <SectionLabel>X</SectionLabel>
						</li>
						<li>
							<MenuIcon /> <SectionLabel>Menu</SectionLabel>
						</li>
						<li>
							<FacebookIcon /> <SectionLabel>Facebook</SectionLabel>
						</li>
						<li>
							<LinkedInIcon /> <SectionLabel>LinkedIn</SectionLabel>
						</li>
						<li>
							<TwitterIcon /> <SectionLabel>Twitter</SectionLabel>
						</li>
						<li>
							<EmailIcon /> <SectionLabel>Email</SectionLabel>
						</li>
						<li>
							<CheckCircleIcon /> <SectionLabel>CheckCircle</SectionLabel>
						</li>
						<li>
							<AlertTriangleIcon /> <SectionLabel>AlertTriangle</SectionLabel>
						</li>
						<li>
							<HeartIcon /> <SectionLabel>Heart</SectionLabel>
						</li>
						<li>
							<GitHubIcon /> <SectionLabel>Github</SectionLabel>
						</li>
					</Icons>
				</SubSection>
			</Section>
		</Cols>
		<OneCol>
			<Section>
				<SectionHeader>Buttons</SectionHeader>
				<SubSection>
					<SectionLabel>Regular ({buttonSizes.regular})</SectionLabel>
					<Buttons>
						<Button>Primary</Button>
						<Button hover>Hover</Button>
						<Button active>Active</Button>
						<Button disabled>Disabled</Button>
						<Button focus>Focus</Button>
					</Buttons>
					<Buttons>
						<Button secondary>Secondary</Button>
						<Button secondary hover>
							Hover
						</Button>
						<Button secondary active>
							Active
						</Button>
						<Button secondary disabled>
							Disabled
						</Button>
						<Button secondary focus>
							Focus
						</Button>
					</Buttons>
					<Offset>
						<Buttons>
							<Button>Primary</Button>
							<Button hover>Hover</Button>
							<Button active>Active</Button>
							<Button disabled>Disabled</Button>
							<Button focus>Focus</Button>
						</Buttons>
						<Buttons>
							<Button secondary>Secondary</Button>
							<Button secondary hover>
								Hover
							</Button>
							<Button secondary active>
								Active
							</Button>
							<Button secondary disabled>
								Disabled
							</Button>
							<Button secondary focus>
								Focus
							</Button>
						</Buttons>
					</Offset>
					<SectionLabel>Large ({buttonSizes.large})</SectionLabel>
					<Buttons>
						<Button large>Primary</Button>
						<Button large hover>
							Hover
						</Button>
						<Button large active>
							Active
						</Button>
						<Button large disabled>
							Disabled
						</Button>
						<Button large focus>
							Focus
						</Button>
					</Buttons>
					<Buttons>
						<Button secondary large>
							Secondary
						</Button>
						<Button secondary large hover>
							Hover
						</Button>
						<Button secondary large active>
							Active
						</Button>
						<Button secondary large disabled>
							Disabled
						</Button>
						<Button secondary large focus>
							Focus
						</Button>
					</Buttons>
					<SectionLabel>Small ({buttonSizes.small})</SectionLabel>
					<Offset>
						<Buttons>
							<Button small>Primary</Button>
							<Button small hover>
								Hover
							</Button>
							<Button small active>
								Active
							</Button>
							<Button small disabled>
								Disabled
							</Button>
							<Button small focus>
								Focus
							</Button>
						</Buttons>
						<Buttons>
							<Button secondary small>
								Secondary
							</Button>
							<Button secondary small hover>
								Hover
							</Button>
							<Button secondary small active>
								Active
							</Button>
							<Button secondary small disabled>
								Disabled
							</Button>
							<Button secondary small focus>
								Focus
							</Button>
						</Buttons>
					</Offset>
					<SectionLabel>Link</SectionLabel>
					<Buttons>
						<Button link>Link</Button>
						<Button link hover>
							Hover
						</Button>
						<Button link active>
							Active
						</Button>
						<Button link disabled>
							Disabled
						</Button>
						<Button link focus>
							Focus
						</Button>
					</Buttons>
					<Offset>
						<Buttons>
							<Button link>Link</Button>
							<Button link hover>
								Hover
							</Button>
							<Button link active>
								Active
							</Button>
							<Button link disabled>
								Disabled
							</Button>
							<Button link focus>
								Focus
							</Button>
						</Buttons>
					</Offset>
				</SubSection>
			</Section>
		</OneCol>
		<Cols>
			<Section>
				<SectionHeader>Accordion</SectionHeader>
				<SubSection>
					<StyledAccordion title={'Accordion Title'}>
						<p>
							<Ipsum />
						</p>
					</StyledAccordion>
					<StyledAccordion
						title={
							'A very long Accordion Title, as it may be appear in the FAQ (initially expanded)'
						}
						expanded={true}
					>
						<p>
							<Ipsum />
						</p>
					</StyledAccordion>
				</SubSection>
			</Section>
			<Section>
				<SectionHeader>Newsletter Form</SectionHeader>
				<SubSection>
					<Form>
						<OneLine>
							<Input
								id="email1"
								type="email"
								placeholder="yourname@example.com"
							/>
							<Button secondary>Subscribe</Button>
						</OneLine>
						<Label htmlFor="email1">Please provide your email address</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email2"
								type="email"
								placeholder="yourname@example.com"
								defaultValue="janedoe@"
							/>
							<Button secondary>Subscribe</Button>
						</OneLine>
						<Label htmlFor="email2">Please provide your email address</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email-valid"
								type="email"
								placeholder="yourname@example.com"
								defaultValue="janedoe@example.com"
								success
							/>
							<Button secondary>Subscribe</Button>
						</OneLine>
						<Label htmlFor="email-valid" success>
							The email is valid.
						</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email-invalid"
								type="email"
								placeholder="yourname@example.com"
								defaultValue="janedoe@example"
								error
							/>
							<Button secondary>Subscribe</Button>
						</OneLine>
						<Label htmlFor="email-invalid" error>
							The email is not valid.
						</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email3"
								type="email"
								placeholder="yourname@example.com"
								hover
							/>
							<Button hover secondary>
								Subscribe
							</Button>
						</OneLine>
						<Label htmlFor="email3">Please provide your email address</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email4"
								type="email"
								placeholder="yourname@example.com"
								disabled
							/>
							<Button disabled secondary>
								Subscribe
							</Button>
						</OneLine>
						<Label htmlFor="email4">Please provide your email address</Label>
					</Form>
					<Form>
						<OneLine>
							<Input
								id="email5"
								type="email"
								placeholder="yourname@example.com"
								focus
							/>
							<Button focus secondary>
								Subscribe
							</Button>
						</OneLine>
						<Label htmlFor="email5">Please provide your email address</Label>
					</Form>
				</SubSection>
			</Section>
		</Cols>
		<Cols>
			<Section>
				<SectionHeader>Mobile Menu Closed</SectionHeader>
				<SubSection>
					<StyledMenu siteMetaData={siteMetadata} mobile>
						<MenuItems />
					</StyledMenu>
				</SubSection>
			</Section>
			<Section>
				<SectionHeader>Mobile Menu Open</SectionHeader>
				<SubSection>
					<StyledMenu siteMetaData={siteMetadata} mobile expanded>
						<MenuItems />
					</StyledMenu>
				</SubSection>
			</Section>
		</Cols>
		<OneColDesktop>
			<Section>
				<SectionHeader>Desktop Menu</SectionHeader>
				<SubSection>
					<StyledMenu siteMetaData={siteMetadata} desktop>
						<MenuItems />
					</StyledMenu>
				</SubSection>
			</Section>
		</OneColDesktop>
		<footer>
			<Section>
				<SectionLabel>
					Design-System for{' '}
					<a
						href="https://refugees.care/"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Refugees Care
					</a>
					.<br />
					Created by{' '}
					<a
						href="https://www.rainiemai.com/"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Mai Anh Rainie Nguyễn
					</a>{' '}
					for{' '}
					<a
						href="https://distributeaid.org/"
						target="_blank"
						rel="nofollow noreferrer"
					>
						Distribute Aid
					</a>
					.
				</SectionLabel>
			</Section>
		</footer>
	</>
)

export default DesignSystemTemplate
