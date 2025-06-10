import { Box, styled, Typography } from '@mui/material'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'
import MeetBalls from '../MeetBalls'
import { useNavigate } from 'react-router'
import { HOLIDAYS_THUNK } from '../../../store/slices/user/holidays/holidaysThunk'
import { useDispatch } from 'react-redux'

const HolidayCard = ({ holiday }) => {
   const { id, image, name, date } = holiday

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleNavigate = (id) => {
      dispatch(HOLIDAYS_THUNK.getById({ id, navigate }))
   }

   return (
      <StyledBox key={id} onClick={() => handleNavigate(id)}>
         <img src={image} alt="icon" />

         <StyledText>{name}</StyledText>

         <StyledBlock>
            <Typography>{date}</Typography>

            <MeetBalls options={USER_CARD_OPTIONS} />
         </StyledBlock>
      </StyledBox>
   )
}

export default HolidayCard

const StyledBox = styled(Box)(() => ({
   width: '349px',
   height: '250px',
   background: '#FFFFFF',
   borderRadius: '10px',
   padding: '20px',
   cursor: 'pointer',

   '& img': {
      minWidth: '317px',
      minHeight: '149px',
      maxWidth: '317px',
      maxHeight: '149px',
      borderRadius: '6px',
      border: '1px solid rgba(215, 211, 211, 0.23)',
   },
}))

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '6px',
   letterSpacing: '2%',
   paddingTop: '20px',
   color: '#020202',
}))

const StyledBlock = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingTop: '10px',
   alignItems: 'center',

   '& .MuiTypography-body1': {
      color: '#636C84',
   },
}))
