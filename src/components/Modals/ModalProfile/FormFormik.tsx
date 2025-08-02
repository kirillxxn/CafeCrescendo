import * as Yup from 'yup'
import type { InferType } from 'yup'

export const validateLoginSchema = Yup.object({
	name: Yup.string()
		.required('Имя обязательно')
		.min(2, 'Имя должно содержать минимум 2 символа'),
	email: Yup.string().email('Некорректный email').required('Email обязателен'),
})
export const validateRegisterSchema = Yup.object({
	name: Yup.string()
		.required('Имя обязательно')
		.min(2, 'Имя должно содержать минимум 2 символа'),
	email: Yup.string().email('Некорректный email').required('Email обязателен'),
	password: Yup.string()
		.min(8, 'Пароль должен иметь минимум 8 символов')
		.required('Пароль обязателен')
		.matches(/\d/, 'Пароль должен содержать минимум одну цифру'),
})

export type TValidateLoginSchema = InferType<typeof validateLoginSchema>
export type TValidateRegisterSchema = InferType<typeof validateRegisterSchema>
