import { useState } from 'react'
import styles from './OurStory.module.css'
import FullStory from './FullStory'
const OurStory = () => {
	const [text, setText] = useState<boolean>(true)
	const [fullText, setFullText] = useState<boolean>(false)
	const [currentList, setCurrentList] = useState<number>(0)
	const handleText = () => {
		setText(!text)
		setFullText(!fullText)
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
		<>
			<section className={styles['ourstory__section']}>
				{text && (
					<div className={styles['ourstory__section-container']}>
						<h2 className={styles['container__title']}>Наша история</h2>
						<p className={styles['container__subtitle']}>
							Кафе Crescendo, основанное в 2003 году Муником Бисвасом и Шрути
							Бисвас, было создано с одной целью: создавать отличный и
							стабильный кофе и делиться им с как можно большим количеством
							людей. Наша цель — найти лучшие сорта обжарки. Они начали этот
							бизнес с 10-летнего сотрудничества, чтобы воплотить в жизнь свою
							юношескую идею — дарить людям лучший кофе. Теперь весь наш кофе
							оценивается в 86 баллов и выше: он свежий, как и положено, и
							идеально обжарен.
						</p>
						<button onClick={handleText} className={styles['container__btn']}>
							<span className={styles['container__btn-text']}>Читать</span>
						</button>
					</div>
				)}
				{fullText && (
					<div className={styles['fulltext__section-container']}>
						<p className={styles['container__fulltext']}>
							{FullStory[currentList]}
						</p>
						<button
							className={styles['btn__fulltext-prev']}
							onClick={prevList}
							disabled={currentList <= 0}
						>
							<img
								className={styles['btn__prev-fulltext']}
								src='/src/assets/icons/arrow-left.svg'
								alt=''
							/>
						</button>
						<button
							className={styles['btn__fulltext-next']}
							onClick={nextList}
							disabled={currentList >= FullStory.length - 1}
						>
							<img
								className={styles['btn__next-fulltext']}
								src='/src/assets/icons/arrow-right.svg'
								alt=''
							/>
						</button>
						<button onClick={handleText} className={styles['fulltext__btn']}>
							<span className={styles['fulltext__btn-text']}>Скрыть</span>
						</button>
					</div>
				)}
			</section>
		</>
	)
}

export default OurStory
