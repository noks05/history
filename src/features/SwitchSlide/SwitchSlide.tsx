import { IconNext } from '@/shared/images/IconNext'
import { IconPrev } from '@/shared/images/IconPrev'
import { DefaultButton } from '@/shared/ui-kit/DefaultButton/DefaultButton'
import { addZeroToStart } from '@/shared/utils/addZeroToStart'
import clsx from 'clsx'
import type { FC, MouseEvent } from 'react'
import React from 'react'

import './switchSlide.scss'

interface ISwitchSlideProps {
	className?: string
	onPrev: (e?: MouseEvent<HTMLButtonElement>) => void
	onNext: (e?: MouseEvent<HTMLButtonElement>) => void
	allPages: number
	currentPage: number
}

export const SwitchSlide: FC<ISwitchSlideProps> = ({
	className,
	onPrev,
	onNext,
	allPages,
	currentPage,
}) => {
	const currentPageString =
		currentPage < 10 ? addZeroToStart(String(currentPage)) : currentPage
	const allPageString =
		allPages < 10 ? addZeroToStart(String(allPages)) : allPages

	const reachStart = currentPage === 1
	const reachEnd = currentPage === allPages
	return (
		<div className={clsx(className, 'switch-slide')}>
			<span className='switch-slide__numbers'>
				<span>{currentPageString}</span>/<span>{allPageString}</span>
			</span>

			<div className='switch-slide__bottom'>
				<DefaultButton
					className={clsx(
						'switch-slide__button',
						reachStart && 'switch-slide--hidden'
					)}
					onClick={onPrev}
					circle
				>
					<IconPrev strokeWidth={4} />
				</DefaultButton>
				<DefaultButton
					className={clsx(
						'switch-slide__button',
						reachEnd && 'switch-slide--hidden'
					)}
					onClick={onNext}
					circle
				>
					<IconNext strokeWidth={4} />
				</DefaultButton>
			</div>
		</div>
	)
}
