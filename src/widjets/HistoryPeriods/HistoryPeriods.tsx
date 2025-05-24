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

const ALL_PAGES = 6

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const currentPeriod = circleItems[currentIndex].period
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
							idActiveItem={currentId}
							setActiveItem={setCurrentIndex}
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
				<SliderHistoryPeriods data={currentSliderItems} />
			</div>
		</div>
	)
}
