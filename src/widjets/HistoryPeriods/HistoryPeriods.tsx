import type { FC } from 'react'
import React from 'react'
import styles from './historyPeriods.scss'

interface IHistoryPeriodsProps {
	className?: string
}

export const HistoryPeriods: FC<IHistoryPeriodsProps> = props => {
	return <div className={styles.root}></div>
}
