import { create } from 'zustand'

type TBasket = {
	score: number
	price: number
	sum: number
}

type TBasketStore = {
  basket: TBasket | null
  addToBasket: () => void
  removeToBasket: () => void
}