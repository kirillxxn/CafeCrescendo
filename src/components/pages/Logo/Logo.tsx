import styles from './Logo.module.css'
import logoImg from '/src/assets/icons/logo.png'
const Logo = () => {
	return (
		<a className={styles['logo']} href='#' aria-label='На главную страницу'>
			<img
				className={styles['logo__image']}
				src={logoImg}
				alt='Логотип Café Crescendo'
			/>
		</a>
	)
}
export default Logo
