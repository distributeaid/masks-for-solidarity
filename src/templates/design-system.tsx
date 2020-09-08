import React from 'react'
import styled from 'styled-components'
import { Head } from '../components/Head'
import { fonts, colors, fontSizes, breakpoints } from '../settings'
import { Content, Micro } from '../design/Content'

const Header = styled.header`
	background-color: #9a7900;
	padding: 2rem;
	color: #fff;
	h1 {
		font-family: ${fonts.serif.name};
		font-weight: ${fonts.serif.weights.regular};
		font-size: 24px;
		margin-bottom: 0;
		opacity: 0.8;
	}
	h2 {
		margin-top: 0.5rem;
		font-family: ${fonts.sans.name};
		font-weight: ${fonts.sans.weights.medium};
		font-size: 36px;
		text-transform: none;
	}
`

const Section = styled.section`
	div {
		border-top: 1px solid #6f6f6f33;
		padding: 2rem 0;
	}
	padding: 2rem;
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
			width: 50%;
		}
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
	:before {
		content: ' ';
		display: block;
		height: 50px;
		width: 50px;
		@media (min-width: ${breakpoints.wide}) {
			height: 100px;
			width: 100px;
		}
		border: 1px solid #6f6f6f33;
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
				<Content>
					<h1>H1 Heading</h1>
				</Content>
				<Label>
					Header 1 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
					{fontSizes.h1}/{fontSizes.hero.h1}
				</Label>
				<Content>
					<h2>H2 Heading</h2>
				</Content>
				<Label>
					Header 2 &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
					{fontSizes.h2}/{fontSizes.hero.h2}
				</Label>
				<Content>
					<h3>H3 Heading</h3>
				</Content>
				<Label>
					Header 3 &mdash; {fonts.sans.name} {fonts.sans.weights.medium}{' '}
					(Uppercase) {fontSizes.h3}/{fontSizes.hero.h3}
				</Label>
				<Content>
					<p>This is an example of the body text style.</p>
				</Content>
				<Label>
					Body &mdash; {fonts.serif.name} {fonts.serif.weights.regular}{' '}
					{fontSizes.text}/{fontSizes.hero.text}
				</Label>
				<Content>
					<p>
						<small>This is an example of the small body text style.</small>
					</p>
				</Content>
				<Label>
					S Body &mdash; {fonts.serif.name} {fonts.serif.weights.light}{' '}
					{fontSizes.small}/{fontSizes.hero.small}
				</Label>
				<Content>
					<Micro>This is an example of the micro text style.</Micro>
				</Content>
				<Label>
					Micro &mdash; {fonts.sans.name} {fonts.sans.weights.regular}{' '}
					{fontSizes.micro}/{fontSizes.hero.micro}
				</Label>
			</Section>
			<Section>
				<SectionHeader>Colors</SectionHeader>
				<div>
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
				</div>
				<div>
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
							Background
							<br />
							{colors.background}
						</Color>
						<Color color={colors.offsetBackground}>
							Offset BG
							<br />
							{colors.offsetBackground}
						</Color>
					</Colors>
				</div>
				<div>
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
				</div>
			</Section>
		</Cols>
		<footer>
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
		</footer>
	</>
)

export default DesignSystemTemplate
