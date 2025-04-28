import MeetBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import InputSearch from '../components/UI/Input-search/InputSearch'
import Input from '../components/UI/Input'
import { AppBar, Toolbar, Box, styled } from '@mui/material/'
import UnionIcon from '../assets/icons/Union.svg'

const Header = ({ role }) => {
   return (
      <StyledCustomAppBar>
         <Toolbar>
            <StyledBox>
               {role === 'user' ? (
                  <StyledInputSearch />
               ) : role === 'admin' ? (
                  <div>
                     <StyledUnionIcon src={UnionIcon} alt="" />
                     <StyledInput
                        placeholder="Введите имя"
                        variant="outlined"
                     />
                  </div>
               ) : null}
               <div>
                  <StyledNotificationIcon src={Notification} alt="" />

                  <StyledMeetBox />
               </div>
            </StyledBox>
         </Toolbar>
      </StyledCustomAppBar>
   )
}

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-evenly',
   width: '100%',
   height: '40px',
   top: '23px',
   left: '20px',
   marginLeft: '10px',
}))
const StyledInputSearch = styled(InputSearch)(() => ({
   width: '821px',
}))
const StyledInput = styled(Input)(() => ({
   '& .MuiInputBase-root': {
      padding: '33px',
      width: '821px',
   },
}))
const StyledUnionIcon = styled('img')(() => ({
   position: 'absolute',
   margin: '28px 0 0 14px',
   width: '18px',
}))
const StyledCustomAppBar = styled(AppBar)(() => ({
   position: 'static',
   backgroundColor: 'transparent',
   boxShadow: 'none',
}))

const StyledNotificationIcon = styled('img')(() => ({
   width: '24px',
   margin: '-50px',
   marginRight: '30px',
}))

const StyledMeetBox = styled(MeetBalls)(() => ({
   display: 'inline-block',
   marginLeft: '5%',
}))

export default Header
