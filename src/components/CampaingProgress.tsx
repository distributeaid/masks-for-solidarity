import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../settings'
import { Placeholder } from './Placeholder'

const height = 32

const ProgressBarContainer = styled.div<{ height: number }>`
	height: ${(props) => props.height}px;
	border-radius: ${(props) => props.height}px;
	background-color: ${colors.background};
	overflow: hidden;
`

const ProgressBarBar = styled.div<{ height: number }>`
	background-color: ${colors.secondary};
	min-width: 1px;
	height: 100%;
`

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	flex-direction: row;
	align-items: center;
	${ProgressBarContainer} {
		grid-column-start: 1;
		grid-column-end: 3;
	}
	line-height: 150%;
`

const Info = styled.span`
	color: ${colors.lightText};
	text-align: center;
	font-family: ${fonts.headline.name};
	font-weight: ${fonts.headline.weights.default};
	text-transform: uppercase;
	span {
		color: ${colors.text};
		font-family: ${fonts.text.name};
		font-weight: ${fonts.text.weights.default};
	}
`

const isSSR = typeof window === 'undefined'

const ProgressBar = ({ progress }: { progress: number }) => {
	return (
		<ProgressBarContainer height={height}>
			<ProgressBarBar
				height={height}
				style={{ width: `${Math.round(progress * 100)}%` }}
			/>
		</ProgressBarContainer>
	)
}

const currencyFormatter = isSSR
	? { format: (n: number) => n }
	: new Intl.NumberFormat(navigator.language, {
			style: 'decimal',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
	  })

export const CampaignProgress = () => {
	const [progress, setProgress] = useState<{
		raised: number
		goal: number
		donations: number
	}>()
	useEffect(() => {
		if (isSSR) {
			setProgress({ raised: 3, goal: 15000, donations: 2 })
			return
		}
		let isCancelled = false
		setTimeout(() => {
			void fetch(
				'https://distributeaid.github.io/donorbox-campaign-scraper/progress.json',
			)
				.then(async (res) => res.json())
				.then((p) => {
					if (!isCancelled) {
						setProgress(p)
					}
				})
		}, 1000)

		return () => {
			isCancelled = true
		}
	}, [isSSR])
	if (progress === undefined) return <Placeholder height={98} />
	const percentage = progress.raised / progress.goal
	return (
		<Container>
			<ProgressBar progress={percentage} />
			<Info>
				Amount Raised:
				<br />
				<span>
					US$<strong>{currencyFormatter.format(progress.raised)}</strong>
				</span>
			</Info>
			<Info>
				Our Goal:
				<br />
				<span>
					US$<strong>{currencyFormatter.format(progress.goal)}</strong>
				</span>
			</Info>
		</Container>
	)
}
