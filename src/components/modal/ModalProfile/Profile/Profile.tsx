import styles from '../ModalProfile.module.css'
import type { User } from '../../../auth/store/UserStore'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import profileAvatarImg from '/src/assets/icons/avatar.png'
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
