import Logo from '../Logo/Logo'
import logoGitHub from '/src/assets/icons/githublogo.png'
import styles from './Footer.module.css'
const Footer = () => {
	return (
		<>
			<footer className={styles['footer']}>
				<div className={styles['footer__container']}>
					<Logo />
					<span className={styles['footer__container-text']}>
						made by kirillxxn
					</span>
					<a href='https://github.com/kirillxxn'>
						<img
							className={styles['container__github-logo']}
							src={logoGitHub}
							alt='Логотип сайта GitHub'
						/>
					</a>
				</div>
			</footer>
		</>
	)
}

export default Footer
