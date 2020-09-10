import React from 'react'
import styled from 'styled-components'
import { InputBase } from './Inputs'
import { ButtonBase } from './Buttons'

export const OneLine = styled.div`
	display: flex;
	${InputBase} {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right-width: 0;
		flex-grow: 1;
	}
	${ButtonBase} {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`
