import React, { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import UserCharityCard from './UserCharityCard'
import Pluse from '../../../assets/images/pluse.png'
import Bookss from '../../../assets/images/bookss.png'
import Holidays from '../../../assets/images/holidays.png'
import { USERCHARITY_THUNK } from '../../../store/slices/userCharity/userCharityThunk'
import Button from '../Button'
import { useNavigate } from 'react-router'

const UserListCharity = () => {
   const navigate = useNavigate()
   // const { userCharity } = useSelector((state) => state.userCharity)
   const usersCharity = [
      {
         id: 0,
         name: 'Иван Иванов',
         holidayName: 'День Победы',
         status: 'NEW',
         image: Bookss,
         massage: 'С праздником! ',
         createdAt: '2025-05-26',
         imageProfile: Holidays,
      },
      {
         id: 1,
         name: 'Мария Смирнова',
         holidayName: 'Новый год',
         status: 'NEW',
         image: Bookss,
         massage: 'С Новым годом! ',
         createdAt: '2025-05-26',
         imageProfile: Holidays,
      },
      {
         id: 2,
         name: 'Алексей Кузнецов',
         holidayName: '8 Марта',
         status: 'USED',
         image: Bookss,
         massage: 'Поздравляю!',
         createdAt: '2025-05-26',
         imageProfile: Holidays,
      },
   ]

   const dispatch = useDispatch()

   //    console.log(charity)

   useEffect(() => {
      dispatch(USERCHARITY_THUNK.getAllUserCharity())
   }, [dispatch])

   return (
      <StyledBlockList>
         <HeaderRow>
            <StyledTypography>Благотворительность</StyledTypography>

            <StyledMainButton
               variant="outlined"
               color="primary"
               type="button"
               onClick={() => navigate('form')}
            >
               <img src={Pluse} alt="icon" />
               Добавить праздник
            </StyledMainButton>
         </HeaderRow>

         <UserCharityCard usersCharity={usersCharity} />
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
const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
   padding: '10px',
   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
   '& img ': {
      marginRight: '10px',
      color: '#FFFFFF',
   },
}))
const StyledMainButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      width: '250px',
      height: '40px',
      fontSize: '14px',
   },
}))
