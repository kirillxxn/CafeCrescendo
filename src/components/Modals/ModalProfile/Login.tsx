import { Field, ErrorMessage } from 'formik'
export type FormProps = {
	styles: { [key: string]: string }
}

const Login = ({ styles }: FormProps) => {
	return (
		<>
			<div className={styles['form__container-group']}>
				<label className={styles['form__container-label']} htmlFor='name'>
					Имя
				</label>
				<Field
					className={styles['form__container-input']}
					type='text'
					name='name'
					id='name'
					placeholder='Введите имя'
				/>
				<ErrorMessage
					name='name'
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
