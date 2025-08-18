import { useEffect, useState } from 'react'
import styles from './OurCafe.module.css'
import RoomList from './RoomList'
import arrowLeftImg from '/src/assets/icons/arrow-left.svg'
import arrowRightImg from '/src/assets/icons/arrow-right.svg'
const OurCafe = () => {
	const [slideShow, setSlideShow] = useState<boolean>(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const toggleSlide = () => {
		setSlideShow(prev => !prev)
	}
	useEffect(() => {
		const preloadImage = (images: string[]) => {
			images.forEach(imageSrc => (new Image().src = imageSrc))
		}
		preloadImage(RoomList.map(room => room.image))
	}, [])
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

	return (
		<>
			<section id='ourcafe' className={styles['ourcafe__section']}>
				{!slideShow ? (
					<div className={styles['ourcafe__section-container']}>
						<h2 className={styles['container__title']}>Наше кафе</h2>
						<p className={styles['container__subtitle']}>
							Кафе Café Crescendo House рядом с вами, где вы сможете насладиться
							лучшим выбором кофе, <br /> посетить места обжарки кофе вживую и
							насладиться умиротворяющей атмосферой кофейного поместья.
						</p>
					</div>
				) : (
					<div className={styles['slider__section-container']}>
						<button className={styles['btn-prev']} onClick={prevSlide}>
							<img
								className={styles['btn__prev-image']}
								src={arrowLeftImg}
								alt='Иконка кнопки для переключения предыдущего изображения'
							/>
						</button>
						<img
							className={styles['slider__image']}
							src={RoomList[currentImageIndex].image}
						/>
						<button className={styles['btn-next']} onClick={nextSlide}>
							<img
								className={styles['btn__next-image']}
								src={arrowRightImg}
								alt='Иконка кнопки для переключения следующего изображения'
							/>
						</button>
					</div>
				)}
				<button onClick={toggleSlide} className={styles['container__btn']}>
					<span className={styles['btn-action']}>
						{!slideShow ? 'Посмотреть' : 'Скрыть'}
					</span>
				</button>
			</section>
		</>
	)
}
export default OurCafe
