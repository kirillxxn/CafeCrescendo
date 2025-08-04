import toast from 'react-hot-toast'
type SetRegistryFn = React.Dispatch<React.SetStateAction<boolean>>

export const handleLogin = (setRegistry: SetRegistryFn) => {
	setRegistry(false)
}

export const handleRegistry = (setRegistry: SetRegistryFn) => {
	setRegistry(true)
}

export const okSignIn = (
	closeModal: () => void,
	userName: string,
	setLoading: (val: boolean) => void,
	resetForm: () => void
) => {
	closeModal()
	toast.success(`Добро пожаловать: ${userName}`)
	setLoading(false)
	resetForm()
}

export const okRegistry = (
	setRegistry: (val: boolean) => void,
	setLoading: (val: boolean) => void,
	resetForm: () => void
) => {
	setLoading(false)
	toast.success('Успешная регистрация')
	setRegistry(false)
	resetForm()
}
