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
		setCurrentImageIndex(prevIndex =>
			prevIndex === 0 ? RoomList.length - 1 : prevIndex - 1
		)
	}
	const nextSlide = () => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === RoomList.length - 1 ? 0 : prevIndex + 1
		)
	}
	return (
		<section id='ourcafe' className={styles['ourcafe']}>
			{!slideShow ? (
				<div className={styles['ourcafe__intro']}>
					<h2 className={styles['ourcafe__title']}>Наше кафе</h2>
					<p className={styles['ourcafe__description']}>
						Кафе Café Crescendo House рядом с вами, где вы сможете насладиться
						лучшим выбором кофе, <br /> посетить места обжарки кофе вживую и
						насладиться умиротворяющей атмосферой кофейного поместья.
					</p>
				</div>
			) : (
				<div className={styles['ourcafe__slider']}>
					<button
						className={styles['ourcafe__slider-btn']}
						onClick={prevSlide}
						aria-label='Предыдущее изображение'
					>
						<img
							className={styles['ourcafe__slider-arrow']}
							src={arrowLeftImg}
							alt='Предыдущее изображение'
						/>
					</button>
					<img
						className={styles['ourcafe__slider-image']}
						src={RoomList[currentImageIndex].image}
						alt={`Интерьер кафе - фото ${currentImageIndex + 1}`}
					/>
					<button
						className={`${styles['ourcafe__slider-btn']} ${styles['ourcafe__slider-btn--next']}`}
						onClick={nextSlide}
						aria-label='Следующее изображение'
					>
						<img
							className={styles['ourcafe__slider-arrow']}
							src={arrowRightImg}
							alt='Следующее изображение'
						/>
					</button>
				</div>
			)}
			<button
				onClick={toggleSlide}
				className={styles['ourcafe__toggle-btn']}
				aria-label={!slideShow ? 'Посмотреть галерею' : 'Скрыть галерею'}
			>
				<span className={styles['ourcafe__toggle-text']}>
					{!slideShow ? 'Посмотреть' : 'Скрыть'}
				</span>
			</button>
		</section>
	)
}
export default OurCafe
