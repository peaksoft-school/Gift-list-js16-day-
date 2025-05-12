import NoMailings from '../../../assets/images/NoMailings.png'
import { Box, styled, Typography } from '@mui/material'
import { memo } from 'react'
import { useNavigate } from 'react-router'

const MailingCards = ({ mailings }) => {
   const navigate = useNavigate()

   const handleNavigate = (id) => {
      navigate(`/admin/newsletter/${id}`)
   }
   return (
      <>
         {mailings?.length === 0 ? (
            <StyledNotBlockBox>
               <img src={NoMailings} alt="icon" />
               <h1>Нет рассылок!</h1>
            </StyledNotBlockBox>
         ) : (
            mailings?.map((mailing) => (
               <StyledBox
                  key={mailing.id}
                  mailing={mailing}
                  onClick={() => handleNavigate(mailing.id)}
               >
                  <img src={mailing.image} alt="card" />
                  <StyledText>{mailing.subject}</StyledText>
                  <StyledData>{mailing.createdAt}</StyledData>
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
