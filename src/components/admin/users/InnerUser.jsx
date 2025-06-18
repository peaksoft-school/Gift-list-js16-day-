import { Box, styled, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../UI/card/Card'
import { NavLink } from 'react-router-dom'
import { USERS_THUNK } from '../../../../store/slices/admin/users/usersThunk'
import BreadCrumbs from '../../../UI/BreadCrumbs'
import UserProfileCard from '../../../UI/card/UserProfileCard'

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
      dispatch(USERS_THUNK.getUserWishList({ id, getAllBoolean }))
      dispatch(USERS_THUNK.getUserHolidays({ id, getAllBoolean }))
      dispatch(USERS_THUNK.getUserCharity({ id, getAllBoolean }))
   }, [id])

   const handleDeleteUser = (id) => {
      console.log(id)

      dispatch(USERS_THUNK.deleteUser({ userId: id }))
   }

   return (
      <StyledContainer>
         <Box>
            <BreadCrumbs links={links} />

            <UserProfileCard user={user} onDelete={handleDeleteUser} />
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Желаемые подарки</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            <Box className="wish-list">
               {wishList.map((wish) => (
                  <Card wish={wish} key={wish.id} />
               ))}
            </Box>
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Праздники</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            <Box className="wish-list">
               {holidays.map((wish) => (
                  <Card wish={wish} key={wish.id} />
               ))}
            </Box>
         </Box>

         <Box>
            <Box className="title-content">
               <Typography className="title">Благотворительность</Typography>
               <NavLink className="see-all">Смотреть все</NavLink>
            </Box>

            <Box className="wish-list">
               {charity.map((wish) => (
                  <Card wish={wish} key={wish.id} />
               ))}
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default InnerUser

const StyledContainer = styled(Box)(() => ({
   backgroundColor: '#f7f8fa',
   display: 'flex',
   flexDirection: 'column',
   gap: '44px',
   margin: '0 0 0 20px',

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

   '& .wish-list': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '60px',
   },
}))
