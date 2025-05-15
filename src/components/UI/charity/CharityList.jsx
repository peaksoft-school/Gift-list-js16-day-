import React, { useEffect } from 'react'
import AvatarPhoto from '../../../assets/images/avatarPhoto.png'
import Books from '../../../assets/images/Books.png'
import { Box, styled, Typography } from '@mui/material'
import CharityCard from './CharityCard'
import { useDispatch, useSelector } from 'react-redux'
import { CHARITY_THUNK } from '../../../store/slices/charity/charityThunk'

// const charity = [
//    {
//       id: 1,
//       avatar: AvatarPhoto,
//       author: 'Rupert Kunde ',
//       title: 'Письма Элджертона',
//       tag: 'Новый',
//       bookImage: Books,
//       date: '08.05.2025',
//       status: 'Забронирован',
//    },
//    {
//       id: 1,
//       avatar: AvatarPhoto,
//       author: 'Rupert Kunde ',
//       title: 'Письма Элджертона',
//       tag: 'Б/У',
//       bookImage: Books,
//       date: '08.05.2025',
//       status: 'Забронирован',
//    },
// ]
const CharityList = () => {
   const { charity } = useSelector((state) => state.charity)

   const dispatch = useDispatch()

   console.log(charity)

   useEffect(() => {
      dispatch(CHARITY_THUNK.getAllCharity())
   }, [dispatch])

   return (
      <StyledBlockList>
         <StyledTypography>Благотворительность</StyledTypography>
         <CharityCard charity={charity} />
      </StyledBlockList>
   )
}

export default CharityList

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
