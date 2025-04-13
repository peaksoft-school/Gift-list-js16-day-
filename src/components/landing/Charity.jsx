import { Typography, Box } from '@mui/material'
import styled from 'styled-components'
import Childrens from '../../assets/images/Childrens.png'

const Charity = () => {
   return (
      <StyledBox>
         <ImageWrapper>
            <ImageBorder>
               <StyledImage src={Childrens} alt="charity" />
            </ImageBorder>
         </ImageWrapper>
         <TextContentBox>
            <Typography variant="h4" gutterBottom>
               Благотворительность
            </Typography>
            <Typography paragraph>
               Найти удачный подарок, который принесёт радость, не всегда
               простая задача.
            </Typography>
            <Typography paragraph>
               Благодаря нашему сервису у вас есть возможность не только
               обрадовать подарком, но и помочь другим приобрести необходимые им
               вещи.
            </Typography>
            <Typography>
               В разделе благотворительность вы можете найти список
               опубликованных вещей, забронировав, вы связываетесь с их
               обладателем.
            </Typography>
         </TextContentBox>
      </StyledBox>
   )
}

export default Charity

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#6a1b9a',
   color: '#fff',
   padding: '40px',
   width: '100%',
   minHeight: '100vh',
}))

const ImageWrapper = styled(Box)(() => ({
   padding: '10px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const ImageBorder = styled(Box)(() => ({
   border: '1px solid white',
   borderRadius: '0 100px 0 0',
   width: '470px',
}))

const StyledImage = styled('img')({
   width: '470',
   height: 'auto',
   display: 'block',
   marginRight: '50px',
   right: '40px',
   top: '30px',
   position: 'relative',
})

const TextContentBox = styled(Box)(() => ({
   maxWidth: '570px',
   minHeight: '192px',
   fontSize: '16px',
   fontFamily: 'inter',
   fontWeight: '400',
   lineHeight: '150%',
   letterSpacing: '0%',
   marginLeft: '100px',
}))
