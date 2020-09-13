import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, fontSizes } from '../settings'
import { PlusIcon, MinusIcon } from './Icons'

const Container = styled.section`
	border: 0;
	border-top: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	font-size: ${fontSizes.text};
	& + & {
		border-top: none;
	}
`

const Title = styled.div`
	color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
`

const OpenTitle = styled(Title)`
	padding-bottom: 0;
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
				<>
					<OpenTitle onClick={() => setOpen((o) => !o)}>
						{title}
						<Button title="Expand">
							<MinusIcon />
						</Button>
					</OpenTitle>
					{children}
				</>
			)}
			{!open && (
				<Title onClick={() => setOpen((o) => !o)}>
					{title}
					<Button title="Collapse">
						<PlusIcon />
					</Button>
				</Title>
			)}
		</Container>
	)
}
