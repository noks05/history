import type { FC } from 'react'
import React from 'react'

import { SliderHistoryPeriods } from '@/widjets/HistoryPeriods/SliderHistoryPeriods/SliderPeriodHistory'
import './app.scss'

interface IAppProps {
	className?: string
}

export const App: FC<IAppProps> = props => {
	return (
		<div className='app'>
			<SliderHistoryPeriods className='container' />
		</div>
	)
}
