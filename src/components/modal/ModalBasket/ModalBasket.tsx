import { lazy, Suspense, useState } from 'react'
import { useBasketStore } from '../../store/ BasketStore'
import styles from './ModalBasket.module.css'
import closeButtonImg from '/src/assets/icons/closebutton.png'

const BuyOrder = lazy(() => import('./BuyOrder/BuyOrder'))

export type ModalBasketProps = {
	closeModal: () => void
}
const ModalBasket = ({ closeModal }: ModalBasketProps) => {
	const { items, removeToBasket, removeToQuantity, getTotal } = useBasketStore()
	const total = getTotal()
	const [buy, setBuy] = useState(false)
	const handleBuyButton = () => {
		setBuy(!buy)
	}
	return (
		<div className={styles['modal-basket']}>
			<button
				onClick={() => closeModal()}
				className={styles['modal-basket__close-btn']}
				aria-label='Закрыть корзину'
			>
				<img
					className={styles['modal-basket__close-icon']}
					src={closeButtonImg}
					alt='Иконка закрытия модального окна'
				/>
			</button>
			<h2 className={styles['modal-basket__title']}>
				{buy ? 'Оформление заказа' : 'Корзина'}
			</h2>
			{buy ? (
				<Suspense fallback={null}>
					<BuyOrder
						buy={buy}
						closeModal={closeModal}
						total={total}
						handleBuyButton={handleBuyButton}
					/>
				</Suspense>
			) : items.length === 0 ? (
				<div className={styles['modal-basket__empty']}>
					<span className={styles['modal-basket__empty-text']}>
						Корзина пуста
					</span>
				</div>
			) : (
				<div className={styles['modal-basket__content']}>
					{items.map(item => (
						<div key={item.id} className={styles['modal-basket__item']}>
							<div className={styles['modal-basket__item-info']}>
								{item.image && (
									<img
										className={styles['modal-basket__item-image']}
										src={item.image}
										alt={item.name}
									/>
								)}
								<div className={styles['modal-basket__item-details']}>
									<span className={styles['modal-basket__item-name']}>
										{item.name}
									</span>
									<span className={styles['modal-basket__item-quantity']}>
										Кол-во: {item.quantity} * {item.price}₽ ={' '}
										{item.quantity * item.price}₽
									</span>
								</div>
							</div>
							<div className={styles['modal-basket__item-actions']}>
								<button
									className={styles['modal-basket__action-btn']}
									onClick={() => removeToBasket(item.id)}
								>
									Удалить все
								</button>
								<button
									className={styles['modal-basket__action-btn']}
									onClick={() => removeToQuantity(item.id)}
								>
									Удалить
								</button>
							</div>
						</div>
					))}
					<div className={styles['modal-basket__spacer']}></div>
					<div className={styles['modal-basket__footer']}>
						<span className={styles['modal-basket__total']}>
							Итого:{total}₽
						</span>
						<button
							onClick={handleBuyButton}
							className={styles['modal-basket__checkout-btn']}
							aria-label='Оформить заказ'
						>
							<span className={styles['modal-basket__checkout-text']}>
								Перейти к оформлению
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default ModalBasket
