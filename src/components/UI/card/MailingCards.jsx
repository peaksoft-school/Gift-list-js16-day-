import React from 'react'
import SaleSale from '../../../assets/images/SaleSale.png'
import { Box, styled, Typography } from '@mui/material'

const mailings = [
   {
      imageSrc: SaleSale,
      mailingTopic: 'Тема рассылки',
      date: '12.04.2025',
   },
]

const MailingCards = () => {
   return (
      <div>
         {mailings.map((mailing) => (
            <StyledBox>
               <img src={mailing.imageSrc} alt="card" />
               <StyledText>{mailing.mailingTopic}</StyledText>
               <StyledData>{mailing.date}</StyledData>
            </StyledBox>
         ))}
      </div>
   )
}

export default MailingCards

const StyledBox = styled(Box)(() => ({
   padding: '10px ',
   borderRadius: '10px',
   background: '#ffffff',
   border: '1px solid #f1efef ',
}))
const StyledText = styled(Typography)(() => ({
   marginTop: '30px',
   fontFamily: ' Inter',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   color: '#000000',
}))
const StyledData = styled(Typography)(() => ({
   fontFamily: ' Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   paddingTop: '20px',
   color: '#636C84',
}))
