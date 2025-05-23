import { SwitchSlide } from '@/features/SwitchSlide'
import type { FC } from 'react'
import React, { useState } from 'react'
import { SliderHistoryPeriods } from './parts/SliderHistoryPeriods/SliderHistoryPeriods'

import './historyPeriods.scss'
import { circleItems } from './lib/consts'
import { CircleHistoryPeriods } from './parts/CircleHistoryPeriods/CircleHistoryPeriods'
import { YearsHistoryPeriods } from './parts/YearsHistoryPeriods/YearsHistoryPeriods'

interface IHistoryPeriodsProps {
	className?: string
}

type TCitcleItem = { id: number; title: string }

const ALL_PAGES = 6
console.log('circleItemsWithItems =', circleItems)

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const currentPeriod = circleItems[currentIndex].period
	console.log('period', currentIndex, circleItems, currentPeriod)
	const currentSliderItems = circleItems[currentIndex].items
	const currentId = circleItems[currentIndex].id

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

	// useEffect(() => {
	// 	setTimeout(() => setPeriod({ from: 2000, to: 2050 }), 2000)
	// 	return () => {}
	// }, [])

	return (
		<div className='history-periods'>
			<h1 className='history-periods__title title-h1'>
				Исторические
				<br /> даты
			</h1>
			<div className='history-periods__center'>
				<YearsHistoryPeriods period={currentPeriod} />

				<div className='history-periods__circle'>
					<CircleHistoryPeriods
						items={circleItems}
						idActiveItem={currentId}
						setActiveIndex={setCurrentIndex}
					/>
				</div>
			</div>

			<div className='history-periods__container container'>
				<SwitchSlide
					className='history-periods__switch'
					currentPage={currentIndex + 1}
					allPages={ALL_PAGES}
					onPrev={onPrev}
					onNext={onNext}
				/>
				<SliderHistoryPeriods data={currentSliderItems} />
			</div>
		</div>
	)
}
