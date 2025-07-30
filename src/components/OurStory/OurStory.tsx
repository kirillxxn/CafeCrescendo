import styles from './OurStory.module.css'

const OurStory = () => {
	return (
		<>
			<section className={styles['ourstory__section']}>
				<div className={styles['ourstory__section-container']}>
					<h2 className={styles['container__title']}>Наша история</h2>
					<p className={styles['container__subtitle']}>
						Кафе Crescendo, основанное в 2033 году Муником Бисвасом и Шрути
						Бисвас, было создано с одной целью: создавать отличный и стабильный
						кофе и делиться им с как можно большим количеством людей. Наша цель
						— найти лучшие сорта обжарки. Они начали этот бизнес с 10-летнего
						сотрудничества, чтобы воплотить в жизнь свою юношескую идею — дарить
						людям лучший кофе. Теперь весь наш кофе оценивается в 86 баллов и
						выше: он свежий, как и положено, и идеально обжарен.
					</p>
					<button className={styles['container__btn']}>
						<span className={styles['container__btn-text']}>Читать</span>
					</button>
				</div>
			</section>
		</>
	)
}

export default OurStory
