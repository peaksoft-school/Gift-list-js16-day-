import { Typography } from '@mui/material'
import styled from 'styled-components'
import { Formik } from 'formik'
import { NavLink, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import LightIcon from '../../assets/icons/light.svg'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Checkbox from '../../components/UI/Checkbox'
import GoogleIcon from '../../assets/icons/google.svg'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-off.svg'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { ROUTES } from '../../routes/routes'
import { useState } from 'react'
import ToastifyNotify from '../../utils/helpers/ToastifyNotify'
import Notification from '../../components/Notification'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../configs/firebase'

const SignIn = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.auth)
   const [showPassword, setShowPassword] = useState(false)

   const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

   const handleGoogleSignIn = async () => {
      try {
         const provider = new GoogleAuthProvider()
         provider.addScope('email')
         provider.addScope('profile')

         const result = await signInWithPopup(auth, provider)
         const idToken = await result.user.getIdToken()

         const response = await dispatch(
            AUTH_THUNK.googleSignIn({ idToken, navigate })
         ).unwrap()

         ToastifyNotify({
            title: 'Успешно',
            message: 'Вы успешно зарегистрировались',
            autoClose: 3000,
            type: 'success',
         })
      } catch (error) {
         console.error('Ошибка входа через Google:', error)
         ToastifyNotify({
            title: 'Ошибка',
            message: 'Ошибка при регистрации',
            autoClose: 3000,
            type: 'error',
         })
      }
   }

   return (
      <StyledMainSignIn>
         <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
               const errors = {}
               if (!values.email) errors.email = 'Email is required'
               if (!values.password) errors.password = 'Password is required'
               return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
               const loginData = {
                  email: values.email.trim(),
                  password: values.password,
               }

               dispatch(AUTH_THUNK.login(loginData))
                  .unwrap()
                  .then((result) => {
                     ToastifyNotify({
                        title: 'Успешно',
                        message: 'Вы успешно вошли',
                        autoClose: 3000,
                        type: 'success',
                     })
                     if (result.role === 'ADMIN') {
                        navigate(ROUTES.ADMIN.INDEX)
                     } else {
                        navigate(ROUTES.USER.INDEX)
                     }
                  })
                  .catch((error) => {
                     ToastifyNotify({
                        title: 'Error',
                        message: 'Не верный пароль!',
                        autoClose: 3000,
                        type: 'error',
                     })
                  })
                  .finally(() => {
                     setSubmitting(false)
                  })
            }}
         >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
               <form onSubmit={handleSubmit}>
                  <Notification />
                  <StyledMain>
                     <StyledMainHeader>
                        <Typography
                           typography="h3"
                           style={{ fontSize: '24px', fontWeight: 500 }}
                        >
                           Вход
                        </Typography>
                        <img
                           src={LightIcon}
                           alt=""
                           style={{ cursor: 'pointer' }}
                           onClick={() => navigate('/')}
                        />
                     </StyledMainHeader>
                     <div style={{ position: 'relative' }}>
                        <StyledInput
                           placeholder="Email"
                           name="email"
                           type="email"
                           onChange={handleChange}
                           value={values.email}
                        />
                        <StyledInput
                           placeholder="Введите пароль"
                           name="password"
                           type={showPassword ? 'text' : 'password'}
                           onChange={handleChange}
                           value={values.password}
                        />
                        <span
                           onClick={togglePasswordVisibility}
                           style={{
                              position: 'absolute',
                              top: '66%',
                              right: '10px',
                              cursor: 'pointer',
                           }}
                        >
                           <img
                              src={showPassword ? EyeIcon : EyeSlash}
                              alt="toggle password"
                              style={{
                                 width: '20px',
                                 marginTop: 3,
                                 border: '#ccc',
                              }}
                           />
                        </span>
                     </div>

                     <StyledMainCheckbox>
                        <Checkbox />
                        <span
                           style={{
                              fontWeight: 400,
                              fontSize: '14px',
                              color: '#87898E',
                              marginLeft: '-10px',
                           }}
                        >
                           Запомнить меня
                        </span>
                     </StyledMainCheckbox>
                     <StyledButton
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting || isLoading}
                     >
                        {isLoading ? 'Загрузка...' : 'Войти'}
                     </StyledButton>
                  </StyledMain>
               </form>
            )}
         </Formik>

         <StyledForgotPassword to="/forgot-password">
            Забыли пароль?
         </StyledForgotPassword>

         <StyledOrDivider>
            <StyledLine />
            <StyledText>или</StyledText>
            <StyledLine />
         </StyledOrDivider>

         <StyledGoogleButton onClick={handleGoogleSignIn}>
            <StyledGoogleImg src={GoogleIcon} alt="" />
            Продолжить с Google
         </StyledGoogleButton>

         <p style={{ fontWeight: 400, fontSize: '14px' }}>
            Нет аккаунта?
            <StyledNavLink to="/sign-up">Зарегистрироваться</StyledNavLink>
         </p>
      </StyledMainSignIn>
   )
}

const StyledMain = styled(Typography)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
}))

const StyledMainSignIn = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   textAlign: 'center',
   alignItems: 'center',
}))

const StyledMainHeader = styled('div')(() => ({
   display: 'flex',
   gap: '399px',
   marginTop: '50px',
   marginBottom: '34px',
}))
const StyledMainCheckbox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '12px',
}))
const StyledInput = styled(Input)(() => ({
   '&.MuiOutlinedInput-root': {
      height: '35px',
      backgroundColor: 'none',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '482px',
   height: '39px',
   fontWeight: 500,
   fontSize: '16px',
   textTransform: 'lowercase',
}))

const StyledOrDivider = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   maxWidth: '482px',
   margin: '20px 0',
}))

const StyledLine = styled('div')(() => ({
   flex: 1,
   height: '1px',
   backgroundColor: '#E5E5E5',
}))

const StyledText = styled('span')(() => ({
   margin: '18px 12px',
   fontSize: '14px',
   color: '#87898E',
   whiteSpace: 'nowrap',
}))

const StyledGoogleButton = styled('button')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '8px',
   width: '482px',
   height: '39px',
   border: 'none',
   fontWeight: 500,
   fontSize: '16px',
   borderRadius: '6px',
   cursor: 'pointer',

   marginBottom: '34px',
}))

const StyledGoogleImg = styled('img')(() => ({
   width: '24px',
   height: '24px',
}))
const StyledNavLink = styled(NavLink)(() => ({
   fontWeight: 400,
   fontSize: '14px',
   textDecoration: 'none',
   color: '#3772FF',
}))

const StyledForgotPassword = styled(NavLink)(() => ({
   width: 129,
   height: 16,
   textDecoration: 'none',
   color: '#3772FF',

   marginTop: '32px',

   fontSize: '16px',
   fontWeight: 400,
}))

export default SignIn
