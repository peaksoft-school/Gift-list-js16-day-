import { styled, Typography } from '@mui/material'
import LightIcon from '../../assets/icons/light.svg'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from '../../configs/firebase'
import Input from '../../components/UI/Input'
import { NavLink, useNavigate } from 'react-router'
import Checkbox from '../../components/UI/Checkbox'
import { useForm } from 'react-hook-form'
import Button from '../../components/UI/Button'
import GoogleIcon from '../../assets/icons/google.svg'
import { useState } from 'react'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-off.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import ToastifyNotify from '../../utils/helpers/toastifyNotify'
import Notification from '../../components/Notification'
import toastifyNotify from '../../utils/helpers/ToastifyNotify'

const SignUp = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { register, handleSubmit } = useForm({
      defaultValues: {
         userName: '',
         lastName: '',
         email: '',
         password: '',
         subscribeMailing: true,
      },
   })

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

   const handleGoogleSignIn = async () => {
      try {
         const provider = new GoogleAuthProvider()
         provider.addScope('email')
         provider.addScope('profile')

         const result = await signInWithPopup(auth, provider)
         const idToken = await result.user.getIdToken()

         await dispatch(AUTH_THUNK.googleSignIn({ idToken, navigate })).unwrap()

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
            message: 'При регистрации',
            autoClose: 3000,
            type: 'error',
         })
      }
   }
   const onSubmit = async (data) => {
      if (password !== password2) {
         ToastifyNotify({
            title: 'Ошибка',
            message: 'Пароли не совпадают!',
            autoClose: 3000,
            type: 'error',
         })
         return
      }

      try {
         await dispatch(AUTH_THUNK.signUp({ data })).unwrap()

         toastifyNotify({
            title: 'Успешно',
            message: 'Вы успешно зарегистрировались',
            autoClose: 3000,
            type: 'success',
         })

         navigate('/user')
      } catch (error) {
         ToastifyNotify({
            title: 'Ошибка',
            message: error?.message || 'Ошибка регистрации',
            autoClose: 3000,
            type: 'error',
         })
      }
   }

   return (
      <StyledBlock>
         <StyledMainSignIn>
            <Notification />
            <StyledMain>
               <form onSubmit={handleSubmit(onSubmit)}>
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
                        style={{ cursor: 'pointer', marginLeft: '320px' }}
                        onClick={() => navigate('/')}
                     />
                  </StyledMainHeader>

                  <StyledSignInInput style={{ position: 'relative' }}>
                     <StyledInput
                        {...register('userName', {
                           required: 'Имя обязательно',
                        })}
                        placeholder="Имя"
                        type="text"
                     />
                     <StyledInput
                        {...register('lastName')}
                        placeholder="Фамилия"
                        type="text"
                     />
                     <StyledInput
                        {...register('email', {
                           required: 'Email обязателен',
                           pattern: {
                              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: 'Некорректный email',
                           },
                        })}
                        placeholder="Email"
                        type="email"
                     />

                     <StyledInput
                        {...register('password', {
                           required: 'Пароль обязателен',
                           minLength: {
                              value: 6,
                              message: 'Пароль должен быть минимум 6 символов',
                           },
                        })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                           alt=""
                           style={{ width: '20px', marginTop: 2 }}
                        />
                     </span>

                     <StyledInput
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
                           right: '10px',
                           cursor: 'pointer',
                        }}
                     >
                        <img
                           src={showPassword2 ? EyeIcon : EyeSlash}
                           alt=""
                           style={{ width: '20px' }}
                        />
                     </span>
                  </StyledSignInInput>

                  <StyledMainCheckbox>
                     <Checkbox
                        {...register('subscribeMailing')}
                        checked={true}
                     />
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

                  <StyledButton type="submit" variant="outlined">
                     <StyledP style={{ textTransform: 'lowercase' }}>
                        <span style={{ textTransform: 'uppercase' }}>С</span>
                        оздать аккаунт
                     </StyledP>
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
            </StyledMain>
         </StyledMainSignIn>
      </StyledBlock>
   )
}
const StyledBlock = styled('div')(() => ({
   background: 'linear-gradient(#8639B5, #092056)',
   height: '100vh',
}))

const StyledMain = styled(Typography)(() => ({
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#fff',
   flexDirection: 'column',
   borderRadius: '10px',
   padding: '10px 40px',
}))

const StyledMainSignIn = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   textAlign: 'center',
   alignItems: 'center',
   paddingTop: '20px',
   width: '100%',
   height: '100%',
}))

const StyledMainHeader = styled('div')(() => ({
   display: 'flex',
   marginTop: '20px',
   marginBottom: '24px',
}))
const StyledMainCheckbox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '12px',
}))
const StyledInput = styled(Input)(() => ({
   '&.MuiOutlinedInput-root': {
      width: '90%',
      maxWidth: '452px',
      height: '35px',
      backgroundColor: 'none',
   },

   marginBottom: '5px',
}))

const StyledButton = styled(Button)(() => ({
   width: '482px',
   height: '39px',
   fontWeight: 500,
   fontSize: '16px',
   textTransform: 'lowercase',
}))

const StyledP = styled('p')(() => ({
   paddingBottom: '2px',
}))

const StyledOrDivider = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '90%',
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
   width: '100%',
   maxWidth: '482px',
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
const StyledSignInInput = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '5px',
}))

export default SignUp
