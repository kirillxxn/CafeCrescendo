import logoGitHub from '/src/assets/icons/githublogo.png'
import styles from './Footer.module.css'
const Footer = () => {
	return (
		<>
			<footer className={styles['footer']}>
				<div className={styles['footer__container']}>
					<a className={styles['a']} href='https://github.com/kirillxxn'>
						<img
							className={styles['container__github-logo']}
							src={logoGitHub}
							alt='Логотип сайта GitHub'
						/>
					</a>
					<span className={styles['footer__container-text']}>
						made by kirillxxn
					</span>
				</div>
			</footer>
		</>
	)
}

export default Footer
