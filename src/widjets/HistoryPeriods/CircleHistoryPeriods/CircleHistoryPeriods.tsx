import { DefaultButton } from '@/shared/ui-kit/DefaultButton'
import clsx from 'clsx'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import './circleHistoryPeriods.scss'

interface ICircleHistoryPeriodsProps {
	className?: string
	items: { title: string; id: number }[]
	idActiveItem: number
	setState: (id: number) => void
}

export const CircleHistoryPeriods: FC<ICircleHistoryPeriodsProps> = ({
	className,
	items,
	setState,
	idActiveItem,
}) => {
	const parentRef = useRef<HTMLDivElement>(null)
	const [isParentRef, setIsParentRef] = useState(false)
	useEffect(() => {
		if (parentRef.current) {
			setIsParentRef(true)
		}
		return () => {}
	}, [])
	return (
		<div className={clsx(className, 'circle-history')} ref={parentRef}>
			{isParentRef &&
				items.map(({ id, title }, i) => {
					if (!parentRef.current) return
					let x = 0
					let y = 0

					const radius = parentRef.current.offsetWidth / 2
					const center = radius

					const childCount = items.length
					const offset = 28

					const angle = ((2 * Math.PI) / childCount) * i - Math.PI / 2

					x = center + radius * Math.cos(angle) - offset
					y = center + radius * Math.sin(angle) - offset

					return (
						<DefaultButton
							className={clsx(
								'circle-history__button',
								idActiveItem === id && 'circle-history__button--active'
							)}
							onClick={() => setState(id)}
							circle
							key={id}
							style={{ left: `${x}px`, top: `${y}px` }}
						>
							{i + 1}
							<span className='circle-history__title'>{title}</span>
						</DefaultButton>
					)
				})}
		</div>
	)
}
