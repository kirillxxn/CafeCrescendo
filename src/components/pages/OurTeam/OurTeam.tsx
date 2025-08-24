import styles from './OurTeam.module.css'
import TeamList from './TeamList'
const OurTeam = () => {
	const getAgeEnding = (number: number) => {
		const cases = ['год', 'года', 'лет']
		return cases[
			number % 100 > 4 && number % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][Math.min(number % 10, 5)]
		]
	}
	return (
		<section id='team' className={styles['team']}>
			<div className={styles['team__container']}>
				<h2 className={styles['team__title']}>Наша команда</h2>
				<div className={styles['team__content']}>
					<ul className={styles['team__list']}>
						{TeamList.map(item => (
							<li className={styles['team__item']} key={item.id}>
								{item.image && (
									<img
										className={styles['team__item-image']}
										src={item.image}
										alt={`Фотография ${item.name}`}
										loading='lazy'
									/>
								)}
								<div className={styles['team__item-info']}>
									<h3 className={styles['team__item-name']}>{item.name}</h3>
									<p className={styles['team__item-age']}>
										{item.age} {getAgeEnding(item.age)}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
export default OurTeam
