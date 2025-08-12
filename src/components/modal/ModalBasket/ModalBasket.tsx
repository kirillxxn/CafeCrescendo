import styles from './ModalBasket.module.css'
import closeButtonImg from '/src/assets/icons/closebutton.png'
type ModalBasketProps = {
	closeModal: () => void
}
const ModalBasket = ({ closeModal }: ModalBasketProps) => {
	return (
		<>
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
				<h2 className={styles['modal_basket-title']}>Корзина</h2>
				<div className={styles['item_container']}></div>
				<div className={styles['basket__result']}>
					<span className={styles['basket__result-sum']}>Итого:</span>
					<button
						className={styles['basket__result-button']}
						aria-label='Оформить заказ'
					>
						<span className={styles['result_button-buy']}>Оформить</span>
					</button>
				</div>
			</div>
		</>
	)
}
export default ModalBasket
