import { Box, styled, Typography } from '@mui/material'
import Button from '../UI/Button'
import VK from '../../assets/icons/vk.svg'
import Facebook from '../../assets/icons/white-facebook.svg'
import Instagram from '../../assets/icons/white-instagram.svg'
import DownIcon from '../../assets/images/down.png'
import Friends from '../../assets/icons/friends.svg'
import Friends2 from '../../assets/images/friends.png'
import { useNavigate } from 'react-router'

const Intro = () => {
   const navigate = useNavigate()

   const handleNavigateSignIn = () => navigate('/sign-in')

   const handleNavigateSignUp = () => navigate('/sign-up')

   return (
      <StyledContiner>
         <StyledMain>
            <MainHeader>
               <a href="#">О проекте</a>

               <Typography variant="h3">GIFT LIST</Typography>

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
               <Typography variant="h1">
                  Социальная сеть
                  <br /> нового поколения
               </Typography>

               <Box>
                  Всегда подскажет, что подарить близким <br /> и осуществит
                  твои желания
               </Box>

               <StyledButton onClick={handleNavigateSignIn}>Войти</StyledButton>

               <StyledButton variant="outlined" onClick={handleNavigateSignUp}>
                  Регистрация
               </StyledButton>
            </CenterContent>

            <DowmText>
               <Typography>
                  <img src={DownIcon} alt="down-list" className="down-list" />
                  Листай вниз
               </Typography>
            </DowmText>
         </StyledMain>
      </StyledContiner>
   )
}

export default Intro

const StyledContiner = styled(Box)(() => ({
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
   width: '1400px',
   maxWidth: '100%',
   margin: '0 auto',
})

const MainHeader = styled(Box)({
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

const SocialIcons = styled(Box)({
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

const CenterContent = styled(Box)({
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

const FriendsImageLeft = styled(Box)({
   position: 'relative',
   position: 'absolute',
   top: 400,
})

const FriendsImageRight = styled(Box)({
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

const StyledBorderBox = styled(Box)({
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

const MainBorderBox2 = styled(Box)({
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
const DowmText = styled(Box)(() => ({
   writingMode: 'sideways-lr',
   marginLeft: '1140px',
   fontSize: '14px',
   fontWeight: 400,
   cursor: 'pointer',

   '& .down-list': {
      marginTop: '15px',
   },
}))
