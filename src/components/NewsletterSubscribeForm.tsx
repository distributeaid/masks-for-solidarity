import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../settings'

const Form = styled.form`
	margin-top: 2rem;
	@media (min-width: ${breakpoints.medium}) {
		border: 1px dotted ${colors.text};
		padding: 1rem;
		margin: 0;
	}
`
const Input = styled.input`
	height: 42px;
	border: 2px solid inherit;
	padding: 0 1rem;
`
const Button = styled.button`
	border: 2px solid ${colors.highlight};
	background-color: transparent;
	color: ${colors.highlight};
	padding: 0 1rem;
	height: 48px;
	&:hover {
		border-color: ${colors.background};
		color: ${colors.background};
	}
	&:disabled {
		color: ${colors.text};
		border-color: ${colors.text};
		opacity: 0.75;
	}
`
const InputWithButton = styled.div`
	display: flex;
	flex-direction: column;
	${Input} {
		width: calc(100% - 2rem - 4px);
	}
	${Button} {
		width: 100%;
	}
	${Input} + ${Button} {
		margin-top: 0.5rem;
	}
	@media (min-width: ${breakpoints.medium}) {
		flex-direction: row;
		${Input} {
			width: 100%;
		}
		${Button} {
			max-width: 200px;
		}
		${Input} + ${Button} {
			margin-left: 1rem;
			margin-top: 0;
		}
	}
`
const P = styled.p`
	margin: 0 0 1rem 0;
`

export const NewsletterSubscribeForm = () => {
	const [email, setEmail] = useState('')
	const emailIsValid = /.+@.+\..+/.test(email)
	return (
		<Form
			action={'https://tinyletter.com/refugees-care'}
			method="post"
			target="popupwindow"
			onSubmit={() => {
				window.open(
					'https://tinyletter.com/refugees-care',
					'popupwindow',
					'scrollbars=yes,width=800,height=600',
				)
				return true
			}}
		>
			<P>
				<label htmlFor="tlemail">
					Subscribe to our newsletter to stay up to date:
				</label>
			</P>
			<InputWithButton>
				<Input
					type="email"
					name="email"
					id="tlemail"
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
					placeholder={'Your email, e.g. "alex@example.com"'}
				/>
				<Button type="submit" disabled={!emailIsValid}>
					Subscribe
				</Button>
			</InputWithButton>
			<input type="hidden" value="1" name="embed" />
		</Form>
	)
}
