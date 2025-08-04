import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import Modal from 'react-modal'
import ModalProfile from '../Modals/ModalProfile/ModalProfile'
import modalStyles from './Header.module.css'
import { useUserStore } from '../Modals/Auth/store/UserStore'
import avatarIcon from '/src/assets/icons/profileicon.png'
import avatarIconLogged from '/src/assets/icons/avatar.png'
import basketIcon from '/src/assets/icons/basketicon.png'
const Header = () => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const [isOpening, setIsOpening] = useState<boolean>(false)
	const { user, isLoggedIn } = useUserStore()
	const openModal = () => {
		document.body.style.overflow = 'hidden'
		setModalIsOpen(true)
		setIsClosing(false)
	}
	useEffect(() => {
		if (modalIsOpen) {
			const timeout = setTimeout(() => setIsOpening(true), 10)
			return () => clearTimeout(timeout)
		} else {
			setIsOpening(false)
		}
	}, [modalIsOpen])

	const closeModal = () => {
		document.body.style.overflow = ''
		setIsOpening(false)
		setIsClosing(true)

		setTimeout(() => {
			setModalIsOpen(false)
			setIsClosing(false)
		}, 300)
	}
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
						<button onClick={openModal} className={styles['container-button']}>
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
						<Modal
							isOpen={modalIsOpen}
							onRequestClose={closeModal}
							shouldCloseOnOverlayClick={true}
							overlayClassName={`
		${modalStyles.modalOverlay} 
		${isOpening ? modalStyles.modalOverlayActive : ''}
		${isClosing ? modalStyles.modalOverlayAfterClose : ''}
	`}
							className={`
		${modalStyles.modalContent} 
		${isOpening ? modalStyles.modalContentActive : ''}
		${isClosing ? modalStyles.modalContentAfterClose : ''}
	`}
							closeTimeoutMS={300}
						>
							<ModalProfile closeModal={closeModal} />
						</Modal>
						<button className={styles['container-button']}>
							<img
								className={styles['button-image']}
								src={basketIcon}
								alt='Иконка корзины'
							/>
							<p className={styles['button-text']}>Корзина</p>
						</button>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header
