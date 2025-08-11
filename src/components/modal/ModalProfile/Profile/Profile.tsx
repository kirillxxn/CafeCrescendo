import styles from '../ModalProfile.module.css'
import type { User } from '../../../auth/store/UserStore'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import profileAvatarImg from '/src/assets/icons/avatar.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateUpdatePassword } from '../Forms/Validate/FormFormik'
import { supabase } from '../../../auth/supabase/supabaseClient'
import toast from 'react-hot-toast'
type ProfileProps = {
	closeModal: () => void
	user: User | null
	logout: () => void
}
const Profile = ({ closeModal, user, logout }: ProfileProps) => {
	return (
		<>
			<div className={`${styles['modal']} ${styles['modal-profile']}`}>
				<button className={styles['modal__close-btn']} onClick={closeModal}>
					<img
						className={styles['close__btn-image']}
						src={closeButtonImg}
						alt='Иконка закрытия модального окна'
					/>
				</button>
				<div className={styles['profile']}>
					<h2 className={styles['profile-title']}>Профиль</h2>
					<img
						className={styles['profile-avatar']}
						src={profileAvatarImg}
						alt='Картинка профиля'
					/>
					<div className={styles['user-info']}>
						<span className={styles['user__info-name']}>
							{user?.name || 'Инкогнито'}
						</span>
						<span className={styles['user__info-email']}>{user?.email}</span>
					</div>
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
						{({ isSubmitting, isValid, dirty }) => (
							<Form className={styles['form__updatepassword']}>
								<Field
									className={styles['form__updatepassword-input']}
									name='password'
									placeholder='Введите новый пароль'
									type='password'
								/>
								<ErrorMessage
									name='password'
									component='div'
									className={styles['div-error']}
								/>
								<div className={styles['btn__profile']}>
									<button
										className={`${styles['form__container-submit']} ${styles['btn__profile-action']}`}
										type='submit'
										disabled={!isValid || !dirty || isSubmitting}
									>
										<span className={styles['container__submit-text']}>
											Сохранить
										</span>
									</button>
									<button
										className={`${styles['form__container-submit']} ${styles['btn__profile-action']}`}
										type='button'
										onClick={logout}
									>
										<span className={styles['container__submit-text']}>
											Выйти
										</span>
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}
export default Profile
