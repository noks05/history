import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import React from 'react'
import './defaultButton.scss'

interface IDefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'small' | 'medium'
	circle?: boolean
	typeButton?: 'shadow' | 'outline' | 'empty' | ''
	color?: 'blue' | 'blueBlack'
	children: ReactNode
}

export const DefaultButton: FC<IDefaultButtonProps> = ({
	className,
	size = 'medium',
	circle,
	typeButton = 'outline',
	color = 'blueBlack',
	children,
	...restProps
}) => {
	return (
		<button
			className={clsx(
				'default-button',
				className,
				`default-button--${size}`,
				circle && `default-button--circle`,
				`default-button--${typeButton}`,
				`default-button--${color}`
			)}
			{...restProps}
		>
			{children}
		</button>
	)
}
