import { Typography, Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { Formik, Form, Field } from 'formik'
import { Button, Input, Card } from 'antd'
import { toast } from 'react-toastify'
import { ResetPasswordSchema } from '../../utils/constants/validation'

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
            toast.success('Пароль успешно изменен!')
            navigate('/')
         })
         .catch((err) => {
            toast.error(err.message || 'Ошибка при сбросе пароля')
         })
   }

   return (
      <ResetBox>
         <HouseBackground
            src="https://img.freepik.com/free-photo/greyscale-low-angle-shot-concrete-building-with-lot-windows-dark-sky_181624-14824.jpg?semt=ais_hybrid&w=740"
            alt="House illustration"
         />
         <AuthCard title="Change Password">
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
                                 placeholder="New Password"
                                 status={
                                    touched.password && errors.password
                                       ? 'error'
                                       : ''
                                 }
                                 className="reset-password-change"
                              />
                           )}
                        </Field>
                        {errors.password && touched.password && (
                           <ErrorText>{errors.password}</ErrorText>
                        )}
                     </FormBlock>

                     <FormBlock gap={24}>
                        <Field name="confirmPassword">
                           {({ field }) => (
                              <Input.Password
                                 {...field}
                                 placeholder="Confirm your password"
                                 status={
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                       ? 'error'
                                       : ''
                                 }
                                 className="reset-password-change"
                              />
                           )}
                        </Field>
                        {errors.confirmPassword && touched.confirmPassword && (
                           <ErrorText>{errors.confirmPassword}</ErrorText>
                        )}
                     </FormBlock>
                     <Button
                        type="text"
                        htmlType="submit"
                        loading={resetPasswordStatus === 'loading'}
                        block
                        className="reset-button"
                     >
                        Save password
                     </Button>
                  </Form>
               )}
            </Formik>
         </AuthCard>
      </ResetBox>
   )
}

export default ChangePassword

export const AuthCard = styled(Card)(({ theme }) => ({
   width: 500,
   borderRadius: '12px',
   boxShadow: theme.shadows[3],
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   '& .reset-button': {
      width: '414px',
      height: '37px',
      borderRadius: '2px',
      cursor: 'pointer',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',

      textTransform: 'uppercase',
      fontFamily: 'Arial',
      fontWeight: '500',
      fontSize: '14px',
      color: '#F7F7F7',
      backgroundColor: '#DD8A08',
      '&:hover': { backgroundColor: '#BB7200' },
      '&:active': { backgroundColor: '#F2B75B' },
      '&:disabled': { backgroundColor: '#C4C4C4' },
   },
   '& .reset-password-change': {
      width: '414px',
      height: '39px',
      borderRadius: '2px',
      borderColor: '#828282',
      border: '1px solid #828282',
   },
   '& .ant-card-head-title': {
      fontSize: '19px',
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
   },
}))

export const FormBlock = styled(Box)(({ gap = 16 }) => ({
   marginBottom: ` ${gap}px`,
}))

export const ErrorText = styled(Typography)(({ theme }) => ({
   color: theme.palette.error.main,
   marginTop: 4,
   fontSize: 13,
}))

const HouseBackground = styled('img')(() => ({
   position: 'absolute',
   opacity: 0.08,
   width: '100%',
   maxWidth: '100%',
   bottom: 0,
   zIndex: 0,
}))

const ResetBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '15% 0 0 0 ',
}))
