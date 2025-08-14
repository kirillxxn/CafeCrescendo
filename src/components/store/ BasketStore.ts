import { create } from 'zustand'
import type { TMenuList } from '../pages/Menu/MenuList'
import MenuList from '../pages/Menu/MenuList'

type BasketItem = TMenuList & {
	quantity: number
}

type BasketStore = {
	items: BasketItem[]
	addToBasket: (productId: number) => void
	removeToBasket: (productId: number) => void
	removeToQuantity: (productId: number) => void
	getTotal(): number
	getCount(): number
}
export const useBasketStore = create<BasketStore>((set, get) => ({
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
	removeToBasket: productId => {
		set(state => ({
			items: state.items.filter(item => item.id !== productId),
		}))
	},
	removeToQuantity: productId => {
		set(state => ({
			items: state.items
				.map(item =>
					item.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0),
		}))
	},
	getTotal() {
		return get().items.reduce(
			(sum: number, item: BasketItem) => sum + item.price * item.quantity,
			0
		)
	},
	getCount() {
		return get().items.reduce(
			(counter: number, item: BasketItem) => counter + item.quantity,
			0
		)
	},
}))
