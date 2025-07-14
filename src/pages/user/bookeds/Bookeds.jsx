import { Box, styled, Typography } from '@mui/material'
import BookedCard from '../../../components/UI/card/BookedCard'
import { NavLink } from 'react-router'
import { BOOKEDS_THUNK } from '../../../store/slices/user/bookeds/bookedsThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import NoMailings from '../../../assets/images/empty-state.png'

const Bookeds = () => {
   const { wishList, holidayGifts } = useSelector((state) => state.bookeds)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(BOOKEDS_THUNK.getAllBookedWishList())
      dispatch(BOOKEDS_THUNK.getAllBookedHolidayGift())
   }, [])

   return (
      <StyledContainer>
         <Typography>Забронированные</Typography>

         <Box className="title-content">
            <Typography>Желание</Typography>
            <NavLink>{wishList?.length === 0 ? '' : 'Смотреть все'}</NavLink>
         </Box>

         <Box>
            {wishList?.length === 0 ? (
               <StyledNotBlockBox>
                  <img src={NoMailings} alt="icon" />
                  <Typography>Нет желаний!</Typography>
               </StyledNotBlockBox>
            ) : (
               wishList.map((wish) => (
                  <BookedCard wish={wish} key={wish.giftId} />
               ))
            )}
         </Box>

         <Box className="title-content">
            <Typography>Подарки</Typography>
            <NavLink>
               {holidayGifts?.length === 0 ? '' : 'Смотреть все'}
            </NavLink>
         </Box>

         <Box className="holidays-content">
            {holidayGifts?.length === 0 ? (
               <StyledNotBlockBox>
                  <img src={NoMailings} alt="icon" />
                  <Typography>Нет подарков!</Typography>
               </StyledNotBlockBox>
            ) : (
               holidayGifts.map((holiday) => (
                  <BookedCard wish={holiday} key={holiday.giftId} />
               ))
            )}
         </Box>
      </StyledContainer>
   )
}

export default Bookeds

const StyledContainer = styled(Box)({
   padding: '0 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',

   '& .holidays-content': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      alignItems: 'center',
   },

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },

   '& .title-content': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
})

const StyledNotBlockBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   margin: 'auto',

   '& img': {
      width: '300px',
   },
}))
