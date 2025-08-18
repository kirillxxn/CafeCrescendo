import MenuList from './MenuList'
import styles from './Menu.module.css'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useBasketStore } from '../../store/ BasketStore'
type Props = {
	onAddToBasket: () => void
}
const Menu = ({ onAddToBasket }: Props) => {
	const addToBasket = useBasketStore(state => state.addToBasket)

	const handleAddToBasket = (productId: number) => {
		addToBasket(productId)
		onAddToBasket()
	}
	return (
		<>
			<section id='menu' className={styles['menu__page']}>
				<nav className={styles['menu']}>
					<ul className={styles['menu__list']}>
						{MenuList.map(item => (
							<li key={item.id} className={styles['menu__item']}>
								<h3 className={styles['menu__item-name']}>{item.name}</h3>
								<a data-fancybox='gallery' href={item.image}>
									{item.image && (
										<img
											className={styles['menu__item-image']}
											src={item.image}
											alt={item.name}
											loading='lazy'
										/>
									)}
								</a>
								<p className={styles['menu__item-description']}>
									{item.description}
								</p>
								<button
									onClick={() => handleAddToBasket(item.id)}
									className={styles['menu__item-button']}
								>
									<span className={styles['item__button-text']}>
										{item.price} ₽
									</span>
								</button>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</>
	)
}
export default Menu
