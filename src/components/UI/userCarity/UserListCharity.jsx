import React, { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
// import CharityCard from './CharityCard'
import { useDispatch, useSelector } from 'react-redux'
// import { CHARITY_THUNK } from '../../../store/slices/charity/charityThunk'

const UserListCharity = () => {
   //    const { charity } = useSelector((state) => state.charity)

   const dispatch = useDispatch()

   //    console.log(charity)

   //    useEffect(() => {
   //       dispatch(CHARITY_THUNK.getAllCharity())
   //    }, [dispatch])

   return (
      <StyledBlockList>
         <StyledTypography>Благотворительность</StyledTypography>
         {/* <CharityCard charity={charity} /> */}
      </StyledBlockList>
   )
}

export default UserListCharity

const StyledBlockList = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   padding: ' 10px',
   marginTop: '80px ',
}))
const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '20px',
   lineHeight: ' 100%',
   letterSpacing: '0.2px',
   verticalAlignment: 'Middle',
   margin: '20px 20px',
}))
