import styles from '../ModalProfile.module.css'
import type { User } from '../../../store/UserStore'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import profileAvatar from '/src/assets/icons/avatar.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateUpdatePassword } from '../Forms/Validate/FormFormik'
import { supabase } from '../../../auth/supabase/supabaseClient'
import toast from 'react-hot-toast'
import UserInfo from './UserInfo'
type ProfileProps = {
	closeModal: () => void
	user: User | null
	logout: () => void
}
const Profile = ({ closeModal, user, logout }: ProfileProps) => {
	return (
		<div className={`${styles['modal']} ${styles['modal-profile']}`}>
			{/* Кнопка закрытия */}
			<button className={styles['modal__close-btn']} onClick={closeModal}>
				<img
					className={styles['close__btn-image']}
					src={closeButtonImg}
					alt='Иконка закрытия модального окна'
				/>
			</button>
			<div className={styles['profile']}>
				{/* Заголовок профиля */}
				<h2 className={styles['profile-title']}>Профиль</h2>
				{/* Аватар профиля */}
				<img
					className={styles['profile-avatar']}
					src={profileAvatar}
					alt='Картинка профиля'
				/>
				{/* Информация о пользователе */}
				<UserInfo user={user} />
				{/* Форма смены пароля */}
				<Formik
					initialValues={{ password: '' }}
					validationSchema={validateUpdatePassword}
					onSubmit={async (values, { resetForm }) => {
						const { error } = await supabase.auth.updateUser({
							password: values.password,
						})
						if (error) {
							toast.error(error.message)
						} else {
							toast.success('Пароль изменен')
							resetForm()
						}
					}}
				>
					{({ isValid, dirty }) => (
						<Form className={styles['form__updatepassword']}>
							{/* Поле нового пароля */}
							<Field
								className={styles['form__updatepassword-input']}
								name='password'
								placeholder='Введите новый пароль'
								type='password'
							/>
							{/* Сообщение об ошибке */}
							<ErrorMessage
								name='password'
								component='div'
								className={styles['form__error']}
							/>
							{/* Кнопки действий */}
							<div className={styles['btn__profile']}>
								{/* Кнопка сохранения пароля */}
								<button
									className={`${styles['form__submit-btn']} ${styles['btn__profile-action']}`}
									type='submit'
									disabled={!isValid || !dirty}
								>
									<span className={styles['form__submit-text']}>Сохранить</span>
								</button>
								{/* Кнопка выхода */}
								<button
									className={`${styles['form__submit-btn']} ${styles['btn__profile-action']}`}
									type='button'
									onClick={logout}
								>
									<span className={styles['form__submit-text']}>Выйти</span>
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
export default Profile
