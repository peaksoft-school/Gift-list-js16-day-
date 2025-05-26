import { Box, styled, Typography } from '@mui/material'
import { useEffect } from 'react'
import { USERS_THUNK } from '../../../store/slices/admin/users/usersThunk'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumbs from '../../UI/BreadCrumbs'
import UserProfileCard from '../../UI/card/UserProfileCard'
import Card from '../../UI/card/Card'
import { NavLink } from 'react-router-dom'

const InnerUser = () => {
   const { user, wishList, holidays, charity } = useSelector(
      (state) => state.users
   )

   const { id, lastname } = user

   const dispatch = useDispatch()

   const links = [
      { href: '/admin/users', label: 'Пользователи' },
      { href: `/admin/users/${id}`, label: `${lastname}` },
   ]

   const getAllBoolean = false

   useEffect(() => {
      if (id) {
         dispatch(USERS_THUNK.getUser({ id }))
         dispatch(USERS_THUNK.getUserWishList({ id, getAllBoolean }))
         dispatch(USERS_THUNK.getUserHolidays({ id, getAllBoolean }))
         dispatch(USERS_THUNK.getUserCharity({ id, getAllBoolean }))
      }
   }, [id])

   return (
      <StyledContainer>
         <Box>
            <BreadCrumbs links={links} />

            <UserProfileCard user={user} />
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Желаемые подарки</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            {wishList.map((wish) => (
               <Card wish={wish} key={wish.id} />
            ))}
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Праздники</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            {holidays.map((wish) => (
               <Card wish={wish} key={wish.id} />
            ))}
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Благотворительность</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            {charity.map((wish) => (
               <Card wish={wish} key={wish.id} />
            ))}
         </Box>
      </StyledContainer>
   )
}

export default InnerUser

const StyledContainer = styled(Box)(() => ({
   padding: '90px 0 90px 20rem',
   backgroundColor: '#f7f8fa',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '44px',

   '& .title-content': {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: '2.5rem',

      '& .title': {
         fontSize: '20px',
         fontWeight: '500',
         lineHeight: '100%',
         letterSpacing: '0.2px',
         marginBottom: '1.5rem',
      },

      '& .see-all': {
         color: 'blue',
      },
   },
}))
