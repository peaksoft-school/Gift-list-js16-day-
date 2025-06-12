import { Box, styled, Typography } from '@mui/material'
import Button from './Button'
import { forwardRef } from 'react'

const FriendCard = forwardRef(({ friend = {}, request = false }, ref) => {
   const { image, fullName, desires, holidays } = friend

   return (
      <StyledFlexContainer ref={ref}>
         <StyledCard>
            <StyledImage src={image} />
            <StyledText> {fullName}</StyledText>

            <StyledBox> 
               <Typography>{desires}</Typography>
               <Typography>{holidays}</Typography>
            </StyledBox>

            <StyledSmallText>
               <Typography> Желаний </Typography>
               <Typography>Праздников </Typography>
            </StyledSmallText>

            {request && (
               <>
                  <Button variant="outlined"> Принять заявку </Button>
                  <Button variant="warning"> Отклонить </Button>
               </>
            )}
         </StyledCard>
      </StyledFlexContainer>
   )
})

export default FriendCard

const StyledFlexContainer = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'center',
   gap: '24px',
   marginTop: '12px',
}))

const StyledCard = styled(Box)(() => ({
   background: ' linear-gradient(#f3e5f5 125px, #ffffff 125px)',
   width: '257px',
   fontWeight: 400,
   borderRadius: '12px',
   padding: '16px',
   textAlign: 'center',
}))

const StyledImage = styled('img')({
   width: '130px',
   height: '130px',
   borderRadius: '50%',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '100%',
   letterSpacing: '2%',
   backgroundColor: 'white',
   padding: '8px',
   borderRadius: '5px',
})

const StyledSmallText = styled(Box)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '12px',
   color: '#606060',
   display: 'flex',
   justifyContent: 'space-around',
})

const StyledBox = styled('span')(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   color: '#020202',
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'center',
   gap: '15px',
   paddingTop: '20px',
}))
