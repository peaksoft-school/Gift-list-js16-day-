import { useLocation } from 'react-router'
import { Box, styled, Typography } from '@mui/material'
import Input from '../components/UI/Input'
import MeatBalls from '../components/UI/MeetBalls'
import SearchInput from '../components/UI/SearchInput'
import { PROFILE_OPTIONS } from '../utils/helpers'
import Notification from '../assets/icons/notification.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_ACTIONS } from '../store/slices/auth/authSlice'

const Header = () => {
   const { role } = useSelector((state) => state.auth)

   const { pathname } = useLocation()

   const dispatch = useDispatch()

   const handleProfileOption = (option) => {
      if (option === 'Выход') {
         dispatch(AUTH_ACTIONS.logOut())
      } else if (option === 'Профиль') {
         console.log('Переход в профиль')
      }
   }

   return (
      <StyledCustomAppBar>
         <Box>
            <StyledBox>
               {pathname === '/admin/charity' ||
               pathname === '/user/charity' ? (
                  <StyledInputSearch />
               ) : (
                  <StyledInput
                     placeholder="Введите имя"
                     variant="outlined"
                     icon={true}
                  />
               )}

               <>
                  <StyledNotificationIcon src={Notification} alt="" />

                  <Typography className="user-name">
                     {role === 'ADMIN' ? 'Adminstrator' : 'Naruto Uzumaki'}
                  </Typography>

                  <MeatBalls
                     variant="profile"
                     options={PROFILE_OPTIONS}
                     onChange={handleProfileOption}
                  />
               </>
            </StyledBox>
         </Box>
      </StyledCustomAppBar>
   )
}

export default Header

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-evenly',
   top: '33px',
   width: '100%',

   '& .user-name': {
      width: '140px',
   },
}))

const StyledInputSearch = styled(SearchInput)(() => ({
   '& .MuiInputBase-root': {
      width: '99%',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiInputBase-root': {
      width: '99%',
      margin: '10px 0',
   },
}))

const StyledCustomAppBar = styled(Box)(() => ({
   backgroundColor: 'white',
   width: '100%',
   boxShadow: '0 4px 10px #0000001A',
   marginBottom: '40px',
   padding: '5px 20px',
}))

const StyledNotificationIcon = styled('img')(() => ({
   width: '24px',
   marginRight: '10px',
}))
