import Modal from 'react-modal'
import type { TModals } from '../../TypeModals/TypeModals'
import modalStyles from './Modal.module.css'
import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import ModalBasket from '../ModalBasket'
const BasketModal = forwardRef<TModals>((_, ref) => {
	const [isClosing, setIsClosing] = useState(false)
	const [isOpening, setIsOpening] = useState(false)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	useEffect(() => {
		if (modalIsOpen) {
			const timeout = setTimeout(() => setIsOpening(true), 10)
			return () => clearTimeout(timeout)
		} else {
			setIsOpening(false)
		}
	}, [modalIsOpen])
	const closeModal = () => {
		document.body.style.overflow = ''
		setIsOpening(false)
		setIsClosing(true)
		setTimeout(() => {
			setModalIsOpen(false)
			setIsClosing(false)
		}, 300)
	}

	const openModal = () => {
		setModalIsOpen(true)
		setIsClosing(false)
		setIsOpening(true)
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
			overlayClassName={`
				${modalStyles.modalOverlay} 
				${isOpening ? modalStyles.modalOverlayActive : ''}
				${isClosing ? modalStyles.modalOverlayAfterClose : ''}
			`}
			className={`
				${modalStyles.modalContent} 
				${isOpening ? modalStyles.modalContentActive : ''}
				${isClosing ? modalStyles.modalContentAfterClose : ''}
			`}
			closeTimeoutMS={300}
		>
			<ModalBasket closeModal={closeModal} />
		</Modal>
	)
})

export default BasketModal
