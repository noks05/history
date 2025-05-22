import type { FC } from 'react'
import React from 'react'

import clsx from 'clsx'

interface ICircleHistoryPeriodsProps {
	className?: string
}

export const CircleHistoryPeriods: FC<ICircleHistoryPeriodsProps> = ({
	className,
}) => {
	return <div className={clsx(className, 'circle-history')}></div>
}
