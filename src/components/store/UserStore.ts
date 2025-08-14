import { create } from 'zustand'

type User = {
	id: number
	name: string
	email: string | undefined
}

type UserStore = {
	user: User | null
	isLoggedIn: boolean
	setUser: (user: User) => void
	logout: () => void
}

export const useUserStore = create<UserStore>(set => ({
	user: JSON.parse(localStorage.getItem('user') || 'null'),
	isLoggedIn: !!localStorage.getItem('user'),
	setUser: user => {
		localStorage.setItem('user', JSON.stringify(user))
		set({ user, isLoggedIn: true })
	},
	logout: () => {
		localStorage.removeItem('user')
		set({ user: null, isLoggedIn: false })
	},
}))
export type { User }
