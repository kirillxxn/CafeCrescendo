import Logo from '/src/assets/icons/logo.png'
import styles from './Contacts.module.css'
import mapLocationIcon from '/src/assets/icons/map-location-icon.png'
import telegramIcon from '/src/assets/icons/telegramicon.png'
import whatsAppIcon from '/src/assets/icons/whatsappicon.png'
import vkIcon from '/src/assets/icons/vkicon.png'
import emailIcon from '/src/assets/icons/emailicon.png'
import BasketModal from '../../modal/ModalBasket/Modal/Modal'
import { useRef } from 'react'
import type { TModals } from '../../modal/ModalProfile/TypeModals/TypeModals'
const Contacts = () => {
	const modalBasketRef = useRef<TModals>(null)
	return (
		<>
			<section id='contacts' className={styles['contacts__section']}>
				<div className={styles['contacts__section-container']}>
					<div className={styles['container__address-info']}>
						<address className={styles['address-info']}>
							<img
								className={styles['address-icon']}
								src={mapLocationIcon}
								alt='Иконка карты'
							/>
							Москва, улица Арбат 11, офис 1
						</address>
						<a className={styles['address-phone']} href='tel:+01234567890'>
							+0 (123) 456 78-90
						</a>
					</div>
					<div className={styles['container__map-action']}>
						<iframe
							className={styles['container-map']}
							src='https://yandex.ru/map-widget/v1/?um=constructor%3A0010577ee842b44cc46545929d9f0a2dad5653bc8c2017548508772a7cfbc353&amp;source=constructor'
							height='400'
						></iframe>
						<div className={styles['container__action']}>
							<img
								className={styles['action-logo']}
								src={Logo}
								alt='Логотип сайта'
							/>
							<button
								onClick={() => modalBasketRef.current?.openModal()}
								className={styles['action__btn-order']}
								aria-label='Кнопка оформления заказа'
							>
								Оформить заказ
							</button>
							<nav>
								<ul className={styles['container__nav-list']}>
									<li>
										<a target='_blank' href='https://t.me/thismyteIegram'>
											<img
												className={styles['social-icon']}
												src={telegramIcon}
												alt=''
											/>
										</a>
									</li>
									<li>
										<a target='_blank' href='https://wa.me/79773118312'>
											<img
												className={styles['social-icon']}
												src={whatsAppIcon}
												alt=''
											/>
										</a>
									</li>
									<li>
										<a target='_blank' href='https://m.vk.com/i__vladimirovich'>
											<img
												className={styles['social-icon']}
												src={vkIcon}
												alt=''
											/>
										</a>
									</li>
									<li>
										<a target='_blank' href='mailto:the@kirillxxn.ru'>
											<img
												className={styles['social-icon']}
												src={emailIcon}
												alt=''
											/>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</section>
			<BasketModal ref={modalBasketRef} />
		</>
	)
}
export default Contacts
