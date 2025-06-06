import { Avatar, Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import MeetBalls from '../MeetBalls'
import { CHARITY_CARD_OPTIONS } from '../../../utils/helpers'

const CharityCard = ({ charity }) => {
   const navigate = useNavigate()

   const handleNavigate = (id) => {
      navigate(`/admin/charity/${id}`)
   }
   return (
      <StyledCard>
         {charity.map((item, index) => (
            <BoxCard key={item.id || index}>
               <StyledBoxAvatar>
                  <Avatar src={item.ownerProfilePhoto} />
                  <Typography>{item.ownerFullName}</Typography>
               </StyledBoxAvatar>
               <StyledParagraph>
                  <Typography>{item.giftName}</Typography>
                  <Typography
                     sx={{
                        color: item.condition === 'NEW' ? '#3CBA92' : '#FD5200',
                     }}
                  >
                     {item.condition}
                  </Typography>
               </StyledParagraph>
               <img
                  src={item.bookedByProfilePhoto}
                  alt="book"
                  onClick={() => handleNavigate(item.giftId)}
               />
               <StyledUpBox>
                  <Typography>{item.createdAt}</Typography>
                  <StyledSmallBlock>
                     <Avatar src={item.ownerProfilePhoto} />
                     <Typography>{item.statusMessage}</Typography>

                     <MeetBalls options={CHARITY_CARD_OPTIONS} />
                  </StyledSmallBlock>
               </StyledUpBox>
            </BoxCard>
         ))}
      </StyledCard>
   )
}

export default CharityCard
const StyledCard = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
}))
const BoxCard = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '10px',
   width: '349px',
   height: '310px',
   borderRadius: '10px',
   backgroundColor: '#ffffff',
   margin: '30px 20px',
}))
const StyledBoxAvatar = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   paddingBottom: '10px',
   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: ' 100%',
      letterSpacing: '2%',
      marginLeft: '20px',
   },
}))
const StyledParagraph = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '10px',
   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: ' 130%',
   },
}))
const StyledUpBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginTop: '10px',

   '& .MuiTypography-root': {
      fontSize: '14px',
      color: '#636C84',
   },
}))
const StyledSmallBlock = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   '& .MuiTypography-root': {
      marginLeft: '10px',
   },
   '& img': {
      marginLeft: '10px',
   },
}))
