import styled from 'styled-components'

export const Placeholder = styled.div<{ height: number }>`
	height: ${(props) => props.height}px;
	width: 100%;
	border-radius: 5px;
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
