import { create } from 'zustand'
import type { TMenuList } from '../pages/Menu/MenuList'
import MenuList from '../pages/Menu/MenuList'

type BasketItem = TMenuList & {
	quantity: number
}

type BasketStore = {
	items: BasketItem[]
	addToBasket: (productId: number) => void
}
export const useBasketStore = create<BasketStore>(set => ({
	items: [],
	addToBasket: productId => {
		const product = MenuList.find(p => p.id === productId)
		if (!product) return
		set(state => {
			const existingItem = state.items.find(item => item.id === productId)
			return {
				items: existingItem
					? state.items.map(item =>
							item.id === productId
								? { ...item, quantity: item.quantity + 1 }
								: item
					  )
					: [...state.items, { ...product, quantity: 1 }],
			}
		})
	},
}))
