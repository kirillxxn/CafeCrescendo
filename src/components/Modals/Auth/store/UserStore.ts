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
	user: null,
	isLoggedIn: false,
	setUser: user => set({ user, isLoggedIn: true }),
	logout: () => set({ user: null, isLoggedIn: false }),
}))
export type { User }
