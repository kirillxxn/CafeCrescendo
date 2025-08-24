import styles from './HomePage.module.css'
import { MouseParallax } from 'react-just-parallax'
import Marquee from 'react-fast-marquee'
type TMouseParallax = {
	isAbsolutelyPositioned?: boolean
	strength: number
	lerpEase: number
}
type TMarquee = {
	speed: number
	direction: 'left' | 'right' | 'up' | 'down'
	delay: number
	gradient: boolean
}
const HomePage = () => {
	const MouseParallaxConfig: TMouseParallax = {
		isAbsolutelyPositioned: true,
		strength: 0.01,
		lerpEase: 0.05,
	}
	const MarqueeConfig: TMarquee = {
		speed: 100,
		direction: 'left',
		delay: 0,
		gradient: false,
	}
	return (
		<main id='homepage' className={styles['home']}>
			<div className={styles['home__container']}>
				{/* Бегущая строка */}
				<div className={styles['home__marquee-container']}>
					<Marquee className={styles['home__marquee']} {...MarqueeConfig}>
						При регистрации новые пользователи получают скидку 10% на всю
						продукцию.
					</Marquee>
				</div>
				{/* Параллакс логотип */}
				<MouseParallax {...MouseParallaxConfig}>
					<span className={styles['home__logo']}>Café Crescendo</span>
				</MouseParallax>
				{/* Тень логотипа */}
				<span className={styles['home__logo-shadow']}>Café Crescendo</span>
				{/* Текстовый блок */}
				<div className={styles['home__text-block']}>
					<h1 className={styles['home__title']}>
						Крепкий, насыщенный кофе на каждый день
					</h1>
					<span className={styles['home__subtitle']}>
						Отличный вариант для новичков. <br />
						Приобретайте наш френч-пресс в магазине Flat. <br />
						Скидка 50% при покупке кофе в пакетике.
					</span>
				</div>
			</div>
		</main>
	)
}
export default HomePage
