import Modal from 'react-modal'
import type { TModals } from '../../ModalProfile/TypeModals/TypeModals'
import modalStyles from './Modal.module.css'
import {
	useEffect,
	useState,
	forwardRef,
	useImperativeHandle,
	lazy,
	Suspense,
} from 'react'
import Preloader from '../../../pages/Preloader/Preloader'

const ModalBasket = lazy(() => import('../ModalBasket'))

Modal.setAppElement('#root')
const BasketModal = forwardRef<TModals>((_, ref) => {
	const [isClosing, setIsClosing] = useState(false)
	const [isOpening, setIsOpening] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	{
		/* Управление анимациями открытия/закрытия */
	}
	useEffect(() => {
		if (modalIsOpen) {
			const timeout = setTimeout(() => setIsOpening(true), 10)
			return () => clearTimeout(timeout)
		} else {
			setIsOpening(false)
		}
	}, [modalIsOpen])
	{
		/* Закрытие модального окна */
	}
	const closeModal = () => {
		document.body.style.overflow = ''
		setIsOpening(false)
		setIsClosing(true)
		setTimeout(() => {
			setModalIsOpen(false)
			setIsClosing(false)
		}, 300)
	}
	{
		/* Открытие модального окна */
	}
	const openModal = () => {
		document.body.style.overflow = 'hidden'
		setModalIsOpen(true)
		setIsClosing(false)
	}
	{
		/* Передача методов внешнему компоненту */
	}
	useImperativeHandle(ref, () => ({
		openModal,
		closeModal,
		isClosing,
		isOpening,
		modalIsOpen,
	}))
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			overlayClassName={`
${modalStyles.modal__overlay} 
${isOpening ? modalStyles['modal__overlay--active'] : ''}
${isClosing ? modalStyles['modal__overlay--closing'] : ''}
`}
			className={`
${modalStyles.modal__content} 
${isOpening ? modalStyles['modal__content--active'] : ''}
${isClosing ? modalStyles['modal__content--closing'] : ''}
`}
			closeTimeoutMS={300}
			ariaHideApp={true}
			aria={{
				modal: true,
				labelledby: 'basket-modal-title',
				describedby: 'basket-modal-description',
			}}
		>
			<Suspense fallback={<Preloader component='Загрузка корзины' />}>
				<ModalBasket closeModal={closeModal} />
			</Suspense>
		</Modal>
	)
})
BasketModal.displayName = 'BasketModal'
export default BasketModal
