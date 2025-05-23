import clsx from 'clsx'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import './yearsHistoryPeriods.scss'

export type THistoryPeriod = { from: number; to: number }

interface IYearsHistoryPeriodsProps {
	className?: string
	period: THistoryPeriod
}

export const YearsHistoryPeriods: FC<IYearsHistoryPeriodsProps> = ({
	className,
	period,
}) => {
	const [from, setFrom] = useState(period.from)
	const [to, setTo] = useState(period.to)

	useEffect(() => {
		let timeId = 0

		const changeState = () => {
			if (from > period.from) {
				setFrom(prev => prev - 1)
			} else if (from < period.from) {
				setFrom(prev => prev + 1)
			}

			if (to > period.to) {
				setTo(prev => prev - 1)
			} else if (to < period.to) {
				setTo(prev => prev + 1)
			}
		}
		setTimeout(() => changeState(), 10)

		return () => clearTimeout(timeId)
	}, [period, from, to])

	return (
		<div className={clsx(className, 'years-history')}>
			<span className='years-history__from'>{from}</span>
			<span className='years-history__to'>{to}</span>
		</div>
	)
}
