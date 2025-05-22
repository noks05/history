import { SwitchSlide } from '@/features/SwitchSlide'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { SliderHistoryPeriods } from './SliderHistoryPeriods/SliderHistoryPeriods'

import { CircleHistoryPeriods } from './CircleHistoryPeriods/CircleHistoryPeriods'
import './historyPeriods.scss'
import { YearsHistoryPeriods } from './YearsHistoryPeriods/YearsHistoryPeriods'

interface IHistoryPeriodsProps {
	className?: string
}

const ALL_PAGES = 6

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	const [currentPage, setCurrentPage] = useState(1)
	const [period, setPeriod] = useState({ from: 2015, to: 2022 })

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

	useEffect(() => {
		setTimeout(() => setPeriod({ from: 2000, to: 2050 }), 2000)
		return () => {}
	}, [])

	return (
		<div className='history-periods'>
			<h1 className='history-periods__title title-h1'>
				Исторические
				<br /> даты
			</h1>
			<div className='history-periods__center'>
				<YearsHistoryPeriods period={period} />
				<CircleHistoryPeriods className='history-periods__circle' />
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
