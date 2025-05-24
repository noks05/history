import React, { useState } from 'react'

type CircleMenuProps = {
	items?: string[] // названия кнопок
}

const CircleMenu: React.FC<CircleMenuProps> = ({
	items = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'],
}) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const itemCount = items.length
	const radius = 120 // Радиус круга в px

	// Угол между элементами (в градусах)
	const angleStep = 360 / itemCount

	// Поворот круга в градусах, чтобы активный элемент оказался в верхнем правом углу
	// Верхний правый угол — 45 градусов
	// Нам нужно повернуть круг на -(activeIndex * angleStep - 45), чтобы активный элемент был там
	const rotation = -(activeIndex * angleStep - 45)

	return (
		<div
			style={{
				position: 'relative',
				width: radius * 2 + 100,
				height: radius * 2 + 100,
				margin: '50px auto',
				border: '1px solid #ccc',
				borderRadius: '50%',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: radius * 2,
					height: radius * 2,
					marginTop: -radius,
					marginLeft: -radius,
					transition: 'transform 0.5s ease',
					transform: `rotate(${rotation}deg)`,
					transformOrigin: '50% 50%',
				}}
			>
				{items.map((item, index) => {
					// Угол текущего элемента относительно круга
					const angle = index * angleStep
					// Позиция по X и Y относительно центра круга
					const x = radius + radius * Math.cos((angle * Math.PI) / 180) - 30 // 30 - половина ширины кнопки
					const y = radius + radius * Math.sin((angle * Math.PI) / 180) - 15 // 15 - половина высоты кнопки

					return (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							style={{
								position: 'absolute',
								top: y,
								left: x,
								width: 60,
								height: 30,
								cursor: 'pointer',
								backgroundColor:
									index === activeIndex ? 'dodgerblue' : 'lightgray',
								color: index === activeIndex ? 'white' : 'black',
								border: 'none',
								borderRadius: 5,
								userSelect: 'none',
								transform: `rotate(${-rotation}deg)`,
							}}
						>
							{item}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default CircleMenu
