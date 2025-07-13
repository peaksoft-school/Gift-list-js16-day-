import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { RIBBON_THUNK } from '../../../store/slices/ribbon/RibbonThunk'
import RibbonCard from '../card/RibbonCard'

const Ribbon = () => {
   const dispatch = useDispatch()

   const { feed } = useSelector((state) => state.ribbon)

   console.log(feed)

   useEffect(() => {
      dispatch(RIBBON_THUNK.getAllFeed())
      // dispatch(RIBBON_THUNK.getFeedById(1))
   }, [dispatch])

   return (
      <StyledContainer>
         <Typography>Лента</Typography>

         <Box className="content">
            {feed.map((item) => (
               <RibbonCard key={item.id} wish={item} />
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
