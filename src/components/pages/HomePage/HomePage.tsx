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
		<>
			<main id='homepage' className={styles['main']}>
				<div className={styles['main__container']}>
					<div className={styles['container__marquee']}>
						<Marquee className={styles['marquee']} {...MarqueeConfig}>
							При регистрации новые пользователи получают скидку 10% на всю
							продукцию.
						</Marquee>
					</div>
					<MouseParallax {...MouseParallaxConfig}>
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
