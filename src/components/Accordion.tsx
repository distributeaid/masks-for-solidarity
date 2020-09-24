import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoints, colors, responsiveFontSize } from '../settings'
import { PlusIcon, MinusIcon } from './Icons'

const Container = styled.section`
	border: 0;
	border-top: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	${responsiveFontSize.text()};
	& + & {
		border-top: none;
	}
`

const Title = styled.div`
	color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`

const OpenTitle = styled(Title)`
	padding: 1rem 1rem 0 1rem;
`

const Wrapper = styled.div`
	@media (min-width: ${breakpoints.mediumPx}) {
		padding-left: 50%;
	}
`

const Button = styled.button`
	border: 0;
	background-color: transparent;
	color: ${colors.primary};
`
export const Accordion = ({
	title,
	expanded,
	children,
	className,
}: React.PropsWithChildren<{
	title: string
	expanded?: boolean
	className?: string
}>) => {
	const [open, setOpen] = useState(expanded ?? false)
	return (
		<Container className={className}>
			{open && (
				<Wrapper>
					<OpenTitle onClick={() => setOpen((o) => !o)}>
						{title}
						<Button title="Expand">
							<MinusIcon />
						</Button>
					</OpenTitle>
					{children}
				</Wrapper>
			)}
			{!open && (
				<Wrapper>
					<Title onClick={() => setOpen((o) => !o)}>
						{title}
						<Button title="Collapse">
							<PlusIcon />
						</Button>
					</Title>
				</Wrapper>
			)}
		</Container>
	)
}
