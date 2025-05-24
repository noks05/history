import { DefaultButton } from '@/shared/ui-kit/DefaultButton'
import clsx from 'clsx'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import './circleHistoryPeriods.scss'

interface ICircleHistoryPeriodsProps {
	className?: string
	items: { title: string; id: number }[]
	idActiveItem: number
	setActiveItem: (index: number) => void
}

export const CircleHistoryPeriods: FC<ICircleHistoryPeriodsProps> = ({
	className,
	items,
	setActiveItem,
	idActiveItem,
}) => {
	const parentRef = useRef<HTMLDivElement>(null)
	const [radius, setRadius] = useState<number | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	const isRadius = typeof radius === 'number'

	const childCount = items.length
	const angleStep = 360 / childCount
	const childOffset = 28
	const rotation = -(activeIndex * angleStep + 45)

	const getPositionChild = (angleShift: number) => {
		let x = 0
		let y = 0
		if (!isRadius) return { x, y }

		const center = radius
		x = center + radius * Math.cos((angleShift * Math.PI) / 180) - childOffset
		y = center + radius * Math.sin((angleShift * Math.PI) / 180) - childOffset

		return { x, y }
	}

	const changeActiveIndex = (index: number) => {
		setActiveItem(index)
		setActiveIndex(index)
	}

	useEffect(() => {
		if (parentRef.current) {
			const r = parentRef.current.offsetWidth / 2
			setRadius(r)
		}
		return () => {}
	}, [])

	return (
		<div
			className={clsx(className, 'circle-history')}
			ref={parentRef}
			style={{
				transformOrigin: '50% 50%',
				transform: `rotate(${rotation}deg)`,
			}}
		>
			{isRadius &&
				items.map(({ id, title }, i) => {
					const { x, y } = getPositionChild(i * angleStep)

					return (
						<div
							className='circle-history__button-wrapper'
							style={{
								left: `${x}px`,
								top: `${y}px`,
								transform: `rotate(${-rotation}deg)`,
							}}
						>
							<DefaultButton
								className={clsx(
									'circle-history__button',
									idActiveItem === id && 'circle-history__button--active'
								)}
								onClick={() => changeActiveIndex(i)}
								circle
								key={id}
							>
								{i + 1}
								<span className='circle-history__title'>{title}</span>
							</DefaultButton>
						</div>
					)
				})}
		</div>
	)
}
