import React, { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import UserCharityCard from './UserCharityCard'
import Pluse from '../../assets/images/pluse.png'

import { USERCHARITY_THUNK } from '../../store/slices/userCharity/userCharityThunk'
import Button from '../UI/Button'
import { useNavigate } from 'react-router'

const UserListCharity = () => {
   const navigate = useNavigate()

   const { usersCharity } = useSelector((state) => state.userCharity)

   const dispatch = useDispatch()

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
   paddingTop: '30px',
   marginLeft: '230px',
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
