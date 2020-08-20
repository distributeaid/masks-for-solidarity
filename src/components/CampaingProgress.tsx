import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../settings'
import { darken } from 'polished'

const height = 20

const ProgressBarContainer = styled.div<{ height: number }>`
	height: ${(props) => props.height - 4}px;
	border: 2px solid ${darken(0.25, colors.bossOrange)};
	margin: 0 1rem;
`

const ProgressBarBar = styled.div`
	background-color: ${colors.bossOrange};
	min-width: 1px;
	height: 100%;
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	${ProgressBarContainer} {
		flex-grow: 1;
	}
	span {
		flex-grow: 0;
	}
`

const Placeholder = styled.div<{ height: number }>`
	height: ${(props) => props.height}px;
	width: 100%;
	border-radius: ${(props) => props.height / 2}px;
	@keyframes colorchange {
		0% {
			background-color: #ffffff10;
		}
		50% {
			background-color: #ffffff30;
		}
		100% {
			background-color: #ffffff10;
		}
	}
	animation: colorchange 2s linear 0s infinite;
`

const isSSR = typeof window === 'undefined'

const ProgressBar = ({ progress }: { progress: number }) => {
	return (
		<ProgressBarContainer height={height}>
			<ProgressBarBar style={{ width: `${Math.round(progress * 100)}%` }} />
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
	if (progress === undefined) return <Placeholder height={height} />
	const percentage = progress.raised / progress.goal
	return (
		<Container>
			<span>
				Raised: US$
				<strong>{currencyFormatter.format(progress.raised)}</strong>
			</span>
			<ProgressBar progress={percentage} />
			<span>
				Goal: US$
				<strong>{currencyFormatter.format(progress.goal)}</strong>
			</span>
		</Container>
	)
}
