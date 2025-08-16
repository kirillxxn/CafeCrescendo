import styles from '../ModalProfile.module.css'
import type { User } from '../../../store/UserStore'
type UserInfoProps = {
	user: User | null
}

const UserInfo = ({ user }: UserInfoProps) => {
	return (
		<>
			<div className={styles['user-info']}>
				<span className={styles['user__info-name']}>
					{user?.name || 'Инкогнито'}
				</span>
				<span className={styles['user__info-email']}>{user?.email}</span>
			</div>
		</>
	)
}

export default UserInfo
