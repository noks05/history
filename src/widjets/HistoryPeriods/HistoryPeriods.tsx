import { SwitchSlide } from '@/features/SwitchSlide'
import gsap from 'gsap'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { SliderHistoryPeriods } from './parts/SliderHistoryPeriods/SliderHistoryPeriods'

import './historyPeriods.scss'
import { circleItems } from './lib/consts'
import { CircleHistoryPeriods } from './parts/CircleHistoryPeriods/CircleHistoryPeriods'
import { YearsHistoryPeriods } from './parts/YearsHistoryPeriods/YearsHistoryPeriods'

interface IHistoryPeriodsProps {
	className?: string
}

const ALL_PAGES = 6

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const currentTitle = circleItems[currentIndex].title
	const currentPeriod = circleItems[currentIndex].period
	const currentSliderItems = circleItems[currentIndex].items

	const onPrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => (prev -= 1))
		}
	}

	const onNext = () => {
		if (currentIndex < ALL_PAGES - 1) {
			setCurrentIndex(prev => (prev += 1))
		}
	}

	const [isAnimating, setIsAnimating] = useState(false)
	const blockRef = useRef(null)

	useEffect(() => {
		if (isAnimating) return
		setIsAnimating(true)

		gsap.to(blockRef.current, {
			duration: 0.5,
			opacity: 0,
			onComplete: () => {
				gsap.fromTo(
					blockRef.current,
					{ y: 30, opacity: 0 },
					{
						duration: 0.5,
						y: 0,
						opacity: 1,
						onComplete: () => setIsAnimating(false),
					}
				)
			},
		})
		return () => {}
	}, [currentIndex])

	return (
		<div className='history-periods'>
			<h1 className='history-periods__title title-h1'>
				Исторические
				<br /> даты
			</h1>
			<div className='history-periods__container container'>
				<div className='history-periods__center'>
					<YearsHistoryPeriods period={currentPeriod} />

					<div className='history-periods__circle'>
						<CircleHistoryPeriods
							items={circleItems}
							activeIndex={currentIndex}
							setActiveIndex={setCurrentIndex}
						/>
					</div>
				</div>

				<SwitchSlide
					className='history-periods__switch'
					currentPage={currentIndex + 1}
					allPages={ALL_PAGES}
					onPrev={onPrev}
					onNext={onNext}
				/>

				<div className='history-periods__slider-wrapper' ref={blockRef}>
					<h2 className='history-periods__mobile-subtitle'>{currentTitle}</h2>
					<SliderHistoryPeriods data={currentSliderItems} />
				</div>
			</div>
		</div>
	)
}
