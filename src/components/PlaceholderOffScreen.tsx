import React, { useRef, useState } from 'react'

const isInViewport = (elem: HTMLElement) => {
	const bounding = elem.getBoundingClientRect()
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	)
}

/**
 * Use this component to show the child only if it is visible on the screen.
 */
export const PlaceholderOffScreen = ({
	children,
}: {
	children: (visible: boolean) => React.ReactElement
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(
		ref.current !== null ? isInViewport(ref.current) : false,
	)

	document.onscroll = () => {
		if (ref.current !== null && !isVisible) {
			setIsVisible(isInViewport(ref.current))
		}
	}

	return <div ref={ref}>{children(isVisible)}</div>
}
