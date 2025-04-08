import React from 'react'
import styled from 'styled-components'
import VK from '../assets/icons/vk.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Friends from '../assets/images/Friends.svg'
import Friends2 from '../assets/images/Friends2.png'
import { Box } from '@mui/material'
import Button from './UI/Button'

const MainPage = () => {
   return (
      <StyledMain>
         <MainHeader>
            <a href="#">О проекте</a>
            <h3>GIFT LIST</h3>
            <a href="#">Благотворительность</a>
         </MainHeader>

         <SocialIcons>
            <StyledIcons src={Facebook} alt="facebook" />
            <StyledIcons src={VK} alt="vk" />
            <StyledIcons src={Instagram} alt="instagram" />
         </SocialIcons>

         <FriendsImageLeft>
            <StyledBorderBox>
               <StyledFriendImage src={Friends} alt="friends" />
            </StyledBorderBox>
         </FriendsImageLeft>

         <FriendsImageRight>
            <MainBorderBox2>
               <img src={Friends2} alt="friends2" />
            </MainBorderBox2>
         </FriendsImageRight>

         <CenterContent>
            <h1>
               Социальная сеть
               <br /> нового поколения
            </h1>
            <div>
               Всегда подскажет, что подарить близким <br /> и осуществит твои
               желания
            </div>
            <StyledButton>Войти</StyledButton>
            <StyledButton variant="outlined">Регистрация</StyledButton>
         </CenterContent>
      </StyledMain>
   )
}

const StyledMain = styled(Box)({
   backgroundColor: '#8639B5',
   color: '#fff',
   width: '100%',
   minHeight: '120vh',
   position: 'relative',
   overflow: 'hidden',
})

const MainHeader = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '25px 60px',
   a: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '16px',
   },
   h3: {
      fontWeight: 700,
      fontSize: '24px',
      marginLeft: '50px',  
   },
})

const SocialIcons = styled('div')({
   position: 'absolute',
   top: '120px',
   left: '60px',
   display: 'flex',
   flexDirection: 'column',
   gap: '24px',
})

const StyledIcons = styled('img')({
   width: 22,
   height: 22,
})

const CenterContent = styled('div')({
   textAlign: 'center',
   maxWidth: '520px',
   margin: '0 auto',
   marginTop: '100px',
   h1: {
      fontWeight: 500,
      fontSize: '54px',
      marginBottom: '20px',
   },
   div: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '150%',
      margin: '30px 0 50px 0',
   },
})

const StyledButton = styled(Button)({
   width: 291,
   borderRadius: '6px',
   textAlign: 'center',
   marginBottom: '12px',
})

const FriendsImageLeft = styled('div')({
   position: 'absolute',
   bottom: '40px',
   left: '80px',
})

const FriendsImageRight = styled('div')({
   position: 'absolute',
   top: '130px',
   right: '80px',
})

const StyledFriendImage = styled('img')({
   width: 240,
   height: 300,
   borderTopRightRadius: '80px',
   zIndex: 2,
})

const StyledBorderBox = styled('div')({
   position: 'relative',
   width: '260px',
   height: '320px',
   '&::after': {
      content: '""',
      position: 'absolute',
      top: '-30px',
      right: '-30px',
      width: '100%',
      height: '100%',
      border: '1px solid white',
      borderTopRightRadius: '100px',
      zIndex: 0,
   },
})

const MainBorderBox2 = styled('div')({
   position: 'relative',
   width: '260px',
   height: '320px',
   '&::after': {
      content: '""',
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '100%',
      height: '100%',
      border: '1px solid white',
      borderTopRightRadius: '100px',
      zIndex: 0,
   },
   img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderTopRightRadius: '80px',
      position: 'relative',
      zIndex: 2,
   },
})

export default MainPage
