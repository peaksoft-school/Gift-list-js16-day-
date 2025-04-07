import React from 'react'
import styled from 'styled-components'
import VK from '../assets/icons/vk.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'

const MainPage = () => {
   return (
      <StyledMain>
         <MainHeader>
            <a href="#">О проекте</a>
            <h3>GIFT-LIST</h3>
            <a href="#">Благотворительность</a>
         </MainHeader>
         <StyledGiftMain>
            <img src={Facebook} alt="" />
            <img src={VK} alt="" />
            <img src={Instagram} alt="" />
         </StyledGiftMain>
         <img src="" alt="" />
      </StyledMain>
   )
}

const StyledMain = styled('div')(({ theme }) => ({
   backgroundColor: '#8639B5',
   color: '#fff',
   width: '100wh',
   height: '100vh',
}))

const MainHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-around',
   paddingTop: '25px',
   h3: {
      fontWeight: '700',
      fontSize: '24px',
   },

   a: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '16px',
   },
}))

const StyledGiftMain = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '168px',
   marginTop: '73px',

   img: {
      width: 22,
      height: 22,
      marginTop: '24px',
   },
}))

export default MainPage
