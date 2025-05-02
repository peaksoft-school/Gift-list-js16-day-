import { Typography } from '@mui/material'
import LightIcon from '../../assets/icons/light.svg'
import styled from 'styled-components'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../configs/firebase'
import Input from '../../components/UI/Input'
import { useNavigate } from 'react-router'
import Checkbox from '../../components/UI/Checkbox'
import { Form } from 'react-hook-form'

const SignIn = () => {
   const navigate = useNavigate()

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
      <Form>
         <StyledMainSignIn>
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
               <StyledInput placeholder="Email" type="email" />
               <StyledInput placeholder="Password" type="password" />
               <StyledMainCheckbox />
               <span
                  style={{
                     fontWeight: 400,
                     fontSize: '14px',
                     color: '#87898E',
                  }}
               >
                  Запомнить меня
               </span>
            </StyledMain>
            <button onClick={handleGoogleSignIn}>Войти через Google</button>
         </StyledMainSignIn>
      </Form>
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
   marginTop: '54px',
}))
const StyledMainCheckbox = styled(Checkbox)(() => ({
   width: '15px',
   height: '15px',
}))
const StyledInput = styled(Input)(() => ({
   width: 482,
}))
export default SignIn
