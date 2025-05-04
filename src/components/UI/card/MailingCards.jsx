import React, { useEffect } from 'react'
import NoMailings from '../../../assets/images/NoMailings.png'
import { Box, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { MAILING_THUNK } from '../../../store/slices/mailing/mailingThunk'

const MailingCards = () => {
   const { mailings } = useSelector((state) => state.mailing)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MAILING_THUNK.getAllMailings())
   }, [])

   return (
      <div>
         {mailings.length === 0 ? (
            <StyledNotBlockBox>
               <img src={NoMailings} alt="icon" />
               <h1>Нет рассылок!</h1>
            </StyledNotBlockBox>
         ) : (
            mailings.map((mailing) => (
               <StyledBox>
                  <img
                     src={mailing.imageSrc}
                     alt="card"
                     onClick={() => navigate('/admin/description')}
                  />
                  <StyledText>{mailing.mailingTopic}</StyledText>
                  <StyledData>{mailing.date}</StyledData>
               </StyledBox>
            ))
         )}
      </div>
   )
}

export default MailingCards
const StyledNotBlockBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   '& img': {
      width: '200px',
      marginLeft: '400px',
   },
   '& h1': {
      marginLeft: '400px',
   },
}))
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
