import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import CharityCard from '../../../components/UI/card/CharityCard'
import { useDispatch, useSelector } from 'react-redux'
import { CHARITY_THUNK } from '../../../store/slices/admin/charity/charityThunk'
import { useNavigate } from 'react-router'

const Charity = () => {
   const { charity } = useSelector((state) => state.charity)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(CHARITY_THUNK.getAllCharity())
   }, [])

   const handleNavigate = (id) => {
      dispatch(CHARITY_THUNK.getById({ id, navigate }))
   }

   const handleChangeOption = (option) => {
      if (option === 'Удалить') {
         dispatch(CHARITY_THUNK.deleteCharity({ id: giftId, navigate }))
      }
   }

   return (
      <StyledBlockList>
         <Typography variant="h5">Благотворительность</Typography>

         <Box className="charity-list">
            {charity.map((charity) => (
               <CharityCard
                  key={charity.giftId}
                  charity={charity}
                  onNavigate={handleNavigate}
                  onChangeOption={handleChangeOption}
               />
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
