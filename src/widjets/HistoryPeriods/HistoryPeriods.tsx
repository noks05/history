import { SwitchSlide } from '@/features/SwitchSlide'
import type { FC } from 'react'
import React, { useState } from 'react'
import { SliderHistoryPeriods } from './SliderHistoryPeriods/SliderHistoryPeriods'

import { CircleHistoryPeriods } from './CircleHistoryPeriods/CircleHistoryPeriods'
import './historyPeriods.scss'
import { YearsHistoryPeriods } from './YearsHistoryPeriods/YearsHistoryPeriods'

interface IHistoryPeriodsProps {
	className?: string
}

const circleItems = [
	{ id: 1, title: 'Книги' },
	{ id: 2, title: 'Литература' },
	{ id: 3, title: 'Книги3' },
	{ id: 4, title: 'Книги4' },
	{ id: 5, title: 'Книги5' },
	{ id: 6, title: 'Книги6' },
]

type TCitcleItem = { id: number; title: string }

const ALL_PAGES = 6

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	const [currentPage, setCurrentPage] = useState(1)
	const [period, setPeriod] = useState({ from: 2015, to: 2022 })
	const [currentData, setCurrentData] = useState<TCitcleItem>(circleItems[0])

	const setStateInCircle = (id: number) => {
		const newData = circleItems.find(el => el.id === id)
		setCurrentData(newData || circleItems[0])
	}

	const onPrev = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => (prev -= 1))
		}
	}

	const onNext = () => {
		if (currentPage < ALL_PAGES) {
			setCurrentPage(prev => (prev += 1))
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
				<YearsHistoryPeriods period={period} />
				<div className='history-periods__circle'>
					<CircleHistoryPeriods
						items={circleItems}
						idActiveItem={currentData.id}
						setState={setStateInCircle}
					/>
				</div>
			</div>

			<div className='history-periods__container container'>
				<SwitchSlide
					className='history-periods__switch'
					currentPage={currentPage}
					allPages={ALL_PAGES}
					onPrev={onPrev}
					onNext={onNext}
				/>
				<SliderHistoryPeriods />
			</div>
		</div>
	)
}
