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
					<nav className={styles['container-nav-mobile']}>
						<input
							type='checkbox'
							id='burger-checkbox'
							className={styles['burger-checkbox']}
						/>
						<label
							htmlFor='burger-checkbox'
							className={styles['burger']}
						></label>
						<ul className={styles['container__nav-list-mobile']}>
							<li>
								<a href='#' className={styles['list__item-link-mobile']}>
									Главная
								</a>
							</li>
							<li>
								<a href='#menu' className={styles['list__item-link-mobile']}>
									Каталог
								</a>
							</li>
							<li>
								<a href='#ourcafe' className={styles['list__item-link-mobile']}>
									Наше кафе
								</a>
							</li>
							<li>
								<a href='#team' className={styles['list__item-link-mobile']}>
									Наша команда
								</a>
							</li>
							<li>
								<a
									href='#contacts'
									className={styles['list__item-link-mobile']}
								>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<Logo />
					<nav className={styles['container__nav-desktop']}>
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
									Наше кафе
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

					<button
						onClick={() => modalProfileRef.current?.openModal()}
						className={styles['container-button']}
					>
						{isLoggedIn ? (
							<img
								className={styles['button-image']}
								src={avatarIconLogged}
								alt='Иконка личного кабинета'
							/>
						) : (
							<img
								className={styles['button-image']}
								src={avatarIcon}
								alt='Иконка личного кабинета'
							/>
						)}
						<p className={styles['button-text']}>
							{user ? user.name : 'Профиль'}
						</p>
					</button>

					<button
						onClick={() => modalBasketRef.current?.openModal()}
						className={styles['container-button']}
					>
						<img
							className={styles['button-image']}
							src={basketIcon}
							alt='Иконка корзины'
						/>
						<p className={styles['button-text']}>Корзина</p>
						<div className={styles['basket-counter']}>{counter}</div>
					</button>
				</div>
			</header>
			<ProfileModals ref={modalProfileRef} />
			<BasketModal ref={modalBasketRef} />
		</>
	)
}
export default Header
