import React, { useState } from 'react'
import styled from 'styled-components'
import { Page } from '../templates/types'
import * as rehypeReact from 'rehype-react'
import { Section } from './Main'
import { Markdown } from '../components/Main'
import { mediumBreakpoint } from '../settings'

import PlusIcon from 'feather-icons/dist/icons/plus-circle.svg'
import MinusIcon from 'feather-icons/dist/icons/minus-circle.svg'

const P = styled.p``
const Button = styled.button`
	background-color: transparent;
	padding: 0;
	border: 0;
	color: inherit;
	@media (min-width: ${mediumBreakpoint}) {
		display: none;
	}
`
const OpenTitle = styled.h2`
	display: flex;
	justify-content: space-between;
	font-size: 100%;
`
const ClosedTitle = styled(OpenTitle)`
	@media (max-width: ${mediumBreakpoint}) {
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
		<h1>{content.remark.frontmatter.title}</h1>
		<Markdown>{renderAst(content.remark.htmlAst)}</Markdown>
	</Section>
)
