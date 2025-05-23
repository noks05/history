import clsx from 'clsx'
import type { FC } from 'react'
import React, { useRef, useState } from 'react'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'

import { IconNext } from '../../../../shared/images/IconNext'
import { IconPrev } from '../../../../shared/images/IconPrev'
import { DefaultButton } from '../../../../shared/ui-kit/DefaultButton/DefaultButton'

import './sliderHistoryPeriods.scss'

interface ISliderHistoryPeriodsProps {
	className?: string
	slidesPerView?: number
	data: { title: string; description: string; id: number }[]
}

export const SliderHistoryPeriods: FC<ISliderHistoryPeriodsProps> = ({
	className,
	slidesPerView = 3,
	data,
}) => {
	console.log('data = ', data)
	const [disableNav, setDisableNav] = useState('prev')
	const swiperRef = useRef<SwiperClass>(null)
	const onPrev = () => {
		swiperRef.current?.slidePrev()
	}
	const onNext = () => {
		swiperRef.current?.slideNext()
	}
	return (
		<div className={clsx('slider-history', className)}>
			<h2 className='visually-hidden'>Слайдер по историческим периодам</h2>
			<div className='slider-history__wrapper'>
				<Swiper
					grabCursor={true}
					slidesPerView={slidesPerView}
					spaceBetween={20}
					modules={[Navigation]}
					onBeforeInit={swiper => {
						swiperRef.current = swiper
					}}
					onSlideChange={swiper => {
						if (swiper.isBeginning) {
							setDisableNav('prev')
						} else if (swiper.isEnd) {
							setDisableNav('next')
						} else {
							setDisableNav('')
						}
					}}
					className='slider-history__swiper'
				>
					{data.map(({ id, description, title }) => (
						<SwiperSlide className='slider-history__slide' key={id}>
							<div className='slider-history__box'>
								<p className='slider-history__title'>{title}</p>
								<h3 className='slider-history__description'>{description}</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<DefaultButton
					className={clsx(
						'slider-history__nav',
						'slider-history__nav-prev',
						disableNav === 'prev' && 'visibility-hidden'
					)}
					onClick={onPrev}
					typeButton='shadow'
					color='blue'
					size='small'
					circle
				>
					<IconPrev className='nav-arrow-small' />
				</DefaultButton>
				<DefaultButton
					className={clsx(
						'slider-history__nav',
						'slider-history__nav-next',
						disableNav === 'next' && 'visibility-hidden'
					)}
					onClick={onNext}
					typeButton='shadow'
					color='blue'
					size='small'
					circle
				>
					<IconNext className='nav-arrow-small' />
				</DefaultButton>
			</div>
		</div>
	)
}
