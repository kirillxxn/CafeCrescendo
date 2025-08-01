import styles from './Contacts.module.css'

const Contacts = () => {
	return (
		<>
			<section id='contacts' className={styles['contacts__section']}>
				<div className={styles['contact__section-container']}>
					<iframe
						className={styles['container-map']}
						src='https://yandex.ru/map-widget/v1/?um=constructor%3A0010577ee842b44cc46545929d9f0a2dad5653bc8c2017548508772a7cfbc353&amp;source=constructor'
						height='400'
					></iframe>
					<div className={styles['address__container']}>
						<h3 className={styles['address__container-title']}>contact</h3>
						<a
							className={styles['address__container-contacts']}
							href='tel:+01234567890'
						>
							+0 (123) 456 78-90
						</a>
						<a
							className={styles['address__container-contacts']}
							href='mailto:cafecrescendo@cres.com'
						>
							cafecrescendo@cres.com
						</a>
					</div>

					<img
						className={styles['coffee__bean']}
						src='/src/assets/icons/coffeebean.png'
						alt=''
					/>
				</div>
			</section>
		</>
	)
}
export default Contacts
