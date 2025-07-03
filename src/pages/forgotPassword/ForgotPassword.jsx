import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Formik, Form, Field } from 'formik'
import { styled, Typography } from '@mui/material'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import Notification from '../../components/Notification'
import LightIcon from '../../assets/icons/light.svg'
import { ForgotPasswordSchema } from '../../utils/constants/validation'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import toastifyNotify from '../../utils/helpers/ToastifyNotify'

const ForgotPassword = () => {
   const { forgotPasswordStatus } = useSelector((state) => state.auth)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleSubmit = (values) => {
      dispatch(AUTH_THUNK.forgotPassword(values.email))
   }

   return (
      <Formik
         initialValues={{ email: '' }}
         validationSchema={ForgotPasswordSchema}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
            <MainBlock>
               <Notification />

               <StyledMainContent>
                  <MainHeader>
                     <Typography
                        variant="h2"
                        style={{ fontSize: '24px', fontWeight: 500 }}
                     >
                        Забыли пароль?
                     </Typography>

                     <img
                        src={LightIcon}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/sign-in')}
                     />
                  </MainHeader>
                  <Typography
                     style={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#87898E',
                        marginBottom: '14px',
                        marginLeft: '30px',
                     }}
                  >
                     Вам будет отправлена ссылка для сброса пароля
                  </Typography>

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
                           toastifyNotify({
                              title: 'Ошибка',
                              message: 'Заполните поле!',
                              autoClose: 3000,
                              type: 'error',
                           })
                     }}
                  >
                     <Typography
                        variant="span"
                        style={{
                           textTransform: 'uppercase',
                           paddingBottom: '2px',
                        }}
                     >
                        О
                     </Typography>
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
   background: 'linear-gradient(#8639B5, #092056)',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   height: '100vh',
}))

const MainHeader = styled('div')(() => ({
   display: 'flex',
   gap: '270px',
   margin: '24px 32px 32px 32px',
}))

const StyledMainContent = styled('div')(() => ({
   display: 'flex',
   background: '#fff',
   flexDirection: 'column',
   padding: '20px',
   borderRadius: '10px',
}))

const StyledInput = styled(Input)(() => ({
   width: 482,
   height: 35,
   marginBottom: '32px',
   marginLeft: '30px',
}))

const StyledButton = styled(Button)(() => ({
   width: '482px',
   height: 39,
   textTransform: 'lowercase',
   marginLeft: '30px',
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
