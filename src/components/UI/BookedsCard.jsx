import { Avatar, Box, Stack, styled, Typography } from '@mui/material'

const BookedsCard = ({ card }) => {
   const { fullName, event, title, date, image, avatar } = card

   return (
      <StyledBox>
         <StyledCard>
            <BoxContainer>
               <ContainerBox>
                  <Avatar src={avatar} />

                  <ContainerBox>
                     <Typography fontWeight="bold">{fullName}</Typography>
                     <Typography color="green">{event}</Typography>
                  </ContainerBox>
               </ContainerBox>
            </BoxContainer>

            <StyledTypography>{title}</StyledTypography>

            <StyledImage src={image} alt={title} />
            <StyledText>{date}</StyledText>
         </StyledCard>
      </StyledBox>
   )
}

export default BookedsCard

const StyledBox = styled(Box)(() => ({
   marginTop: '100px',
   marginLeft: '30px',
}))

const StyledCard = styled(Box)({
   padding: '16px',
   borderRadius: '12px',
   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
   marginBottom: '20px',
   width: '360px',
})

const BoxContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const StyledImage = styled('img')({
   width: '100%',
   height: 'auto',
   borderRadius: '8px',
   marginTop: '12px',
})

const ContainerBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '20px',
}))

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '20px',
   marginTop: '15px',
}))

const StyledText = styled(Typography)(() => ({
   fontSize: '14px',
   color: 'gray',
}))
