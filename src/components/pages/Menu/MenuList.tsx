import nattyImg from '/src/assets/coffelist/natty.jpeg'

import costa from '/src/assets/coffelist/costa.jpeg'
import ethiopia from '/src/assets/coffelist/ethiopia.jpeg'
import colombia from '/src/assets/coffelist/colombia.jpeg'
import guatemala from '/src/assets/coffelist/guatemala.jpeg'
import jamaica from '/src/assets/coffelist/jamaica.jpeg'
import kenya from '/src/assets/coffelist/kenya.jpeg'
import sumatra from '/src/assets/coffelist/sumatra.jpeg'
import brazilia from '/src/assets/coffelist/brazilia.jpeg'
import peru from '/src/assets/coffelist/peru.jpeg'
import mexica from '/src/assets/coffelist/mexica.jpeg'
import honduras from '/src/assets/coffelist/honduras.jpeg'
import panama from '/src/assets/coffelist/panama.jpeg'
import salvador from '/src/assets/coffelist/salvador.jpeg'
import nicaragua from '/src/assets/coffelist/nicaragua.jpeg'

export type TMenuList = {
	id: number
	name: string
	price: number
	description: string
	image?: string
	country: string
	weight: number
}

const MenuList: TMenuList[] = [
	{
		id: 0,
		name: 'Натти',
		price: 689,
		image: nattyImg,
		description: 'Плотный кофе с нотами жареных орехов, печенья и нуги.',
		country: 'Бразилия',
		weight: 250,
	},
	{
		id: 1,
		name: 'Коста-Рика',
		price: 799,
		image: costa,
		description:
			'Кофе с ярким вкусом и ароматом, с нотами цитрусовых и шоколада.',
		country: 'Коста-Рика',
		weight: 250,
	},
	{
		id: 2,
		name: 'Эфиопия',
		price: 899,
		image: ethiopia,
		description:
			'Легкий кофе с цветочными и фруктовыми нотами, с легкой кислинкой.',
		country: 'Эфиопия',
		weight: 250,
	},
	{
		id: 3,
		name: 'Колумбия',
		price: 749,
		image: colombia,
		description:
			'Кофе с мягким вкусом, нотами карамели и орехов, с легкой кислинкой.',
		country: 'Колумбия',
		weight: 250,
	},
	{
		id: 4,
		name: 'Гватемала',
		price: 799,
		image: guatemala,
		description:
			'Кофе с насыщенным вкусом, нотами шоколада и специй, с легкой кислинкой.',
		country: 'Гватемала',
		weight: 250,
	},
	{
		id: 5,
		name: 'Ямайка',
		price: 1299,
		image: jamaica,
		description:
			'Редкий кофе с уникальным вкусом, нотами шоколада и фруктов, с легкой кислинкой.',
		country: 'Ямайка',
		weight: 250,
	},
	{
		id: 6,
		name: 'Кения',
		price: 899,
		image: kenya,
		description:
			'Кофе с ярким вкусом, нотами цитрусовых и ягод, с легкой кислинкой.',
		country: 'Кения',
		weight: 250,
	},
	{
		id: 7,
		name: 'Суматра',
		price: 799,
		image: sumatra,
		description:
			'Кофе с насыщенным вкусом, нотами земли и специй, с низкой кислинкой.',
		country: 'Индонезия',
		weight: 250,
	},
	{
		id: 8,
		name: 'Бразилия',
		price: 699,
		image: brazilia,
		description:
			'Кофе с мягким вкусом, нотами шоколада и орехов, с низкой кислинкой.',
		country: 'Бразилия',
		weight: 250,
	},
	{
		id: 9,
		name: 'Перу',
		price: 749,
		image: peru,
		description:
			'Кофе с мягким вкусом, нотами карамели и орехов, с легкой кислинкой.',
		country: 'Перу',
		weight: 250,
	},
	{
		id: 10,
		name: 'Мексика',
		price: 699,
		image: mexica,
		description:
			'Кофе с мягким вкусом, нотами шоколада и орехов, с легкой кислинкой.',
		country: 'Мексика',
		weight: 250,
	},
	{
		id: 11,
		name: 'Гондурас',
		price: 749,
		image: honduras,
		description:
			'Кофе с мягким вкусом, нотами карамели и орехов, с легкой кислинкой.',
		country: 'Гондурас',
		weight: 250,
	},
	{
		id: 12,
		name: 'Панама',
		price: 1299,
		image: panama,
		description:
			'Кофе с уникальным вкусом, нотами шоколада и фруктов, с легкой кислинкой.',
		country: 'Панама',
		weight: 250,
	},
	{
		id: 13,
		name: 'Сальвадор',
		price: 799,
		image: salvador,
		description:
			'Кофе с мягким вкусом, нотами карамели и орехов, с легкой кислинкой.',
		country: 'Сальвадор',
		weight: 250,
	},
	{
		id: 14,
		name: 'Никарагуа',
		price: 749,
		image: nicaragua,
		description:
			'Кофе с мягким вкусом, нотами шоколада и орехов, с легкой кислинкой.',
		country: 'Никарагуа',
		weight: 250,
	},
]

export default MenuList
