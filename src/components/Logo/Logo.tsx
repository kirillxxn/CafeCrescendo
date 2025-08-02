import styles from './Logo.module.css'
const Logo = () => {
	return (
		<>
			<a className={styles['logo__link']} href='#'>
				<img
					className={styles['logo__link-image']}
					src='/src/assets/icons/logo.png'
					alt='Логотип сайта'
				/>
			</a>
		</>
	)
}
export default Logo
