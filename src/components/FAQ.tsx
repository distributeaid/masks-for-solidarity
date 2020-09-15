import React, { useState } from 'react'
import styled from 'styled-components'
import { Page } from '../templates/types'
import * as rehypeReact from 'rehype-react'
import { Section } from './Section'
import { Content } from './Content'
import { breakpoints } from '../settings'

import PlusIcon from 'feather-icons/dist/icons/plus-circle.svg'
import MinusIcon from 'feather-icons/dist/icons/minus-circle.svg'

const P = styled.p``
const Button = styled.button`
	background-color: transparent;
	padding: 0;
	border: 0;
	color: inherit;
	margin-left: 0.5rem;
	@media (min-width: ${breakpoints.medium}) {
		display: none;
	}
`
const OpenTitle = styled.h2`
	display: flex;
	justify-content: space-between;
	font-size: 100%;
	text-align: left !important;
	text-transform: none !important;
`
const ClosedTitle = styled(OpenTitle)`
	@media (max-width: ${breakpoints.medium}) {
		&
			+ ${P},
			&
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P},
			&
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P}
			+ ${P} {
			display: none;
		}
	}
`

const Toggle = ({ children }: { children?: React.ReactNode }) => {
	const [toggled, setToggled] = useState(false)
	if (toggled)
		return (
			<OpenTitle onClick={() => setToggled((toggled) => !toggled)}>
				{children}
				<Button title="Click to reduce">
					<MinusIcon />
				</Button>
			</OpenTitle>
		)
	return (
		<ClosedTitle onClick={() => setToggled((toggled) => !toggled)}>
			{children}
			<Button title="Click to expand">
				<PlusIcon />
			</Button>
		</ClosedTitle>
	)
}

const renderAst = new rehypeReact({
	createElement: React.createElement,
	components: {
		h2: Toggle,
		p: P,
	},
}).Compiler

export const FAQ = ({ content }: { content: Page }) => (
	<Section>
		<Content>
			<h1>{content.remark.frontmatter.title}</h1>
			{renderAst(content.remark.htmlAst)}
		</Content>
	</Section>
)
