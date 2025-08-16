import { useState } from 'react'
import { useBasketStore } from '../../store/ BasketStore'
import styles from './ModalBasket.module.css'
import closeButtonImg from '/src/assets/icons/closebutton.png'
import BuyOrder from './BuyOrder/BuyOrder'

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
		<div className={styles['modal_basket']}>
			<button
				onClick={() => closeModal()}
				className={styles['modal__close-btn']}
				aria-label='Закрыть корзину'
			>
				<img
					className={styles['close__btn-image']}
					src={closeButtonImg}
					alt='Иконка закрытия модального окна'
				/>
			</button>
			<h2 className={styles['modal_basket-title']}>
				{buy ? 'Оформление заказа' : 'Корзина'}
			</h2>

			{buy ? (
				<BuyOrder
					buy={buy}
					closeModal={closeModal}
					total={total}
					handleBuyButton={handleBuyButton}
				/>
			) : items.length === 0 ? (
				<div className={styles['basket__empty']}>
					<span>Корзина пуста</span>
				</div>
			) : (
				<div className={styles['basket__not-empty']}>
					{items.map(item => (
						<div key={item.id} className={styles['basket__item']}>
							<div className={styles['basket__item-info']}>
								{item.image && (
									<img
										className={styles['item__info-image']}
										src={item.image}
										alt={item.name}
									/>
								)}
								<div className={styles['item__info-description']}>
									<span className={styles['info__description-name']}>
										{item.name}
									</span>
									<span className={styles['info__description-quantity']}>
										Кол-во: {item.quantity} * {item.price}₽ ={' '}
										{item.quantity * item.price}₽
									</span>
								</div>
							</div>
							<div className={styles['basket__item-button']}>
								<button
									className={styles['item__button-remove']}
									onClick={() => removeToBasket(item.id)}
								>
									Удалить все
								</button>
								<button
									className={styles['item__button-remove']}
									onClick={() => removeToQuantity(item.id)}
								>
									Удалить
								</button>
							</div>
						</div>
					))}
					<div className={styles['item_container']}></div>
					<div className={styles['basket__result']}>
						<span className={styles['basket__result-sum']}>Итого:{total}₽</span>
						<button
							onClick={handleBuyButton}
							className={styles['basket__result-button']}
							aria-label='Оформить заказ'
						>
							<span className={styles['result_button-buy']}>
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
