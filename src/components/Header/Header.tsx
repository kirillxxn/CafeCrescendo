import Logo from '../Logo/Logo'
import styles from './Header.module.css'
const Header = () => {
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['header__container']}>
					<Logo />
					<nav className={styles['container-nav']}>
						<ul className={styles['container__nav-list']}>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href='#'>
									Главная
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href='#menu'>
									Каталог
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href='#ourcafe'>
									О нас
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href='#team'>
									Наша команда
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href='#contacts'>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<div className={styles['header__container-button']}>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src='/src/assets/icons/profileicon.png'
								alt='Иконка личного кабинета'
							/>
						</button>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src='/src/assets/icons/basketicon.png'
								alt='Иконка корзины'
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header
