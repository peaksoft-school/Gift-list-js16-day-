import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import { Typography, styled, Box, InputAdornment } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import Checkbox from '../../components/UI/Checkbox'
import { auth } from '../../configs/firebase'
import LightIcon from '../../assets/icons/light.svg'
import GoogleIcon from '../../assets/icons/google.svg'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-off.svg'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validate'

const SignIn = () => {
   const { isLoading } = useSelector((state) => state.auth)

   const [showPassword, setShowPassword] = useState(false)
   const [isPasswordFieldActive, setIsPasswordFieldActive] = useState(false)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const togglePasswordVisibility = () => setShowPassword((prev) => !prev)
   const handlePasswordFieldFocus = () => setIsPasswordFieldActive(true)

   const handleGoogleSignIn = async () => {
      try {
         const provider = new GoogleAuthProvider()
         provider.addScope('email')
         provider.addScope('profile')

         const result = await signInWithPopup(auth, provider)
         const idToken = await result.user.getIdToken()

         await dispatch(
            AUTH_THUNK.authWithGoogle({ idToken, navigate })
         ).unwrap()
      } catch (error) {
         console.error('Ошибка входа через Google:', error)
      }
   }

   const handleExitNavigate = () => navigate('/')

   const onSubmit = (values) => {
      const loginValues = {
         email: values.email.trim(),
         password: values.password,
      }
      dispatch(AUTH_THUNK.signIn({ loginValues, navigate }))
   }

   const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
      useFormik({
         initialValues: { email: '', password: '', rememberMe: false },
         validationSchema: VALIDATION_SIGN_IN,
         onSubmit,
      })

   return (
      <StyledContainer>
         <StyledContent>
            <StyledForm onSubmit={handleSubmit}>
               <StyledMainHeader>
                  <Typography typography="h3" className="title">
                     Вход
                  </Typography>
                  <img
                     src={LightIcon}
                     alt="exit-icon"
                     className="exit-icon"
                     onClick={handleExitNavigate}
                  />
               </StyledMainHeader>

               <Box className="inputs-content">
                  <StyledInput
                     placeholder="Email"
                     name="email"
                     type="email"
                     onChange={handleChange}
                     value={values.email}
                     onBlur={handleBlur}
                     error={touched?.email && errors?.email}
                     errorText={errors.email}
                     className="input"
                  />

                  <StyledInput
                     placeholder="Введите пароль"
                     name="password"
                     type={showPassword ? 'text' : 'password'}
                     onChange={handleChange}
                     value={values.password}
                     onBlur={handleBlur}
                     onFocus={handlePasswordFieldFocus}
                     error={touched?.password && errors?.password}
                     errorText={errors.password}
                     className="input"
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              {isPasswordFieldActive && (
                                 <Box onClick={togglePasswordVisibility}>
                                    <img
                                       src={showPassword ? EyeIcon : EyeSlash}
                                       alt="toggle password"
                                       className="eye-icon"
                                    />
                                 </Box>
                              )}
                           </InputAdornment>
                        ),
                     }}
                  />
               </Box>

               <StyledMainCheckbox>
                  <Checkbox name="rememberMe" onChange={handleChange} />
                  <Typography className="text">Запомнить меня</Typography>
               </StyledMainCheckbox>

               <StyledButton type="submit" variant="outlined">
                  {isLoading ? 'Загрузка...' : 'Войти'}
               </StyledButton>
            </StyledForm>

            <Box className="end-content">
               <StyledForgotPassword to="/forgot-password">
                  Забыли пароль?
               </StyledForgotPassword>

               <StyledOrDivider>
                  <StyledLine />
                  <StyledText>или</StyledText>
                  <StyledLine />
               </StyledOrDivider>

               <StyledGoogleButton onClick={handleGoogleSignIn}>
                  <StyledGoogleImg src={GoogleIcon} alt="google-icon" />
                  Продолжить с Google
               </StyledGoogleButton>

               <Box className="sign-up-content">
                  <Typography>Нет аккаунта?</Typography>
                  <StyledNavLink to="/sign-up">
                     Зарегистрироваться
                  </StyledNavLink>
               </Box>
            </Box>
         </StyledContent>
      </StyledContainer>
   )
}

export default SignIn

const StyledContainer = styled(Box)(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   background: 'linear-gradient(#8639B5, #092056)',
}))

const StyledContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'white',
   width: 'fit-content',
   padding: '24px 32px',
   borderRadius: '10px',

   '& .sign-up-content': {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
   },

   '& .end-content': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '14px',
      margin: '24px 0',
   },
}))

const StyledForm = styled('form')(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   width: '100%',
   gap: '10px',

   '& .title': {
      fontSize: '24px',
      fontWeight: 500,
   },

   '& .exit-icon': {
      cursor: 'pointer',
   },

   '& .inputs-content': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',

      '& .input': {
         marginBottom: '20px',
      },

      '& .eye-icon': {
         width: '20px',
         marginTop: 6,
         cursor: 'pointer',
      },
   },
}))

const StyledMainHeader = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const StyledMainCheckbox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',

   '& .text': {
      fontWeight: 400,
      fontSize: '14px',
      color: '#87898E',
      marginLeft: '-20px',
   },
}))

const StyledInput = styled(Input)(() => ({
   '&.MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#F0F4FF',
   },
}))

const StyledButton = styled(Button)(() => ({
   height: '39px',
   textTransform: 'capitalize',
}))

const StyledOrDivider = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   maxWidth: '482px',
}))

const StyledLine = styled('div')(() => ({
   flex: 1,
   height: '1px',
   backgroundColor: '#E5E5E5',
   margin: '0 10px',
}))

const StyledText = styled('span')(() => ({
   fontSize: '14px',
   color: '#87898E',
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
   fontSize: '16px',
   fontWeight: 400,
}))
