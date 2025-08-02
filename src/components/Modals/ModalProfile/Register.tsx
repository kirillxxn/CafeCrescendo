import { Field, ErrorMessage } from 'formik'
import type { FormProps } from './Login'
const Register = ({ styles }: FormProps) => {
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
		</>
	)
}
export default Register
