import { Typography, Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { Formik, Form, Field } from 'formik'
import { Card } from 'antd'
import { ResetPasswordSchema } from '../../utils/constants/validation'
import ToastifyNotify from '../../utils/helpers/ToastifyNotify'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'

const ChangePassword = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { resetPasswordStatus } = useSelector((state) => state.auth)

   const location = useLocation()
   const searchParams = new URLSearchParams(location.search)
   const token = searchParams.get('token')

   const newToken = token

   const handleSubmit = (values) => {
      if (!token) {
         ToastifyNotify({
            title: 'Error',
            message: 'Токен отсутствует',
            autoClose: 3000,
            type: 'error',
         })
         return
      }
      dispatch(
         AUTH_THUNK.resetPassword({
            token: newToken,
            password: values.password,
         })
      )
         .unwrap()
         .then(() => {
            ToastifyNotify({
               title: 'Успешно',
               message: 'Пароль успешно изменен!',
               autoClose: 3000,
               type: 'success',
            })
            navigate('/')
         })
         .catch((err) => {
            ToastifyNotify({
               title: 'Error',
               message: err.message || 'Ошибка при сбросе пароля',
               autoClose: 3000,
               type: 'error',
            })
         })
   }

   return (
      <CenteredWrapper>
         <StyledCard>
            <Title>Смена пароля</Title>
            <Formik
               initialValues={{ password: '', confirmPassword: '' }}
               validationSchema={ResetPasswordSchema}
               onSubmit={handleSubmit}
            >
               {({ errors, touched }) => (
                  <Form>
                     <FormBlock>
                        <Field name="password">
                           {({ field }) => (
                              <Input.Password
                                 {...field}
                                 placeholder="Введите новый пароль"
                                 error={touched.password && errors.password}
                                 errorText={errors.password}
                                 className="reset-password-change"
                              />
                           )}
                        </Field>
                     </FormBlock>
                     <FormBlock>
                        <Field name="confirmPassword">
                           {({ field }) => (
                              <Input.Password
                                 {...field}
                                 placeholder="Повторите пароль"
                                 error={
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                 }
                                 errorText={errors.confirmPassword}
                                 className="reset-password-change"
                              />
                           )}
                        </Field>
                     </FormBlock>
                     <StyledButton
                        variant="outlined"
                        htmlType="submit"
                        loading={resetPasswordStatus === 'loading'}
                        block
                        className="reset-button"
                     >
                        Подтвердить
                     </StyledButton>
                  </Form>
               )}
            </Formik>
         </StyledCard>
      </CenteredWrapper>
   )
}

export default ChangePassword

const CenteredWrapper = styled(Box)({
   minHeight: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const StyledCard = styled(Box)({
   background: '#fff',
   borderRadius: 12,
   padding: '32px 24px 24px 24px',
   minWidth: 340,
   maxWidth: 400,
   width: '100%',
   position: 'relative',
})

const Title = styled(Typography)({
   fontWeight: 500,
   fontSize: 20,
   marginBottom: 24,
   textAlign: 'left',
})

export const FormBlock = styled(Box)(({ gap = 16 }) => ({
   marginBottom: `${gap}px`,
}))

export const ErrorText = styled(Typography)(({ theme }) => ({
   color: theme.palette.error.main,
   marginTop: 4,
   fontSize: 13,
}))

const StyledButton = styled(Button)({
   marginTop: 16,
   background: '#8D35F5',
   color: '#fff',
   fontWeight: 500,
   fontSize: 16,
   borderRadius: 8,
   height: 44,
   '&:hover': {
      background: '#7a2fd1',
   },
})

// Если нужен крестик в углу (иконка закрытия)
const CloseButton = styled('button')({
   position: 'absolute',
   top: 16,
   right: 16,
   background: 'transparent',
   border: 'none',
   cursor: 'pointer',
   fontSize: 20,
   color: '#aaa',
   transition: 'color 0.2s',
   '&:hover': {
      color: '#333',
   },
})
