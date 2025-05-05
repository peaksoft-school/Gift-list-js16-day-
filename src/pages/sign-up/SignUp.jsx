import { Typography } from '@mui/material'
import LightIcon from '../../assets/icons/light.svg'
import styled from 'styled-components'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../configs/firebase'
import Input from '../../components/UI/Input'
import { Form, NavLink, useNavigate } from 'react-router'
import Checkbox from '../../components/UI/Checkbox'
import { useForm } from 'react-hook-form'
import Button from '../../components/UI/Button'
import GoogleIcon from '../../assets/icons/google.svg'
import { useState } from 'react'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-off.svg'

const SignUp = () => {
   const navigate = useNavigate()
   const { register, handleSubmit } = useForm()
   const [password, setPassword] = useState('')
   const [password2, setPassword2] = useState('')
   const [showPassword, setShowPassword] = useState(false)
   const [showPassword2, setShowPassword2] = useState(false)

   const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev)
   }
   const togglePasswordVisibility2 = () => {
      setShowPassword2((prev) => !prev)
   }

   const onSubmit = (data) => {
      console.log('Form Data:', data)
   }

   const handleGoogleSignIn = async () => {
      try {
         const result = await signInWithPopup(auth, provider)
         const user = result.user
         console.log('Пользователь вошел:', user.displayName, user.email)
         alert(`Добро пожаловать, ${user.displayName}!`)
      } catch (error) {
         console.error('Ошибка входа:', error)
      }
   }

   return (
      <StyledMainSignIn>
         <form onSubmit={handleSubmit(onSubmit)}>
            <StyledMain>
               <StyledMainHeader>
                  <Typography
                     typography="h3"
                     style={{ fontSize: '24px', fontWeight: 500 }}
                  >
                     Регистрация
                  </Typography>
                  <img
                     src={LightIcon}
                     alt=""
                     style={{ cursor: 'pointer', marginRight: '20px' }}
                     onClick={() => navigate('/')}
                  />
               </StyledMainHeader>
               <div style={{ position: 'relative' }}>
                  <StyledInput
                     {...register('name')}
                     placeholder="Имя"
                     type="text"
                  />
                  <StyledInput
                     {...register('lastname')}
                     placeholder="Фамилия"
                     type="text"
                  />{' '}
                  <StyledInput
                     {...register('email')}
                     placeholder="Email"
                     type="email"
                  />{' '}
                  <StyledInput
                     {...register('password')}
                     type={showPassword ? 'text' : 'password'}
                     placeholder="Введите пароль"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <StyledInput
                     {...register('password')}
                     type={showPassword2 ? 'text' : 'password'}
                     placeholder="Повторите пароль"
                     value={password2}
                     onChange={(e) => setPassword2(e.target.value)}
                  />
                  <span
                     onClick={togglePasswordVisibility2}
                     style={{
                        position: 'absolute',
                        top: '87%',
                        right: '40px',
                        cursor: 'pointer',
                     }}
                  >
                     {showPassword2 ? (
                        <img
                           src={EyeIcon}
                           alt=""
                           style={{
                              width: '20px',
                              marginTop: 3,
                              border: '#ccc',
                           }}
                        />
                     ) : (
                        <img
                           src={EyeSlash}
                           alt=""
                           style={{
                              width: '20px',
                              marginTop: 3,
                              border: '#ccc',
                           }}
                        />
                     )}
                  </span>
                  <span
                     onClick={togglePasswordVisibility}
                     style={{
                        position: 'absolute',
                        top: '66%',
                        right: '40px',
                        cursor: 'pointer',
                     }}
                  >
                     {showPassword2 ? (
                        <img
                           src={EyeIcon}
                           alt=""
                           style={{
                              width: '20px',
                              marginTop: 3,
                              border: '#ccc',
                           }}
                        />
                     ) : (
                        <img
                           src={EyeSlash}
                           alt=""
                           style={{
                              width: '20px',
                              marginTop: 3,
                              border: '#ccc',
                           }}
                        />
                     )}
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
                     Подписаться на рассылку
                  </span>
               </StyledMainCheckbox>
            </StyledMain>
            <StyledButton type="submit" variant="outlined">
               Создать аккаунт
            </StyledButton>
         </form>

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
            У вас уже есть аккаунт?
            <StyledNavLink to="/sign-in">Войти</StyledNavLink>
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
   gap: '389px',
   marginTop: '30px',
   marginBottom: '34px',
}))
const StyledMainCheckbox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '12px',
}))
const StyledInput = styled(Input)(() => ({
   '&.MuiOutlinedInput-root': {
      width: '452px',
      height: '45px',
      backgroundColor: 'none',
   },
   // paddingRight: '30px',
   marginBottom: '10px',
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
   margin: '0 12px',
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

export default SignUp
