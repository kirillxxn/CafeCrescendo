import { lazy, Suspense, useState } from 'react'
import 'yet-another-react-lightbox/styles.css'
import MenuList from './MenuList'
import styles from './Menu.module.css'
import { useBasketStore } from '../../store/ BasketStore'
import Preloader from '../Preloader/Preloader'

const Lightbox = lazy(() => import('yet-another-react-lightbox'))

type Props = {
	onAddToBasket: () => void
}
const Menu = ({ onAddToBasket }: Props) => {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0)
	const addToBasket = useBasketStore(state => state.addToBasket)
	const slides = MenuList.filter(item => item.image).map(item => ({
		src: item.image!,
		alt: item.name,
	}))
	const handleAddToBasket = (productId: number) => {
		addToBasket(productId)
		onAddToBasket()
	}
	return (
		<>
			<section id='menu' className={styles['menu']}>
				<nav className={styles['menu__nav']}>
					<ul className={styles['menu__list']}>
						{MenuList.map(item => (
							<li key={item.id} className={styles['menu__item']}>
								<h3 className={styles['menu__item-title']}>{item.name}</h3>
								{item.image && (
									<img
										className={styles['menu__item-image']}
										src={item.image}
										alt={item.name}
										loading='lazy'
										onClick={() => {
											const imageIndex = MenuList.filter(
												i => i.image
											).findIndex(i => i.image === item.image)
											setPhotoIndex(imageIndex)
											setIsLightboxOpen(true)
										}}
									/>
								)}
								<p className={styles['menu__item-description']}>
									{item.description}
								</p>
								<button
									onClick={() => handleAddToBasket(item.id)}
									className={styles['menu__item-button']}
									aria-label={`Добавить ${item.name} в корзину за ${item.price} ₽`}
								>
									<span className={styles['menu__button-text']}>
										{item.price} ₽
									</span>
								</button>
							</li>
						))}
					</ul>
				</nav>
			</section>
			<Suspense fallback={<Preloader component='Загрузка изображений' />}>
				<Lightbox
					open={isLightboxOpen}
					close={() => setIsLightboxOpen(false)}
					slides={slides}
					index={photoIndex}
				/>
			</Suspense>
		</>
	)
}
export default Menu
