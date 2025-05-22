import clsx from 'clsx'
import type { FC } from 'react'
import React, { useRef, useState } from 'react'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'

import { IconNext } from '../../../shared/images/IconNext'
import { IconPrev } from '../../../shared/images/IconPrev'
import { DefaultButton } from '../../../shared/ui-kit/DefaultButton/DefaultButton'

import './sliderHistoryPeriods.scss'

interface ISliderHistoryPeriodsProps {
	className?: string
	slidesPerView?: number
}

const sliderItems = [
	{
		id: 1,
		title: '2015',
		description:
			'13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
	},
	{
		id: 2,
		title: '2016',
		description:
			'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
	},
	{
		id: 3,
		title: '2017',
		description:
			'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
	},
	{
		id: 4,
		title: '2018',
		description:
			'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
	},
]

export const SliderHistoryPeriods: FC<ISliderHistoryPeriodsProps> = ({
	className,
	slidesPerView = 3,
}) => {
	const [disableNav, setDisableNav] = useState('')
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
					{sliderItems.map(({ id, description, title }, i) => (
						<SwiperSlide className='slider-history__slide' key={i}>
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
					circle
				>
					<IconNext className='nav-arrow-small' />
				</DefaultButton>
			</div>
		</div>
	)
}
