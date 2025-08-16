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
	resetBasket: () => void
}
export const useBasketStore = create<BasketStore>((set, get) => ({
	items: JSON.parse(localStorage.getItem('basketItems') || '[]'),
	addToBasket: productId => {
		const product = MenuList.find(p => p.id === productId)
		if (!product) return
		set(state => {
			const existingItem = state.items.find(item => item.id === productId)
			const newItems = existingItem
				? state.items.map(item =>
						item.id === productId
							? { ...item, quantity: item.quantity + 1 }
							: item
				  )
				: [...state.items, { ...product, quantity: 1 }]
			localStorage.setItem('basketItems', JSON.stringify(newItems))
			return { items: newItems }
		})
	},
	removeToBasket: productId => {
		set(state => {
			const newItems = state.items.filter(item => item.id !== productId)
			localStorage.setItem('basketItems', JSON.stringify(newItems))
			return { items: newItems }
		})
	},
	removeToQuantity: productId => {
		set(state => {
			const newItems = state.items
				.map(item =>
					item.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0)
			localStorage.setItem('basketItems', JSON.stringify(newItems))
			return { items: newItems }
		})
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
	resetBasket: () => {
		set({ items: [] })
		localStorage.setItem('basketItem', JSON.stringify([]))
	},
}))
