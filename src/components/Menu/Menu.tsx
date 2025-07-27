import { useEffect, useState } from 'react'
import { Fancybox as FancyboxLib } from '@fancyapps/ui'
import styles from './Menu.module.css'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import MenuList from './MenuList'
const Menu = () => {
	const [showNotification, setSnowNotification] = useState<boolean>(false)
	useEffect(() => {
		FancyboxLib.bind("[data-fancybox='gallery']", {})
		return () => {
			FancyboxLib.unbind("[data-fancybox='gallery']")
		}
	}, [])
	const handleSnowNotification = () => {
		setSnowNotification(true)
		setTimeout(() => {
			setSnowNotification(false)
		}, 2000)
	}
	return (
		<>
			<div className={styles['menu__page']}>
				{showNotification && (
					<div className={styles['notification']}>В корзине</div>
				)}
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
									onClick={handleSnowNotification}
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
			</div>
		</>
	)
}
export default Menu
