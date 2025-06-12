import { Box, styled, Typography } from '@mui/material'
import MeetBalls from '../MeetBalls'
import { USER_CARD_OPTIONS } from '../../../utils/helpers/index'

const UserCard = ({ user, onVisibleModal, onNavigate }) => {
   const { image, fullName, wishCount, id } = user

   return (
      <FlexContainer onClick={() => onNavigate(id)}>
         <StyledCard>
            <StyledImage src={image} />

            <StyledText>{fullName}</StyledText>

            <StyledBox>
               <Typography>{wishCount}</Typography>

               <Typography align="center" fontSize="12px">
                  желаемых
                  <br />
                  подарков
               </Typography>

               <MeetBalls
                  className="meetballs"
                  options={USER_CARD_OPTIONS}
                  onChange={onVisibleModal}
               />
            </StyledBox>
         </StyledCard>
      </FlexContainer>
   )
}

export default UserCard

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))

const StyledCard = styled(Box)(() => ({
   background: ' linear-gradient(#f3e5f5 125px, #ffffff 125px)',
   width: '257px',
   height: '287px',
   fontWeight: '256px',
   borderRadius: '12px',
   padding: '16px',
   textAlign: 'center',
   position: 'relative',
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

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1px',
   paddingTop: '10px',
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   color: '#020202',

   '& .MuiButtonBase-root': {
      position: 'absolute',
      right: '0',
      bottom: '0',
   },
}))
