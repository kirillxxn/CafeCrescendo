import styles from './OurCafe.module.css'

const OurCafe = () => {
	return (
		<>
			<section id='ourcafe' className={styles['ourcafe__section']}>
				<div className={styles['ourcafe__section-container']}>
					<h2 className={styles['container__title']}>Наше кафе</h2>
					<p className={styles['container__subtitle']}>
						Кафе Café Crescendo House рядом с вами, где вы сможете насладиться
						лучшим выбором кофе, <br /> посетить места обжарки кофе вживую и
						насладиться умиротворяющей атмосферой кофейного поместья.
					</p>
					<button className={styles['container__btn']}>
						<span className={styles['container__btn-text']}>Посмотреть</span>
					</button>
				</div>
			</section>
		</>
	)
}
export default OurCafe
