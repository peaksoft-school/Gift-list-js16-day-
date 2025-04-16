import { Box, styled, Typography } from '@mui/material'
import Button from '../Button'

const FriendCards = ({ friend, request = false }) => {
   return (
      <FlexContainer>
         <StyledCard>
            <StyledImage src={friend.image} />
            <StyledText> {friend.fullName}</StyledText>

            <StyledBox>
               <p>{friend.desires}</p>
               <p>{friend.holidays}</p>
            </StyledBox>

            <Text>
               <p> Желаний </p>
               <p>Праздников </p>
            </Text>

            {request && (
               <>
                  <Button variant="outlined"> Принять заявку </Button>
                  <Button variant="warning"> Отклонить </Button>
               </>
            )}
         </StyledCard>
      </FlexContainer>
   )
}

export default FriendCards

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'center',
   gap: '24px',
   marginTop: '12px',
}))

const StyledCard = styled(Box)(() => ({
   background: ' linear-gradient(#f3e5f5 125px, #ffffff 125px)',
   width: '257px',
   fontWeight: '256px',
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

const Text = styled(Box)({
   fontfamily: 'Inter',
   fontWeight: '400',
   fontSize: '12px',
   color: '#606060',
   display: 'flex',
   justifyContent: 'space-around',
})

const StyledBox = styled('span')(() => ({
   fontfamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   color: '#020202',
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'center',
   gap: '15px',
   paddingTop: '20px',
}))
