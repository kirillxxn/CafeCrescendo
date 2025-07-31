import styles from './Header.module.css'
const Header = () => {
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['header__container']}>
					<a className={styles['container__logo-link']} href='#'>
						<span className={styles['header__container-logo']}>
							Café <br />
							<span className={styles['container__logo-crescendo']}>
								Crescendo
							</span>
						</span>
					</a>

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
								<a className={styles['list__item-link']} href=''>
									Наша команда
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href=''>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<div className={styles['header__container-button']}>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src='/src/assets/icons/profileicon.svg'
								alt='Иконка личного кабинета'
							/>
						</button>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src='/src/assets/icons/basketicon.svg'
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
