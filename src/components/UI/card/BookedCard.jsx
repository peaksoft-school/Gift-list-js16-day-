import { Avatar, Box, styled, Typography } from '@mui/material'
import MeatBalls from '../MeetBalls'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'

const BookedCard = ({ card }) => {
   const { fullName, event, title, date, image, avatar } = card

   return (
      <StyledCard>
         <BoxContainer>
            <Avatar src={avatar} />

            <ContainerBox>
               <Typography>{fullName}</Typography>

               <Typography className="event">{event}</Typography>
            </ContainerBox>
         </BoxContainer>

         <StyledTypography>{title}</StyledTypography>

         <StyledImage src={image} alt={title} />

         <StyledTextBox>
            <Typography>{date}</Typography>

            <MeatBalls options={USER_CARD_OPTIONS} />
         </StyledTextBox>
      </StyledCard>
   )
}

export default BookedCard

const StyledCard = styled(Box)({
   padding: '16px',
   borderRadius: '8px',
   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',

   width: '349px',
})

const BoxContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '5px',
})

const StyledImage = styled('img')({
   width: '317px',
   height: '153px',
   borderRadius: '8px',
   marginTop: '12px',
   marginBottom: '14px',
})

const ContainerBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '50px',
   justifyContent: 'space-between',

   '& .event': {
      color: 'green',
      fontSize: '13px',
   },
}))

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   marginTop: '15px',
}))

const StyledTextBox = styled(Box)(() => ({
   fontSize: '14px',
   color: 'gray',
   display: 'flex',
   justifyContent: 'space-between',
}))
