import React from 'react'
import styled from 'styled-components'
import { colors, fonts, buttonSizes, responsiveFontSize } from '../settings'
import { mix } from 'polished'
import { classNames } from '../util/classNames'
import { CheckCircleIcon, AlertTriangleIcon } from './Icons'

export const InputBase = styled.input`
	font-family: ${fonts.serif.name};
	font-weight: ${fonts.serif.weights.regular};
	border: 1px solid ${colors.lightText};

	overflow: hidden;

	height: calc(${buttonSizes.regular} - 2px);
	border-radius: ${buttonSizes.regular};
	padding: 0 0 0 calc(${buttonSizes.regular} / 2);

	background-color: ${colors.background};
	color: ${colors.text};
	::placeholder {
		color: ${colors.lightText};
	}

	&:hover,
	&.hover {
		color: ${mix(0.25, '#fff', colors.text)};
		::placeholder {
			color: ${mix(0.25, '#fff', colors.lightText)};
		}
		border-color: ${mix(0.25, '#fff', colors.lightText)};
	}

	&:focus,
	&.focus {
		outline: 2px solid ${colors.text};
		-moz-outline-radius: ${buttonSizes.regular};
	}

	&:disabled,
	&.disabled {
		background-color: ${colors.background};
		border-color: ${colors.offsetBackground};
		color: ${mix(0.5, '#fff', colors.lightText)};
		::placeholder {
			color: ${mix(0.5, '#fff', colors.lightText)};
		}
	}

	&.success {
		border-color: ${colors.success};
	}

	&.error {
		border-color: ${colors.error};
	}
`

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	hover?: boolean
	active?: boolean
	focus?: boolean
	success?: boolean
	error?: boolean
}

export const Input = ({
	hover,
	focus,
	success,
	error,
	...rest
}: InputProps) => (
	<InputBase
		className={classNames({ hover, focus, success, error })}
		{...rest}
	/>
)

const LabelBase = styled.label`
	display: flex;
	align-items: center;
	font-family: ${fonts.sans.name};
	font-weight: ${fonts.sans.weights.regular};
	${responsiveFontSize.micro()};
	color: ${colors.lightText};
	margin-left: calc(${buttonSizes.regular} / 2);
	&.success {
		color: ${colors.success};
	}
	&.error {
		color: ${colors.error};
	}
	svg {
		${responsiveFontSize.micro('width')};
		${responsiveFontSize.micro('height')};
		margin-right: 0.25rem;
	}
`

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
	success?: boolean
	error?: boolean
}
export const Label = ({ children, success, error, ...rest }: LabelProps) => (
	<LabelBase className={classNames({ success, error })} {...rest}>
		{success === true && <CheckCircleIcon />}
		{error === true && <AlertTriangleIcon />}
		{children}
	</LabelBase>
)
