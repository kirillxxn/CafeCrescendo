import Modal from 'react-modal'
import ModalProfile from '../ModalProfile'
import modalStyles from './Modal.module.css'
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'

export type TModals = {
	closeModal: () => void
	openModal: () => void
	isClosing: boolean
	isOpening: boolean
	modalIsOpen: boolean
}

const Modals = forwardRef<TModals>((_, ref) => {
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
		document.body.style.overflow = 'hidden'
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
			<ModalProfile closeModal={closeModal} />
		</Modal>
	)
})

export default Modals
