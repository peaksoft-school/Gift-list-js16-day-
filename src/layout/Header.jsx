import Notification from '../assets/icons/notification.svg'
import Input from '../components/UI/Input'
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material'
import MeatBalls from '../components/UI/MeetBalls'
import { PROFILE_OPTIONS } from '../utils/helpers'
import { useLocation } from 'react-router'
import InputSearch from '../components/UI/Input-search/InputSearch'

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
   height: '40px',
   top: '33px',
   marginLeft: '270px',
   width: '100%',

   '& .user-name': {
      width: '140px',
   },
}))

const StyledInputSearch = styled(InputSearch)(() => ({
   width: '821px',
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiInputBase-root': {
      padding: '2px 10px',
      width: '90%',
   },
}))

const StyledCustomAppBar = styled(AppBar)(() => ({
   position: 'fixed',
   zIndex: 1,
   marginBottom: 10,
}))

const StyledNotificationIcon = styled('img')(() => ({
   width: '24px',
   marginRight: '10px',
}))
