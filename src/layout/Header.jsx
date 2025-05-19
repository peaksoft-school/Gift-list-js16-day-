import { useLocation } from 'react-router'
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material'
import Input from '../components/UI/Input'
import MeatBalls from '../components/UI/MeetBalls'
import SearchInput from '../components/UI/SearchInput'
import { PROFILE_OPTIONS } from '../utils/helpers'
import Notification from '../assets/icons/notification.svg'

const Header = () => {
   const { pathname } = useLocation()

   return (
      <StyledCustomAppBar>
         <Toolbar>
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

                  <Typography className="user-name">Naruto Uzumaki</Typography>

                  <MeatBalls variant="profile" options={PROFILE_OPTIONS} />
               </>
            </StyledBox>
         </Toolbar>
      </StyledCustomAppBar>
   )
}

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
   width: '821px',
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiInputBase-root': {
      padding: '30px 10px',
      width: '90%',
   },
}))

const StyledCustomAppBar = styled(AppBar)(() => ({
   backgroundColor: 'white',
   width: '81.35%',
}))

const StyledNotificationIcon = styled('img')(() => ({
   width: '24px',
   margin: '-50px',
   marginRight: '30px',
}))

export default Header
