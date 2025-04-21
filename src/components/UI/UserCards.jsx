import { Box, styled, Typography } from '@mui/material'
import Menu from '../UI/menu/MenuCards'

const UserCards = ({ users = [] }) => {
   return (
      <FlexContainer>
         {users.map((user) => (
            <StyledCard>
               <StyledImage src={user.image} />
               <StyledText> {user.fullName}</StyledText>
               <StyledBox>
                  <Typography>{user.amount}</Typography>
                  <Typography align="center" fontSize="12px">
                     желаемых
                     <br />
                     подарков
                  </Typography>
               </StyledBox>
               <Menu sx={{}} />
            </StyledCard>
         ))}
      </FlexContainer>
   )
}

export default UserCards

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '24px',
   marginTop: '12px',
   width: '100%',
   paddingTop: '100px',
}))

const StyledCard = styled(Box)(() => ({
   background: ' linear-gradient(#f3e5f5 125px, #ffffff 125px)',
   width: '257px',
   maxHeight: '287px',
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

const StyledBox = styled(Typography)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '5px',
   paddingTop: '20px',
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   color: '#020202',
}))
