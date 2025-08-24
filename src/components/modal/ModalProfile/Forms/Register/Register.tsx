import { Field, ErrorMessage } from 'formik'
import type { FormProps } from '../Login/Login'
const Register = ({ styles }: FormProps) => {
	return (
		<>
			{/* Группа поля имени */}
			<div className={styles['form__group']}>
				<label className={styles['form__label']} htmlFor='name'>
					Имя
				</label>
				<Field
					className={styles['form__input']}
					type='text'
					name='name'
					id='name'
					placeholder='Введите имя'
				/>
				{/* Сообщение об ошибке */}
				<ErrorMessage
					name='name'
					component='div'
					className={styles['form__error']}
				/>
			</div>
		</>
	)
}
export default Register
