import { Field, ErrorMessage } from 'formik'
export type FormProps = {
	styles: { [key: string]: string }
}

const Login = ({ styles }: FormProps) => {
	return (
		<>
			<div className={styles['form__container-group']}>
				<label className={styles['form__container-label']} htmlFor='password'>
					Пароль
				</label>
				<Field
					className={styles['form__container-input']}
					type='password'
					name='password'
					id='password'
					placeholder='Введите пароль'
				/>
				<ErrorMessage
					name='password'
					component='div'
					className={styles['div-error']}
				/>
			</div>
			<div className={styles['form__container-group']}>
				<label className={styles['form__container-label']} htmlFor='email'>
					Почта
				</label>
				<Field
					className={styles['form__container-input']}
					type='email'
					name='email'
					id='email'
					placeholder='Введите почту'
				/>
				<ErrorMessage
					name='email'
					component='div'
					className={styles['div-error']}
				/>
			</div>
		</>
	)
}
export default Login
