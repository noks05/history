import type { FC } from 'react'
import React from 'react'

import { HistoryPeriods } from '@/widjets/HistoryPeriods/HistoryPeriods'
import './app.scss'

interface IAppProps {
	className?: string
}

export const App: FC<IAppProps> = props => {
	return (
		<div className='app'>
			<HistoryPeriods />
		</div>
	)
}
