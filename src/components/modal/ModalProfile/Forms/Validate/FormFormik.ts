import * as Yup from 'yup'
import type { InferType } from 'yup'

const russianPhoneRegex =
	/^(\+7|7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/

export const validateLoginSchema = Yup.object({
	email: Yup.string().email('Некорректный email').required('Email обязателен'),
	password: Yup.string()
		.min(8, 'Пароль должен иметь минимум 8 символов')
		.required('Пароль обязателен')
		.matches(/\d/, 'Пароль должен содержать минимум одну цифру'),
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
export const validateUpdatePassword = Yup.object({
	password: Yup.string()
		.min(8, 'Пароль должен иметь минимум 8 символов')
		.required('Пароль обязателен')
		.matches(/\d/, 'Пароль должен содержать минимум одну цифру'),
})
export const validateOrder = Yup.object({
	email: Yup.string().email('Некорректный email'),
	phone: Yup.string()
		.required('Телефон обязателен')
		.matches(
			russianPhoneRegex,
			'Введите российский номер в формате: +7 XXX XXX-XX-XX'
		)
		.transform(value => value?.replace(/[^\d]/g, '') || '')
		.min(11, 'Должно быть 11 цифр (включая код страны)')
		.max(12, 'Максимум 12 цифр (для международных номеров)'),
})
export type TValidateLoginSchema = InferType<typeof validateLoginSchema>
export type TValidateRegisterSchema = InferType<typeof validateRegisterSchema>
export type TValidateUpdatePassword = InferType<typeof validateUpdatePassword>
export type TValidateOrder = InferType<typeof validateOrder>
