import Logo from '/src/assets/icons/logo.png'
import styles from './Contacts.module.css'
import mapLocationIcon from '/src/assets/icons/map-location-icon.png'
import telegramIcon from '/src/assets/icons/telegramicon.png'
import whatsAppIcon from '/src/assets/icons/whatsappicon.png'
import vkIcon from '/src/assets/icons/vkicon.png'
import emailIcon from '/src/assets/icons/emailicon.png'
import { lazy, Suspense, useRef } from 'react'
import type { TModals } from '../../modal/ModalProfile/TypeModals/TypeModals'
import Preloader from '../Preloader/Preloader'

const BasketModal = lazy(() => import('../../modal/ModalBasket/Modal/Modal'))

const Contacts = () => {
	const modalBasketRef = useRef<TModals>(null)
	return (
		<>
			{/* Секция контактов */}
			<section id='contacts' className={styles['contacts']}>
				<div className={styles['contacts__container']}>
					{/* Блок с контактной информацией */}
					<div className={styles['contacts__info']}>
						<address className={styles['contacts__address']}>
							<img
								className={styles['contacts__address-icon']}
								src={mapLocationIcon}
								alt='Иконка карты'
							/>
							Москва, улица Арбат 11, офис 1
						</address>
						<a className={styles['contacts__phone']} href='tel:+01234567890'>
							+0 (123) 456 78-90
						</a>
					</div>
					{/* Блок с картой и действиями */}
					<div className={styles['contacts__map-action']}>
						<iframe
							className={styles['contacts__map']}
							src='https://yandex.ru/map-widget/v1/?um=constructor%3A0010577ee842b44cc46545929d9f0a2dad5653bc8c2017548508772a7cfbc353&amp;source=constructor'
							height='400'
							title='Карта расположения кафе'
							loading='lazy'
						></iframe>
						{/* Блок с кнопкой и соцсетями */}
						<div className={styles['contacts__action']}>
							<img
								className={styles['contacts__logo']}
								src={Logo}
								alt='Логотип Café Crescendo'
							/>
							{/* Кнопка оформления заказа */}
							<button
								onClick={() => modalBasketRef.current?.openModal()}
								className={styles['contacts__order-btn']}
								aria-label='Оформить заказ'
							>
								Оформить заказ
							</button>
							{/* Социальные сети */}
							<nav
								className={styles['contacts__social']}
								aria-label='Социальные сети'
							>
								<ul className={styles['contacts__social-list']}>
									<li className={styles['contacts__social-item']}>
										<a
											target='_blank'
											href='https://t.me/thismyteIegram'
											rel='noopener noreferrer'
										>
											<img
												className={styles['contacts__social-icon']}
												src={telegramIcon}
												alt='Telegram'
											/>
										</a>
									</li>
									<li className={styles['contacts__social-item']}>
										<a
											target='_blank'
											href='https://wa.me/79773118312'
											rel='noopener noreferrer'
										>
											<img
												className={styles['contacts__social-icon']}
												src={whatsAppIcon}
												alt='WhatsApp'
											/>
										</a>
									</li>
									<li className={styles['contacts__social-item']}>
										<a
											target='_blank'
											href='https://m.vk.com/i__vladimirovich'
											rel='noopener noreferrer'
										>
											<img
												className={styles['contacts__social-icon']}
												src={vkIcon}
												alt='VKontakte'
											/>
										</a>
									</li>
									<li className={styles['contacts__social-item']}>
										<a
											target='_blank'
											href='mailto:the@kirillxxn.ru'
											rel='noopener noreferrer'
										>
											<img
												className={styles['contacts__social-icon']}
												src={emailIcon}
												alt='Email'
											/>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</section>
			{/* Модальное окно корзины */}
			<Suspense fallback={<Preloader component='Загрузка корзины' />}>
				<BasketModal ref={modalBasketRef} />
			</Suspense>
		</>
	)
}
export default Contacts
