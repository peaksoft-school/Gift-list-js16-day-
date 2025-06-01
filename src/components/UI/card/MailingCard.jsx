import { memo } from 'react'
import { useNavigate } from 'react-router'
import { Box, styled, Typography } from '@mui/material'

const MailingCard = ({ mailing }) => {
   const { id, image, subject, createdAt } = mailing

   const navigate = useNavigate()

   const handleNavigate = (id) => navigate(`/admin/newsletter/${id}`)

   return (
      <StyledBox key={id} onClick={() => handleNavigate(id)}>
         <img src={image} alt="card" />

         <StyledText>{subject}</StyledText>

         <StyledData>{createdAt}</StyledData>
      </StyledBox>
   )
}

export default memo(MailingCard)

const StyledBox = styled(Box)(() => ({
   padding: '16px 16px 19px 16px',
   borderRadius: '10px',
   background: '#ffffff',
   border: '1px solid #f1efef ',
   maxWidth: '349px',
   minHeight: '250px',
   cursor: 'pointer',

   '& img': {
      width: '-webkit-fill-available',
      height: '200px',
   },
}))

const StyledText = styled(Typography)(() => ({
   fontFamily: ' Inter',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   color: '#000000',
   padding: '16px 0',
}))

const StyledData = styled(Typography)(() => ({
   fontFamily: ' Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   color: '#636C84',
}))
