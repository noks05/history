const circleItemsDraft = [
	{
		id: 1,
		title: 'Книги',
		period: { from: 2015, to: 2018 },
		items: [
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
		],
	},
	{ id: 2, title: 'Литература', period: { from: 2000, to: 2010 } },
	{ id: 3, title: 'Книги3', period: { from: 2005, to: 2008 } },
	{ id: 4, title: 'Книги4', period: { from: 2010, to: 2019 } },
	{ id: 5, title: 'Книги5', period: { from: 1994, to: 2001 } },
	{ id: 6, title: 'Книги6', period: { from: 2024, to: 2030 } },
]

const baseDescriptions: Record<string, string> = {
	2015: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
	2016: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
	2017: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
	2018: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
}

export const circleItems = circleItemsDraft.map(obj => {
	if (obj.items) return obj

	const from = Math.min(obj.period.from, obj.period.to)
	const to = Math.max(obj.period.from, obj.period.to)

	const items = []
	for (let year = from; year <= to; year++) {
		items.push({
			id: year - from + 1,
			title: String(year),
			description:
				baseDescriptions[String(year)] ||
				'year - Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
		})
	}

	return {
		...obj,
		items,
	}
})
