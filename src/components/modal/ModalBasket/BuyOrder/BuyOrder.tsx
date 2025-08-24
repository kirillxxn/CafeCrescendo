import UserInfo from '../../ModalProfile/Profile/UserInfo'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateOrder } from '../../ModalProfile/Forms/Validate/FormFormik'
import toast from 'react-hot-toast'
import { useUserStore } from '../../../store/UserStore'
import { useBasketStore } from '../../../store/ BasketStore'
import styles from '../ModalBasket.module.css'
type TBuyOrderProps = {
	buy: boolean
	closeModal: () => void
	total: number
	handleBuyButton: () => void
}
const BuyOrder = ({ closeModal, total, handleBuyButton }: TBuyOrderProps) => {
	const { user, isLoggedIn } = useUserStore()
	const { resetBasket } = useBasketStore()
	const handleSubmit = () => {
		closeModal()
		toast.success(
			isLoggedIn ? 'Спасибо за покупку' : 'Заказ принят в обработку'
		)
		resetBasket()
	}
	return (
		<div className={styles['buy-order']}>
			{isLoggedIn && <UserInfo user={user} />}
			<Formik
				initialValues={{
					phone: '',
					...(!isLoggedIn && {
						name: '',
						email: '',
					}),
				}}
				validationSchema={validateOrder}
				onSubmit={handleSubmit}
			>
				{({ dirty, isValid }) => (
					<Form className={styles['buy-order__form']}>
						{!isLoggedIn && (
							<>
								<Field
									className={styles['buy-order__field']}
									type='text'
									name='name'
									placeholder='Ваше имя'
									required
								/>
								<ErrorMessage
									name='name'
									component='div'
									className={styles['buy-order__error']}
								/>
								<Field
									className={styles['buy-order__field']}
									type='email'
									name='email'
									placeholder='Ваш email'
									required
								/>
								<ErrorMessage
									name='email'
									component='div'
									className={styles['buy-order__error']}
								/>
							</>
						)}
						<Field
							className={styles['buy-order__field']}
							type='tel'
							name='phone'
							placeholder='+7 (XXX) XXX-XX-XX'
							required
						/>
						<ErrorMessage
							name='phone'
							component='div'
							className={styles['buy-order__error']}
						/>
						<div className={styles['buy-order__actions']}>
							<button
								onClick={handleBuyButton}
								className={styles['buy-order__back-btn']}
								aria-label='Вернуться'
							>
								<span className={styles['buy-order__back-text']}>
									Вернуться
								</span>
							</button>
							<button
								type='submit'
								className={styles['buy-order__submit-btn']}
								aria-label='Оформить заказ'
								disabled={!isValid || !dirty}
							>
								<span className={styles['buy-order__submit-text']}>
									{isLoggedIn ? 'Оформить' : 'Отправить заказ'}
								</span>
							</button>
						</div>
					</Form>
				)}
			</Formik>
			<div className={styles['buy-order__delivery']}>
				<iframe
					className={styles['buy-order__map']}
					src='https://yandex.ru/map-widget/v1/?um=constructor%3A0010577ee842b44cc46545929d9f0a2dad5653bc8c2017548508772a7cfbc353&amp;source=constructor'
				/>
				<span className={styles['buy-order__address']}>
					Самовывоз из магазина: <br /> Москва, улица Арбат, 11
				</span>
			</div>
			<span className={styles['buy-order__total']}>Итого:{total}₽</span>
		</div>
	)
}
export default BuyOrder
