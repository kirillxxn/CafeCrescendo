import { useState } from 'react'
import styles from './OurCafe.module.css'
import RoomList from './RoomList'

const OurCafe = () => {
	const [slideSnow, setSlideSnow] = useState<boolean>(true)
	const [hideSlideSnow, setHideSlideShow] = useState<boolean>(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const prevSlide = () => {
		if (currentImageIndex === 0) {
			setCurrentImageIndex(RoomList.length - 1)
		} else {
			setCurrentImageIndex(currentImageIndex - 1)
		}
	}

	const nextSlide = () => {
		if (currentImageIndex === RoomList.length - 1) {
			setCurrentImageIndex(0)
		} else {
			setCurrentImageIndex(currentImageIndex + 1)
		}
	}

	const handleSlideSnow = () => {
		setSlideSnow(!slideSnow)
		setHideSlideShow(!hideSlideSnow)
	}

	return (
		<>
			<section id='ourcafe' className={styles['ourcafe__section']}>
				{slideSnow && (
					<div className={styles['ourcafe__section-container']}>
						<h2 className={styles['container__title']}>Наше кафе</h2>
						<p className={styles['container__subtitle']}>
							Кафе Café Crescendo House рядом с вами, где вы сможете насладиться
							лучшим выбором кофе, <br /> посетить места обжарки кофе вживую и
							насладиться умиротворяющей атмосферой кофейного поместья.
						</p>
						<button
							onClick={handleSlideSnow}
							className={styles['container__btn']}
						>
							<span className={styles['container__btn-text']}>Посмотреть</span>
						</button>
					</div>
				)}
				{hideSlideSnow && (
					<div className={styles['slider__section-container']}>
						<button className={styles['btn-prev']} onClick={prevSlide}>
							<img
								className={styles['btn__prev-image']}
								src='/src/assets/icons/arrow-left.svg'
								alt=''
							/>
						</button>
						<img
							className={styles['slider__image']}
							src={RoomList[currentImageIndex].image}
							alt={`Комната ${currentImageIndex + 1}`}
							loading='lazy'
						/>
						<button className={styles['btn-next']} onClick={nextSlide}>
							<img
								className={styles['btn__next-image']}
								src='/src/assets/icons/arrow-right.svg'
								alt=''
							/>
						</button>
						<button
							onClick={handleSlideSnow}
							className={styles['btn-hide-slider']}
						>
							<span className={styles['btn__hider-slider-text']}>Скрыть</span>
						</button>
					</div>
				)}
			</section>
		</>
	)
}
export default OurCafe
