import React from 'react'
import styled from 'styled-components'
import { Head } from '../components/Head'
import { fonts, colors, fontSizes, breakpoints, buttonSizes } from '../settings'
import { Content, Micro } from '../design/Content'
import { Accordion } from '../components/Accordion'
import { Button } from '../components/Buttons'

const Header = styled.header`
	background-color: #9a7900;
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
`

const Section = styled.section``

const SubSection = styled.div`
	border-top: 1px solid ${colors.border};
	padding: 1rem 0;
	@media (min-width: ${breakpoints.medium}) {
		padding: 2rem 0;
	}
`

const Cols = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: ${breakpoints.medium}) {
		flex-direction: row;
	}
	${Section} {
		width: calc(100% - 2rem);
		margin: 1rem;
		@media (min-width: ${breakpoints.medium}) {
			width: calc(50% - 4rem);
			margin: 2rem;
		}
	}
`

const OneCol = styled.div`
	${Section} {
		width: calc(100% - 2rem);
		margin: 1rem;
		@media (min-width: ${breakpoints.medium}) {
			width: calc(100% - 4rem);
			margin: 2rem;
		}
	}
`

const Footer = styled.footer`
	padding: 1rem;
	@media (min-width: ${breakpoints.medium}) {
		padding: 2rem;
	}
`

const Label = styled.p`
	font-family: ${fonts.serif.name};
	color: #6f6f6f;
	font-size: 12px;
`

const SectionHeader = styled.h2`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.regular};
	font-size: 24px;
	color: #9a7900;
	text-transform: none;
`

const Color = styled.li<{ color: string }>`
	font-family: ${fonts.serif.name};
	color: #6f6f6f;
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
	width: 100%;
	button {
		width: 100%;
		&:not(:first-child) {
			display: none;
		}
	}
	& + & {
		margin-top: 1rem;
	}
	@media (min-width: ${breakpoints.medium}) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 1rem;
		button {
			&:not(:first-child) {
				display: inline-block;
			}
		}
	}
`

const ipsum = `Bacon ipsum dolor amet swine spare ribs ground round capicola.
Corned beef capicola pork belly chuck ribeye. Picanha biltong
turkey, corned beef beef kielbasa kevin chislic chuck
tenderloin. Salami pastrami andouille fatback.`

const DesignSystemTemplate = () => (
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
			<h2>Elements</h2>
		</Header>
		<Cols>
			<Section>
				<SectionHeader>Typography</SectionHeader>
				<SubSection>
					<Content>
						<h1>H1 Heading</h1>
					</Content>
					<Label>
						Header 1 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.h1}/{fontSizes.hero.h1}
					</Label>
				</SubSection>
				<SubSection>
					<Content>
						<h2>H2 Heading</h2>
					</Content>
					<Label>
						Header 2 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.h2}/{fontSizes.hero.h2}
					</Label>
				</SubSection>
				<SubSection>
					<Content>
						<h3>H3 Heading</h3>
					</Content>
					<Label>
						Header 3 &mdash; {fonts.sans.name} {fonts.sans.weights.medium}{' '}
						(Uppercase) {fontSizes.h3}/{fontSizes.hero.h3}
					</Label>
				</SubSection>
				<SubSection>
					<Content>
						<p>This is an example of the body text style.</p>
						<p>{ipsum}</p>
					</Content>
					<Label>
						Body &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
						{fontSizes.text}/{fontSizes.hero.text}
					</Label>
				</SubSection>
				<SubSection>
					<Content>
						<p>
							<>This is an example of the small body text style.</>
						</p>
						<p>
							<>{ipsum}</>
						</p>
					</Content>
					<Label>
						S Body &mdash; {fonts.serif.name} {fonts.serif.weights.light}{' '}
						{fontSizes.small}/{fontSizes.hero.small}
					</Label>
				</SubSection>
				<SubSection>
					<Content>
						<Micro>This is an example of the micro text style.</Micro>
						<Micro>{ipsum}</Micro>
					</Content>
					<Label>
						Micro &mdash; {fonts.sans.name} {fonts.sans.weights.regular}{' '}
						{fontSizes.micro}/{fontSizes.hero.micro}
					</Label>
				</SubSection>
			</Section>
			<Section>
				<SectionHeader>Colors</SectionHeader>
				<SubSection>
					<Label>Primary palette</Label>
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
					<Label>Neutral Palette</Label>
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
					<Label>Extended Palette</Label>
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
				<SectionHeader>Accordion</SectionHeader>
				<Accordion title={'Accordion Title'}>
					<p>{ipsum}</p>
				</Accordion>
				<Accordion
					title={
						'A very long Accordion Title, as it may be appear in the FAQ (initially expanded)'
					}
					expanded={true}
				>
					<p>{ipsum}</p>
				</Accordion>
			</Section>
		</Cols>
		<OneCol>
			<Section>
				<SectionHeader>Buttons</SectionHeader>
				<SubSection>
					<Label>Regular ({buttonSizes.regular})</Label>
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
				</SubSection>
				<SubSection>
					<Label>Large ({buttonSizes.large})</Label>
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
				</SubSection>
				<SubSection>
					<Label>Small ({buttonSizes.small})</Label>
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
				</SubSection>
			</Section>
		</OneCol>
		<Footer>
			<Section>
				<Label>
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
				</Label>
			</Section>
		</Footer>
	</>
)

export default DesignSystemTemplate
