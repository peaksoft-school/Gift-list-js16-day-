import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import CharityCard from '../../../components/UI/card/CharityCard'
import { useDispatch, useSelector } from 'react-redux'
import { CHARITY_THUNK } from '../../../store/slices/admin/charity/charityThunk'

const Charity = () => {
   const { charity } = useSelector((state) => state.charity)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(CHARITY_THUNK.getAllCharity())
   }, [])

   return (
      <StyledBlockList>
         <Typography variant="h5">Благотворительность</Typography>

         <Box className="charity-list">
            {charity.map((charity) => (
               <CharityCard key={charity.giftId} charity={charity} />
            ))}
         </Box>
      </StyledBlockList>
   )
}

export default Charity

const StyledBlockList = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   padding: '0px 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',

   '& .charity-list': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
   },
}))
