import { memo } from 'react'
import { useNavigate } from 'react-router'
import { Box, styled, Typography } from '@mui/material'
import NoMailings from '../../../assets/images/EmptyState.png'

const MailingCards = ({ mailings }) => {
   const navigate = useNavigate()

   const handleNavigate = (id) => navigate(`/admin/newsletter/${id}`)

   return (
      <>
         {mailings?.length === 0 ? (
            <StyledNotBlockBox>
               <img src={NoMailings} alt="icon" />

               <h1>Нет рассылок!</h1>
            </StyledNotBlockBox>
         ) : (
            mailings?.map(({ id, image, subject, createdAt }) => (
               <StyledBox key={id} onClick={() => handleNavigate(id)}>
                  <img src={image} alt="card" />

                  <StyledText>{subject}</StyledText>

                  <StyledData>{createdAt}</StyledData>
               </StyledBox>
            ))
         )}
      </>
   )
}

export default memo(MailingCards)

const StyledNotBlockBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   margin: 'auto',

   '& img': {
      width: '300px',
   },

   '& h1': {},
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
