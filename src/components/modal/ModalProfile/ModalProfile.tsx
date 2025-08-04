import { useState } from 'react'
import styles from './ModalProfile.module.css'
import { validateLoginSchema, validateRegisterSchema } from './Forms/FormFormik'
import { Formik, Form } from 'formik'
import Login from './Forms/Login'
import Register from './Forms/Register'
import { supabase } from '../../auth/supabaseClient'
import { useUserStore } from '../../auth/store/UserStore'
import toast from 'react-hot-toast'
import Preolader from '../../reusedImg/Preloader/Preloader'
import Profile from './Profile/Profile'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import { handleLogin, handleRegistry } from './buttonAction'
import { okSignIn } from './buttonAction'
type ModalProfileProps = {
	closeModal: () => void
}

const ModalProfile = ({ closeModal }: ModalProfileProps) => {
	const errorMessages: Record<string, string> = {
		'Invalid login credentials': 'Неверный логин или пароль',
		'User already registered': 'Пользователь уже зарегистрирован',
		'Network error': 'Ошибка сети. Проверьте подключение',
	}
	function translateError(message: string): string {
		if (errorMessages[message]) {
			return errorMessages[message]
		}
		return 'Произошла неизвестная ошибка. Попробуйте еще раз'
	}
	const { setUser, isLoggedIn, user, logout } = useUserStore()

	const [registry, setRegistry] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const okRegistry = (resetForm: () => void) => {
		setLoading(false)
		toast.success('Успешная регистрация')
		setRegistry(false)
		resetForm()
	}
	const initialValues = registry
		? { name: '', email: '', password: '' }
		: { name: '', email: '' }

	const validationSchema = registry
		? validateRegisterSchema
		: validateLoginSchema
	if (isLoggedIn) {
		return <Profile closeModal={closeModal} user={user} logout={logout} />
	}
	return (
		<div className={styles['modal']}>
			<div className={styles['modal__select-actions']}>
				<button
					disabled={!registry}
					onClick={() => handleLogin(setRegistry)}
					className={`${styles['select__action-btn']} ${
						!registry ? styles.active : ''
					}`}
				>
					Вход
				</button>
				<button
					disabled={registry}
					onClick={() => handleRegistry(setRegistry)}
					className={`${styles['select__action-btn']} ${
						registry ? styles.active : ''
					}`}
				>
					Регистрация
				</button>
			</div>

			<button className={styles['modal__close-btn']} onClick={closeModal}>
				<img
					className={styles['close__btn-image']}
					src={closeButtonImg}
					alt='Иконка закрытия модального окна'
				/>
			</button>

			<h2 className={styles['title-form']}>
				{registry ? 'Регистрация' : 'Вход'}
			</h2>

			<Formik
				key={registry ? 'register' : 'login'}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					if (registry) {
						const { error } = await supabase.auth.signUp({
							email: values.email,
							password: values.password ?? '',
							options: {
								data: {
									name: values.name,
								},
							},
						})
						if (error) {
							setLoading(false)
							const messageRU = translateError(error.message)
							toast.error(messageRU)
						} else {
							okRegistry(resetForm)
						}
					} else {
						const { data, error } = await supabase.auth.signInWithPassword({
							email: values.email,
							password: values.password ?? '',
						})
						if (error) {
							setLoading(false)
							const messageRU = translateError(error.message)
							toast.error(messageRU)
						} else if (data?.user) {
							const { id, email, user_metadata } = data.user
							const userName = user_metadata.name ?? 'Инкогнито'
							setUser({ id: Number(id), email, name: userName })
							okSignIn(setLoading, userName, closeModal, resetForm)
						}
					}
					setSubmitting(false)
				}}
			>
				{({ isValid, dirty }) => (
					<Form noValidate className={styles['modal__form']}>
						<div className={styles['modal__form-container']}>
							<Login styles={styles} />

							{registry && <Register styles={styles} />}
						</div>

						<button
							className={`${styles['form__container-submit']} ${styles['registry']}`}
							type='submit'
							disabled={!(isValid && dirty)}
							onClick={() => setLoading(true)}
						>
							<span className={styles['container__submit-text']}>
								{loading ? (
									<Preolader />
								) : registry ? (
									'Зарегистрироваться'
								) : (
									'Войти'
								)}
							</span>
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ModalProfile
