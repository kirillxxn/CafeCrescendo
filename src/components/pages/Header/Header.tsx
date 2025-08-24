import { useRef } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import ProfileModals from '../../modal/ModalProfile/Modal/Modal'
import BasketModal from '../../modal/ModalBasket/Modal/Modal'
import type { TModals } from '../../modal/ModalProfile/TypeModals/TypeModals'
import { useUserStore } from '../../store/UserStore'
import avatarIcon from '/src/assets/icons/profileicon.png'
import avatarIconLogged from '/src/assets/icons/avatar.png'
import basketIcon from '/src/assets/icons/basketicon.png'
import { useBasketStore } from '../../store/ BasketStore'
const Header = () => {
	const { user, isLoggedIn } = useUserStore()
	const modalProfileRef = useRef<TModals>(null)
	const modalBasketRef = useRef<TModals>(null)
	const { getCount } = useBasketStore()
	const counter = getCount()
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['header__container']}>
					{/* Мобильная навигация */}
					<nav className={styles['header__mobile-nav']}>
						<input
							type='checkbox'
							id='burger-checkbox'
							className={styles['header__burger-checkbox']}
						/>
						<label
							htmlFor='burger-checkbox'
							className={styles['header__burger']}
						></label>
						<ul className={styles['header__mobile-list']}>
							<li className={styles['header__mobile-item']}>
								<a href='#' className={styles['header__mobile-link']}>
									Главная
								</a>
							</li>
							<li className={styles['header__mobile-item']}>
								<a href='#menu' className={styles['header__mobile-link']}>
									Каталог
								</a>
							</li>
							<li className={styles['header__mobile-item']}>
								<a href='#ourcafe' className={styles['header__mobile-link']}>
									Наше кафе
								</a>
							</li>
							<li className={styles['header__mobile-item']}>
								<a href='#team' className={styles['header__mobile-link']}>
									Наша команда
								</a>
							</li>
							<li className={styles['header__mobile-item']}>
								<a href='#contacts' className={styles['header__mobile-link']}>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<Logo />
					{/* Десктопная навигация */}
					<nav className={styles['header__desktop-nav']}>
						<ul className={styles['header__nav-list']}>
							<li className={styles['header__nav-item']}>
								<a className={styles['header__nav-link']} href='#'>
									Главная
								</a>
							</li>
							<li className={styles['header__nav-item']}>
								<a className={styles['header__nav-link']} href='#menu'>
									Каталог
								</a>
							</li>
							<li className={styles['header__nav-item']}>
								<a className={styles['header__nav-link']} href='#ourcafe'>
									Наше кафе
								</a>
							</li>
							<li className={styles['header__nav-item']}>
								<a className={styles['header__nav-link']} href='#team'>
									Наша команда
								</a>
							</li>
							<li className={styles['header__nav-item']}>
								<a className={styles['header__nav-link']} href='#contacts'>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					{/* Кнопка профиля */}
					<button
						onClick={() => modalProfileRef.current?.openModal()}
						className={styles['header__button']}
						aria-label='Открыть профиль'
					>
						<img
							className={styles['header__button-icon']}
							src={isLoggedIn ? avatarIconLogged : avatarIcon}
							alt='Иконка профиля'
						/>
						<span className={styles['header__button-text']}>
							{user ? user.name : 'Профиль'}
						</span>
					</button>
					{/* Кнопка корзины */}
					<button
						onClick={() => modalBasketRef.current?.openModal()}
						className={styles['header__button']}
						aria-label='Открыть корзину'
					>
						<img
							className={styles['header__button-icon']}
							src={basketIcon}
							alt='Иконка корзины'
						/>
						<span className={styles['header__button-text']}>Корзина</span>
						{counter > 0 && (
							<div className={styles['header__basket-counter']}>{counter}</div>
						)}
					</button>
				</div>
			</header>
			<ProfileModals ref={modalProfileRef} />
			<BasketModal ref={modalBasketRef} />
		</>
	)
}
export default Header
