import logoGitHub from '/src/assets/icons/githublogo.png'
import styles from './Footer.module.css'
const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__container']}>
				<a
					className={styles['footer__link']}
					href='https://github.com/kirillxxn'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						className={styles['footer__github-logo']}
						src={logoGitHub}
						alt='Логотип GitHub'
					/>
				</a>
				<span className={styles['footer__text']}>made by kirillxxn</span>
			</div>
		</footer>
	)
}
export default Footer
