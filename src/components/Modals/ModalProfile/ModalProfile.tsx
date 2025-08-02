import { useState } from 'react'
import styles from './ModalProfile.module.css'

type ModalProfileProps = {
	closeModal: () => void
}

const ModalProfile = ({ closeModal }: ModalProfileProps) => {
	const [registry, setRegistry] = useState<boolean>(false)
	const handleLogin = () => {
		setRegistry(false)
	}
	const handleRegistry = () => {
		setRegistry(true)
	}
	return (
		<>
			<div className={styles['modal']}>
				<div className={styles['modal__select-actions']}>
					<button
						onClick={handleLogin}
						className={styles['select__action-btn']}
					>
						Вход
					</button>
					<button
						onClick={handleRegistry}
						className={styles['select__action-btn']}
					>
						Регистрация
					</button>
				</div>
				<button className={styles['modal__close-btn']} onClick={closeModal}>
					<img
						className={styles['close__btn-image']}
						src='/src/assets/icons/closebutton.png'
						alt='Иконка закрытия модального окна'
					/>
				</button>
				{!registry ? (
					<>
						<h2 className={styles['title-form']}>Вход</h2>
						<form id='form__sign-in' className={styles['modal__form']}>
							<div className={styles['modal__form-container']}>
								<label
									className={styles['form__container-label']}
									htmlFor='email'
								>
									Почта
								</label>
								<input
									className={styles['form__container-input']}
									type='text'
									name='email'
									placeholder='Введите почту'
									id='email'
								/>
								<label
									className={styles['form__container-label']}
									htmlFor='password'
								>
									Пароль
								</label>
								<input
									className={styles['form__container-input']}
									type='text'
									name=''
									id='password'
									placeholder='Введите пароль'
								/>
							</div>
							<button
								className={`${styles['form__container-submit']} ${styles['sign-in']}`}
								type='submit'
							>
								<span className={styles['container__submit-text']}>Войти</span>
							</button>
						</form>
					</>
				) : (
					<>
						<h2 className={styles['title-form']}>Регистрация</h2>
						<form className={styles['modal__form']}>
							<div className={styles['modal__form-container']}>
								<label
									className={styles['form__container-label']}
									htmlFor='name'
								>
									Имя
								</label>
								<input
									className={styles['form__container-input']}
									type='name'
									name='name'
									placeholder='Введите имя'
									id='email'
								/>
								<label
									className={styles['form__container-label']}
									htmlFor='email'
								>
									Почта
								</label>
								<input
									className={styles['form__container-input']}
									type='text'
									name=''
									placeholder='Введите почту'
									id='email'
								/>
								<label
									className={styles['form__container-label']}
									htmlFor='email'
								>
									Пароль
								</label>
								<input
									className={styles['form__container-input']}
									type='text'
									name=''
									placeholder='Введите пароль'
									id='email'
								/>
							</div>
							<button
								className={`${styles['form__container-submit']} ${styles['registry']}`}
								type='submit'
							>
								<span className={styles['container__submit-text']}>
									Зарегистрироваться
								</span>
							</button>
						</form>
					</>
				)}
			</div>
		</>
	)
}
export default ModalProfile
