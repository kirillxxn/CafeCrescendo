import { useState } from 'react'
import styles from './ModalProfile.module.css'
import { validateLoginSchema, validateRegisterSchema } from './Forms/FormFormik'
import { Formik, Form } from 'formik'
import Login from './Forms/Login'
import Register from './Forms/Register'
import { supabase } from '../Auth/supabaseClient'
import { useUserStore } from '../Auth/store/UserStore'
import toast from 'react-hot-toast'
import Preolader from './Preloader/Preloader'
type ModalProfileProps = {
	closeModal: () => void
}

const ModalProfile = ({ closeModal }: ModalProfileProps) => {
	const { setUser, isLoggedIn, user, logout } = useUserStore()

	const [registry, setRegistry] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const handleLogin = () => {
		setRegistry(false)
	}

	const handleRegistry = () => {
		setRegistry(true)
	}
	const okSignIn = (resetForm: () => void, userName: string) => {
		setLoading(false)
		closeModal()
		toast.success(`Добро пожаловать: ${userName}`)
		resetForm()
	}
	const initialValues = registry
		? { name: '', email: '', password: '' }
		: { name: '', email: '' }

	const validationSchema = registry
		? validateRegisterSchema
		: validateLoginSchema
	if (isLoggedIn) {
		return (
			<div className={`${styles['modal']} ${styles['modal-profile']}`}>
				<button className={styles['modal__close-btn']} onClick={closeModal}>
					<img
						className={styles['close__btn-image']}
						src='/src/assets/icons/closebutton.png'
						alt='Иконка закрытия модального окна'
					/>
				</button>
				<div className={styles['profile']}>
					<h2 className={styles['profile-title']}>Профиль</h2>
					<img
						className={styles['profile-avatar']}
						src='/src/assets/icons/avatar.png'
						alt=''
					/>
					<div className={styles['user-info']}>
						<span className={styles['user__info-name']}>
							{user?.name || 'Инкогнито'}
						</span>
						<span className={styles['user__info-email']}>{user?.email}</span>
					</div>
					<button
						className={`${styles['form__container-submit']} ${styles['logout']}`}
						type='submit'
						onClick={logout}
					>
						<span className={styles['container__submit-text']}>Выйти</span>
					</button>
				</div>
			</div>
		)
	}
	return (
		<div className={styles['modal']}>
			<div className={styles['modal__select-actions']}>
				<button
					disabled={!registry}
					onClick={handleLogin}
					className={`${styles['select__action-btn']} ${
						!registry ? styles.active : ''
					}`}
				>
					Вход
				</button>
				<button
					disabled={registry}
					onClick={handleRegistry}
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
					src='/src/assets/icons/closebutton.png'
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
				onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
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
							console.error('Ошибка регистрации', error.message)
							setStatus(error.message)
						} else {
							alert('Успешная регистрация')
							resetForm()
						}
					} else {
						const { data, error } = await supabase.auth.signInWithPassword({
							email: values.email,
							password: values.password ?? '',
						})
						if (error) {
							console.error('Ошибка входа', error.message)
							setStatus(error.message)
						} else if (data?.user) {
							const { id, email, user_metadata } = data.user
							const userName = user_metadata.name ?? 'Инкогнито'
							setUser({ id: Number(id), email, name: userName })
							okSignIn(resetForm, userName)
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
