import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Holidays from '../../../assets/images/holidays.png'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'
import MeetBalls from '../MeetBalls'
import { useNavigate } from 'react-router'

const HolidaysCard = () => {
   const navigate = useNavigate()
   const id = '1'

   const handleNavigate = (id) => {
      navigate(`/user/my-part/${id}`)
   }
   return (
      <StyledBox>
         <img src={Holidays} alt="icon" onClick={() => handleNavigate(id)} />
         <StyledText>День матери</StyledText>
         <StyledBlock>
            <Typography>17.05.2025</Typography>
            <MeetBalls options={USER_CARD_OPTIONS} />
         </StyledBlock>
      </StyledBox>
   )
}

export default HolidaysCard

const StyledBox = styled(Box)(() => ({
   width: '349px',
   height: '250px',
   background: '#FFFFFF',
   borderRadius: '10px',
   padding: '20px',
}))
const StyledText = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '6px',
   letterSpacing: '2%',
   paddingTop: '20px',
   color: '#020202',
}))
const StyledBlock = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingTop: '20px',
  
   '& .MuiTypography-body1': {
      color: '#636C84',
   },
}))
