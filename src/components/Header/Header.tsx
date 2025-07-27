import styles from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['header__container']}>
					<span className={styles['header__container-logo']}>
						Café <br /> Crescendo
					</span>
					<nav className={styles['container-nav']}>
						<ul className={styles['container__nav-list']}>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href=''>
									Магазин
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href=''>
									Меню
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href=''>
									Наша команда
								</a>
							</li>
							<li className={styles['nav__list-item']}>
								<a className={styles['list__item-link']} href=''>
									О нас
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
								alt=''
							/>
						</button>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src='/src/assets/icons/basketicon.svg'
								alt=''
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
