import type { FC, SVGProps } from 'react'
import React from 'react'

export const IconPrev: FC<SVGProps<SVGPathElement>> = ({
	className,
	strokeWidth = 2,
}) => {
	return (
		<svg
			className={className}
			width='10'
			height='14'
			viewBox='0 0 10 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.49988 0.750001L2.24988 7L8.49988 13.25'
				stroke='currentColor'
				stroke-width={strokeWidth}
			/>
		</svg>
	)
}
