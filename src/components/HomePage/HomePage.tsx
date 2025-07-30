import styles from './HomePage.module.css'
import { MouseParallax } from 'react-just-parallax'
const HomePage = () => {
	return (
		<>
			<main className={styles['main']}>
				<div className={styles['main__container']}>
					<MouseParallax
						isAbsolutelyPositioned={true}
						strength={0.01}
						lerpEase={0.05}
					>
						<span className={styles['main__container-logo']}>
							Café Crescendo
						</span>
					</MouseParallax>
					<span className={styles['shadow']}>Café Crescendo</span>
					<div className={styles['main__container-text']}>
						<h1 className={styles['container__text-title']}>
							Крепкий, насыщенный кофе на каждый день
						</h1>
						<span className={styles['container__text-subtitle']}>
							Отличный вариант для новичков. <br />
							Приобретайте наш френч-пресс в магазине Flat. <br />
							Скидка 50% при покупке кофе в пакетике.
						</span>
					</div>
				</div>
			</main>
		</>
	)
}

export default HomePage
