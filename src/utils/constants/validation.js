import * as Yup from 'yup'

export const ForgotPasswordSchema = Yup.object().shape({
   email: Yup.string()
      .email('Некорректный email')
      .required('Обязательное поле'),
})
export const ResetPasswordSchema = Yup.object().shape({
   password: Yup.string()
      .min(8, 'Минимум 8 символов')
      .required('Обязательное поле'),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
      .required('Подтвердите пароль'),
})
