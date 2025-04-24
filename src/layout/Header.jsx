import MeetBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import InputSearch from '../components/UI/Input-search/InputSearch'
import { Input as MainInput } from '../components/UI/Input'
import { AppBar, Toolbar, Box, styled } from '@mui/material/'

const Header = ({ role }) => {
   return (
      <StyledCustomAppBar AppBar position="static">
         <Toolbar>
            <StyledBox>
               {role === 'user' ? (
                  <StyledInputSearch />
               ) : role === 'admin' ? (
                  <StyledInput placeholder="Поиск" variant="outlined" />
               ) : null}

               <img src={Notification} alt="" />

               <MeetBalls />
            </StyledBox>
         </Toolbar>
      </StyledCustomAppBar>
   )
}

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%',
   height: '40px',
   top: '23px',
   left: '20px',
   marginLeft: '10px',
}))
const StyledInputSearch = styled(InputSearch)(() => ({
   width: '821px',
}))
const StyledInput = styled(MainInput)(() => ({
   '& .MuiInputBase-root': {
      width: '821px',
   },
   input: {
      padding: '30px',
   },
}))
const StyledCustomAppBar = styled(AppBar)(() => ({
   backgroundColor: 'transparent',
   boxShadow: 'none',
}))

export default Header
