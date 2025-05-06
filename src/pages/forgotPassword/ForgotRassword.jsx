import { useDispatch, useSelector } from 'react-redux'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { Formik, Form, Field } from 'formik'
import Button from '../../components/UI/Button'
import { ForgotPasswordSchema } from '../../utils/constants/validation'
import Input from '../../components/UI/Input'
import LightIcon from '../../assets/icons/light.svg'
import { useNavigate } from 'react-router'
import Notification from '../../components/Notification'
import ToastifyNotify from '../../utils/helpers/ToastifyNotify'
import { styled } from '@mui/material'

const ForgotPassword = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { forgotPasswordStatus } = useSelector((state) => state.auth)

   const handleSubmit = (values) => {
      dispatch(AUTH_THUNK.forgotPassword(values.email))
         .unwrap()
         .then(() => {
            ToastifyNotify({
               title: 'Успешно',
               message: 'Ссылка отправлено на ваш Email',
               autoClose: 3000,
               type: 'success',
            })
         })
   }

   return (
      <Formik
         initialValues={{ email: '' }}
         validationSchema={ForgotPasswordSchema}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
            <MainBlock>
               <MainHeader>
                  <h2 style={{ fontSize: '24px', fontWeight: 500 }}>
                     Забыли пароль?
                  </h2>
                  <img
                     src={LightIcon}
                     alt=""
                     style={{ cursor: 'pointer' }}
                     onClick={() => navigate('/sign-in')}
                  />
               </MainHeader>
               <Notification />

               <StyledMainContent>
                  <p
                     style={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#87898E',
                        marginBottom: '14px',
                     }}
                  >
                     Вам будет отправлена ссылка для сброса пароля
                  </p>
                  <Field name="email">
                     {({ field }) => (
                        <StyledInput
                           {...field}
                           placeholder="Введите ваш Email"
                           status={touched.email && errors.email ? 'error' : ''}
                           className="forgot-password-change"
                        />
                     )}
                  </Field>

                  <StyledButton
                     variant="outlined"
                     width={414}
                     type="submit"
                     loading={forgotPasswordStatus === 'loading'}
                     block
                     onClick={() => {
                        errors.email &&
                           touched.email &&
                           ToastifyNotify({
                              title: 'Ошибка',
                              message: 'Заполните поле!',
                              autoClose: 3000,
                              type: 'error',
                           })
                     }}
                  >
                     <span style={{ textTransform: 'uppercase' }}>О</span>
                     тправить
                  </StyledButton>

                  <StyleWarningdButton
                     variant="warning"
                     onClick={() => navigate('/sign-in')}
                  >
                     Отменить
                  </StyleWarningdButton>
               </StyledMainContent>
            </MainBlock>
         )}
      </Formik>
   )
}

export default ForgotPassword

const MainBlock = styled(Form)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '70px',
}))

const MainHeader = styled('div')(() => ({
   display: 'flex',
   gap: '270px',
   margin: '24px 32px 32px 32px',
}))

const StyledMainContent = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledInput = styled(Input)(() => ({
   width: 482,
   height: 35,
   marginBottom: '32px',
}))

const StyledButton = styled(Button)(() => ({
   width: '482px',
   height: 39,
   textTransform: 'lowercase',
}))

const StyleWarningdButton = styled('button')(() => ({
   display: 'flex',
   marginTop: '32px',
   justifyContent: 'center',
   backgroundColor: '#fff',
   color: 'grey',
   alignItems: 'center',
   fontSize: '16px',
   fontWeight: 500,
   border: 'none',
   cursor: 'pointer',
}))
