import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { RIBBON_THUNK } from '../../../store/slices/ribbon/RibbonThunk'
import RibbonCard from '../card/RibbonCard'
import { useNavigate } from 'react-router'

const Ribbon = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { feed } = useSelector((state) => state.ribbon)

   useEffect(() => {
      dispatch(RIBBON_THUNK.getAllFeed())
   }, [dispatch])

   const handleNavigate = (id) => {
      dispatch(RIBBON_THUNK.getFeedById({ id, navigate }))
   }

   const handleReserve = (id) => {
      dispatch(RIBBON_THUNK.addBook({ id }))
   }

   const handleAddToGifts = (wishId) => {
      console.log(`Подарок с ID ${wishId} добавлен в мои подарки`)
      dispatch(RIBBON_THUNK.addGift({ wishId }))
   }

   const handleReport = (wishId) => {
      console.log(`Пожаловались на подарок с ID ${wishId}`)
      // Пример: dispatch(REPORT_WISH(wishId))
   }

   return (
      <StyledContainer>
         <Typography>Лента</Typography>

         <Box className="content">
            {feed.map((item) => (
               <RibbonCard
                  key={item.id}
                  wish={item}
                  onNavigate={() => handleNavigate(item.id)}
                  handleReserve={handleReserve}
                  handleAddToGifts={handleAddToGifts}
                  handleReport={handleReport}
               />
            ))}
         </Box>
      </StyledContainer>
   )
}

export default Ribbon

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',
   padding: '0 20px',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },

   '& .content': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
   },
}))
