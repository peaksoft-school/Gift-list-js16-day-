import { Avatar, Box, styled, Typography } from '@mui/material'
import MeetBalls from '../MeetBalls'
import { CHARITY_CARD_OPTIONS } from '../../../utils/helpers'

const CharityCard = ({ charity, onNavigate, onChangeOption }) => {
   const {
      ownerProfilePhoto,
      ownerFullName,
      giftName,
      bookedByProfilePhoto,
      condition,
      giftId,
      createdAt,
      statusMessage,
   } = charity

   return (
      <BoxCard onClick={() => onNavigate(giftId)}>
         <StyledBoxAvatar>
            <Avatar src={ownerProfilePhoto} />

            <Typography>{ownerFullName}</Typography>
         </StyledBoxAvatar>

         <StyledParagraph>
            <Typography>{giftName}</Typography>

            <Typography condition={condition} className="condition">
               {condition}
            </Typography>
         </StyledParagraph>

         <img src={bookedByProfilePhoto} alt="book" className="image" />

         <StyledUpBox>
            <Typography>{createdAt}</Typography>

            <StyledSmallBlock>
               <Avatar src={ownerProfilePhoto} />
               <Typography>{statusMessage}</Typography>

               <MeetBalls
                  options={CHARITY_CARD_OPTIONS}
                  onChange={onChangeOption}
               />
            </StyledSmallBlock>
         </StyledUpBox>
      </BoxCard>
   )
}

export default CharityCard

const BoxCard = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '10px',
   width: '349px',
   borderRadius: '10px',
   backgroundColor: '#ffffff',
   cursor: 'pointer',

   '& .image': {
      width: '317px',
      height: '153px',
   },
}))

const StyledBoxAvatar = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   paddingBottom: '10px',

   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: ' 100%',
      letterSpacing: '2%',
      marginLeft: '20px',
   },
}))

const StyledParagraph = styled(Box)(({ condition }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '10px',

   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: ' 130%',
   },

   '& .condition': {
      color: condition === 'NEW' ? '#3CBA92' : '#FD5200',
   },
}))

const StyledUpBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginTop: '10px',

   '& .MuiTypography-root': {
      fontSize: '14px',
      color: '#636C84',
   },
}))

const StyledSmallBlock = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',

   '& .MuiTypography-root': {
      marginLeft: '10px',
   },

   '& img': {
      marginLeft: '10px',
   },
}))
