import React from 'react'
import { Typography, Box } from '@mui/material'
import styled from 'styled-components'
import Charity from '../../assets/images/Charity.png'

const CharitySection = () => {
   return (
      <Section>
         <ImageWrapper elevation={4}>
            <ImageBorder>
               <StyledImage src={Charity} alt="charity" />
            </ImageBorder>
         </ImageWrapper>
         <TextContent>
            <Typography variant="h4" gutterBottom>
               Благотворительность
            </Typography>
            <Typography variant="body1" paragraph>
               Найти удачный подарок, который принесёт радость, не всегда
               простая задача.
            </Typography>
            <Typography variant="body1" paragraph>
               Благодаря нашему сервису у вас есть возможность не только
               обрадовать подарком, но и помочь другим приобрести необходимые им
               вещи.
            </Typography>
            <Typography variant="body1">
               В разделе благотворительность вы можете найти список
               опубликованных вещей, забронировав, вы связываетесь с их
               обладателем.
            </Typography>
         </TextContent>
      </Section>
   )
}

export default CharitySection

const Section = styled('section')({
   backgroundColor: '#6a1b9a',
   color: '#fff',
   padding: '40px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   height: '602px',
})

const ImageWrapper = styled(Box)(() => ({
   padding: '10px',
   display: 'flex',
   flex: 1,
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

const TextContent = styled('div')({
   maxWidth: '570px',
   minHeight: '192px',
   fontSize: '16px',
   fontFamily: 'interit',
   fontWeight: '400',
   lineHeight: '150%',
   letterSpacing: '0%',
})
