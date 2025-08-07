const errorMessages: Record<string, string> = {
	'Invalid login credentials': 'Неверный логин или пароль',
	'User already registered': 'Пользователь уже зарегистрирован',
	'Network error': 'Ошибка сети. Проверьте подключение',
}
function translateError(message: string): string {
	if (errorMessages[message]) {
		return errorMessages[message]
	}
	return 'Произошла неизвестная ошибка. Попробуйте еще раз'
}
export default translateError
