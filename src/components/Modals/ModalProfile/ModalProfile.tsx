import { useState } from 'react'
import styles from './ModalProfile.module.css'
import { validateLoginSchema, validateRegisterSchema } from './FormFormik'
import { Formik, Form } from 'formik'
import Login from './Login'
import Register from './Register'
import { supabase } from '../Auth/supabaseClient'

type ModalProfileProps = {
	closeModal: () => void
}

const ModalProfile = ({ closeModal }: ModalProfileProps) => {
	const [registry, setRegistry] = useState<boolean>(false)

	const handleLogin = () => {
		setRegistry(false)
	}

	const handleRegistry = () => {
		setRegistry(true)
	}

	const initialValues = registry
		? { name: '', email: '', password: '' }
		: { name: '', email: '' }

	const validationSchema = registry
		? validateRegisterSchema
		: validateLoginSchema

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
						const { error } = await supabase.auth.signInWithPassword({
							email: values.email,
							password: values.password ?? '',
						})
						if (error) {
							console.error('Ошибка входа', error.message)
							setStatus(error.message)
						} else {
							alert('Успешный вход')
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
						>
							<span className={styles['container__submit-text']}>
								{registry ? 'Зарегистрироваться' : 'Войти'}
							</span>
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ModalProfile
