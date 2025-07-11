import { Typography, Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { Formik, Form, Field } from 'formik'
import { ResetPasswordSchema } from '../../utils/constants/validation'
import ToastifyNotify from '../../utils/helpers/ToastifyNotify'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import LightIcon from '../../assets/icons/light.svg'

const ResetPassword = () => {
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
         <div>
            <Formik
               initialValues={{ password: '', confirmPassword: '' }}
               validationSchema={ResetPasswordSchema}
               onSubmit={handleSubmit}
            >
               {({ errors, touched }) => (
                  <StyledFormContent>
                     <StyledMainHeaderContent>
                        <Title>Смена пароля</Title>
                        <img
                           src={LightIcon}
                           alt=""
                           style={{
                              cursor: 'pointer',
                              marginBottom: '25px',
                              marginLeft: '10px',
                           }}
                           onClick={() => navigate('/sign-in')}
                        />
                     </StyledMainHeaderContent>
                     <FormBlock>
                        <Field name="password">
                           {({ field }) => (
                              <StyledInput
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
                              <StyledInput
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
                        <span
                           style={{
                              textTransform: 'uppercase',
                              paddingBottom: '2px',
                           }}
                        >
                           П
                        </span>
                        одтвердить
                     </StyledButton>
                  </StyledFormContent>
               )}
            </Formik>
         </div>
      </CenteredWrapper>
   )
}

export default ResetPassword

const StyledFormContent = styled(Form)(() => ({
   background: '#fff',
   padding: '30px 30px 10px 30px',
   borderRadius: '10px',
}))

const CenteredWrapper = styled(Box)({
   minHeight: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   background: 'linear-gradient(#8639B5, #092056)',
})

const StyledMainHeaderContent = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '310px',
}))

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
   width: '482px',
   height: '42px',
   marginBottom: '32px',
   textTransform: 'lowercase',
})

const StyledInput = styled((props) => <Input.Password {...props} />)(() => ({
   '&.reset-password-change': {
      width: '482px',
   },
}))
