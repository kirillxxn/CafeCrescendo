import toast from 'react-hot-toast'
type SetRegistryFn = React.Dispatch<React.SetStateAction<boolean>>

export const handleLogin = (setRegistry: SetRegistryFn) => {
	setRegistry(false)
}

export const handleRegistry = (setRegistry: SetRegistryFn) => {
	setRegistry(true)
}

export const okSignIn = (
	setLoading: (val: boolean) => void,
	userName: string,
	closeModal: () => void,
	resetForm: () => void
) => {
	setLoading(false)
	closeModal()
	toast.success(`Добро пожаловать: ${userName}`)
	resetForm()
}
