import { useState } from 'react'
import { useUserStore } from '../../store/UserStore'
import {
	validateLoginSchema,
	validateRegisterSchema,
} from './Forms/Validate/FormFormik'
import { supabase } from '../../auth/supabase/supabaseClient'
import { handleLogin, handleRegistry } from './scripts/buttonAction'
import { okSignIn } from './scripts/buttonAction'
import { okRegistry } from './scripts/buttonAction'
import styles from './ModalProfile.module.css'
import { Formik, Form } from 'formik'
import Login from './Forms/Login/Login'
import Register from './Forms/Register/Register'
import toast from 'react-hot-toast'
import Preolader from '../../pages/Preloader/Preloader'
import Profile from './Profile/Profile'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import translateError from './Forms/Validate/ErrorMessages'
type ModalProfileProps = {
	closeModal: () => void
}
const ModalProfile = ({ closeModal }: ModalProfileProps) => {
	const { setUser, isLoggedIn, user, logout } = useUserStore()
	const [registry, setRegistry] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	{
		/* Начальные значения формы */
	}
	const initialValues = registry
		? { name: '', email: '', password: '' }
		: { name: '', email: '' }
	{
		/* Валидационная схема */
	}
	const validationSchema = registry
		? validateRegisterSchema
		: validateLoginSchema
	{
		/* Если пользователь авторизован */
	}
	if (isLoggedIn) {
		return <Profile closeModal={closeModal} user={user} logout={logout} />
	}
	return (
		<div className={styles['modal']}>
			{/* Переключатель режимов */}
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
			{/* Кнопка закрытия */}
			<button className={styles['modal__close-btn']} onClick={closeModal}>
				<img
					className={styles['close__btn-image']}
					src={closeButtonImg}
					alt='Иконка закрытия модального окна'
				/>
			</button>
			{/* Заголовок формы */}
			<h2 className={styles['title-form']}>
				{registry ? 'Регистрация' : 'Вход'}
			</h2>
			{/* Форма Formik */}
			<Formik
				key={registry ? 'register' : 'login'}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					if (registry) {
						{
							/* Регистрация пользователя */
						}
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
							okRegistry(setRegistry, setLoading, resetForm)
						}
					} else {
						{
							/* Вход пользователя */
						}
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
							okSignIn(closeModal, userName, setLoading, resetForm)
						}
					}
					setSubmitting(false)
				}}
			>
				{({ isValid, dirty }) => (
					<Form noValidate className={styles['modal__form']}>
						{/* Контейнер формы */}
						<div className={styles['modal__form-container']}>
							<Login styles={styles} />
							{/* Дополнительное поле для регистрации */}
							{registry && <Register styles={styles} />}
						</div>
						{/* Кнопка отправки формы */}
						<button
							className={`${styles['form__submit-btn']} ${styles['registry']}`}
							type='submit'
							disabled={!(isValid && dirty)}
							onClick={() => setLoading(true)}
						>
							<span className={styles['form__submit-text']}>
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
