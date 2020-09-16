import React, { useState } from 'react'
import { OneLine } from './Forms'
import { Input, Label } from './Inputs'
import { Button } from './Buttons'

export const NewsletterSubscribeForm = () => {
	const [email, setEmail] = useState('')
	const emailIsValid = /.+@.+\..+/.test(email)
	return (
		<form
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
			<p>Subscribe to our newsletter to stay up to date:</p>
			<OneLine>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="yourname@example.com"
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
				/>
				<Button secondary disabled={!emailIsValid}>
					Subscribe
				</Button>
			</OneLine>
			<Label htmlFor="email">Please provide your email address</Label>
			<input type="hidden" value="1" name="embed" />
		</form>
	)
}
