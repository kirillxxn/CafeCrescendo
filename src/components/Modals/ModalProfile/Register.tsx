import { Field, ErrorMessage } from 'formik'
import type { FormProps } from './Login'

const Register = ({ styles }: FormProps) => {
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
		</>
	)
}
export default Register
