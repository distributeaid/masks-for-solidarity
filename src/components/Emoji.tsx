import { withPrefix } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { buttonSizes } from '../settings'

const StyledImg = styled.img``

export const Emoji = ({
	alt,
	code,
	className,
	small,
	...rest
}: React.HTMLAttributes<HTMLImageElement> & {
	alt: string
	code: string
	small?: boolean
}) => (
	<StyledImg
		{...rest}
		alt={alt}
		data-src={withPrefix(`/openmoji-svg-color/${code}.svg`)}
		width={small ? buttonSizes.small : buttonSizes.regular}
		height={small ? buttonSizes.small : buttonSizes.regular}
		className={`lazyload ${className}`}
	/>
)
