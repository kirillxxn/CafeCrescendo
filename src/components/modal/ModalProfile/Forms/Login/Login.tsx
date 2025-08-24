import { Field, ErrorMessage } from 'formik'
export type FormProps = {
	styles: { [key: string]: string }
}
const Login = ({ styles }: FormProps) => {
	return (
		<>
			{/* Группа поля пароля */}
			<div className={styles['form__group']}>
				<label className={styles['form__label']} htmlFor='password'>
					Пароль
				</label>
				<Field
					className={styles['form__input']}
					type='password'
					name='password'
					id='password'
					placeholder='Введите пароль'
				/>
				{/* Сообщение об ошибке */}
				<ErrorMessage
					name='password'
					component='div'
					className={styles['form__error']}
				/>
			</div>
			{/* Группа поля email */}
			<div className={styles['form__group']}>
				<label className={styles['form__label']} htmlFor='email'>
					Почта
				</label>
				<Field
					className={styles['form__input']}
					type='email'
					name='email'
					id='email'
					placeholder='Введите почту'
				/>
				{/* Сообщение об ошибке */}
				<ErrorMessage
					name='email'
					component='div'
					className={styles['form__error']}
				/>
			</div>
		</>
	)
}
export default Login
