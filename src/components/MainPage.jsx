import styled from 'styled-components'
import VK from '../assets/icons/vk.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Friends from '../assets/images/Friends.svg'
import Friends2 from '../assets/images/Friends2.png'
import { Box } from '@mui/material'
import Button from './UI/Button'
import MainHeaderPage from './MainHeaderPage'
import DownIcon from '../assets/icons/down.png'

const MainPage = () => {
   return (
      <StyledContiner>
         <StyledMain>
            <MainHeaderPage />

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
                  Всегда подскажет, что подарить близким <br /> и осуществит
                  твои желания
               </div>
               <StyledButton>Войти</StyledButton>
               <StyledButton variant="outlined">Регистрация</StyledButton>
            </CenterContent>
            <DowmText>
               <p>
                  <img src={DownIcon} alt="" style={{ marginTop: '15px' }} />
                  Листай вниз
               </p>
            </DowmText>
         </StyledMain>
      </StyledContiner>
   )
}

const StyledContiner = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   textAlign: 'center',
   justifyContent: 'center',
   position: 'relative',
   backgroundColor: '#8639B5',
}))

const StyledMain = styled(Box)({
   color: '#fff',
   width: '100%',
   minHeight: '120vh',
   position: 'relative',
   overflow: 'hidden',
   width: '1200px',
   maxWidth: '100%',
   margin: '0 auto',
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
   position: 'relative',
   position: 'absolute',
   top: 400,
})

const FriendsImageRight = styled('div')({
   position: 'absolute',
   top: '130px',
   right: '40px',
   zIndex: 1,
})

const StyledFriendImage = styled('img')({
   width: 240,
   height: 300,
   zIndex: 2,
})

const StyledBorderBox = styled('div')({
   position: 'relative',
   width: '260px',
   height: '320px',
   zIndex: -0,

   '&::after': {
      content: '""',
      position: 'absolute',
      top: '-30px',
      right: '-30px',
      width: '100%',
      height: '100%',
      border: '1px solid white',
      borderTopRightRadius: '100px',
      zIndex: -1,
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
      right: '30px',
      width: '100%',
      height: '100%',
      border: '1px solid white',
      borderTopLeftRadius: '100px',
      zIndex: 0,
   },
   img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative',
      zIndex: 2,
   },
})
const DowmText = styled('div')(() => ({
   writingMode: 'sideways-lr',
   marginLeft: '1140px',
   fontSize: '14px',
   fontWeight: 400,
   cursor: 'pointer',
}))

export default MainPage
