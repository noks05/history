import { DefaultButton } from '@/shared/ui-kit/DefaultButton'
import clsx from 'clsx'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import './circleHistoryPeriods.scss'

interface ICircleHistoryPeriodsProps {
	className?: string
	items: { title: string; id: number }[]
	idActiveItem: number
	setActiveIndex: (index: number) => void
}

export const CircleHistoryPeriods: FC<ICircleHistoryPeriodsProps> = ({
	className,
	items,
	setActiveIndex,
	idActiveItem,
}) => {
	const parentRef = useRef<HTMLDivElement>(null)
	const oldPosActiveChild = useRef<number | null>(null)
	const [radius, setRadius] = useState<number | null>(null)
	const [shift, setShift] = useState(0)

	const isRadius = typeof radius === 'number'

	const childCount = items.length
	const childOffset = 28
	const radianInOneAngle = (2 * Math.PI) / childCount

	const calcAngleInRadian = (index: number) => {
		const angle = radianInOneAngle * index - Math.PI / 4 + shift
		return angle
	}
	const getPositionOnCircle = (angle: number) => {
		let x = 0
		let y = 0
		if (!isRadius) return { x, y }

		const center = radius
		x = center + radius * Math.cos(angle) - childOffset
		y = center + radius * Math.sin(angle) - childOffset
		return { x, y }
	}

	const changeActiveChild = (index: number, shiftNumber: number) => {
		setActiveIndex(index)
		setShift(shiftNumber)
	}

	useEffect(() => {
		if (parentRef.current) {
			const r = parentRef.current.offsetWidth / 2
			setRadius(r)
		}
		return () => {}
	}, [])

	// useEffect(() => {
	// 	if (isMounted.current) {
	// 		setShift(shift)
	// 	}
	// 	isMounted.current = true
	// 	return () => {}
	// }, [shift])

	return (
		<div className={clsx(className, 'circle-history')} ref={parentRef}>
			{isRadius &&
				items.map(({ id, title }, i) => {
					const angle = calcAngleInRadian(i)
					if (i === 0) oldPosActiveChild.current = angle
					// console.log('item = ', i)
					// console.log('radian = ', angle)

					const diffInElems = childCount - i
					const diffInRadian = radianInOneAngle * diffInElems
					const { x, y } = getPositionOnCircle(angle)

					return (
						<DefaultButton
							className={clsx(
								'circle-history__button',
								idActiveItem === id && 'circle-history__button--active'
							)}
							onClick={() => changeActiveChild(i, diffInRadian)}
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
