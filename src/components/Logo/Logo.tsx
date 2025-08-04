import styles from './Logo.module.css'
import logoImg from '/src/assets/icons/logo.png'
const Logo = () => {
	return (
		<>
			<a className={styles['logo__link']} href='#'>
				<img
					className={styles['logo__link-image']}
					src={logoImg}
					alt='Логотип сайта'
				/>
			</a>
		</>
	)
}
export default Logo
