import styles from '../ModalProfile.module.css'
import type { User } from '../../Auth/store/UserStore'

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
		</>
	)
}
export default Profile
