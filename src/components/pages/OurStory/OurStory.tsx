import { useState } from 'react'
import styles from './OurStory.module.css'
import FullStory from './FullStory'
import arrowLeftImg from '/src/assets/icons/arrow-left.svg'
import arrowRightImg from '/src/assets/icons/arrow-right.svg'
const OurStory = () => {
	const [fullText, setFullText] = useState<boolean>(false)
	const [currentList, setCurrentList] = useState<number>(0)
	const toggleText = () => {
		setFullText(prev => !prev)
	}
	const prevList = () => {
		if (currentList > 0) {
			setCurrentList(currentList - 1)
		}
	}
	const nextList = () => {
		if (currentList < FullStory.length - 1) {
			setCurrentList(currentList + 1)
		}
	}
	return (
		<section id='ourstory' className={styles['ourstory']}>
			{!fullText ? (
				<div className={styles['ourstory__intro']}>
					<h2 className={styles['ourstory__title']}>Наша история</h2>
					<p className={styles['ourstory__description']}>
						Кафе Crescendo, основанное в 2003 году Муником Бисвасом и Шрути
						Бисвас, было создано с одной целью: создавать отличный и стабильный
						кофе и делиться им с как можно большим количеством людей. Наша цель
						— найти лучшие сорта обжарки. Они начали этот бизнес с 10-летнего
						сотрудничества, чтобы воплотить в жизнь свою юношескую идею — дарить
						людям лучший кофе. Теперь весь наш кофе оценивается в 86 баллов и
						выше: он свежий, как и положено, и идеально обжарен.
					</p>
					<button
						onClick={toggleText}
						className={styles['ourstory__toggle-btn']}
						aria-label='Читать полную историю'
					>
						<span className={styles['ourstory__toggle-text']}>Читать</span>
					</button>
				</div>
			) : (
				<div className={styles['ourstory__full']}>
					<p className={styles['ourstory__full-text']}>
						{FullStory[currentList]}
					</p>
					<div className={styles['ourstory__navigation']}>
						<button
							className={styles['ourstory__nav-btn']}
							onClick={prevList}
							disabled={currentList <= 0}
							aria-label='Предыдущая часть истории'
						>
							<img
								className={styles['ourstory__nav-icon']}
								src={arrowLeftImg}
								alt='Предыдущая часть'
							/>
						</button>
						<span className={styles['ourstory__counter']}>
							{currentList + 1} / {FullStory.length}
						</span>
						<button
							className={styles['ourstory__nav-btn']}
							onClick={nextList}
							disabled={currentList >= FullStory.length - 1}
							aria-label='Следующая часть истории'
						>
							<img
								className={styles['ourstory__nav-icon']}
								src={arrowRightImg}
								alt='Следующая часть'
							/>
						</button>
					</div>
					<button
						onClick={toggleText}
						className={`${styles['ourstory__toggle-btn']} ${styles['ourstory__toggle-btn--hide']}`}
						aria-label='Скрыть полную историю'
					>
						<span className={styles['ourstory__toggle-text']}>Скрыть</span>
					</button>
				</div>
			)}
		</section>
	)
}
export default OurStory
