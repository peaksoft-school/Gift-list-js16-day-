import MeetBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import InputSearch from '../components/UI/Input-search/InputSearch'
import Input from '../components/UI/Input'
import { AppBar, Toolbar, Box, styled } from '@mui/material'
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
   gap: '70px',
   height: '40px',
   top: '33px',
   marginLeft: '280px',
}))
const StyledInputSearch = styled(InputSearch)(() => ({
   width: '821px',
}))
const StyledInput = styled(Input)(() => ({
   '& .MuiInputBase-root': {
      padding: '33px',
      width: '742px',
   },
}))
const StyledUnionIcon = styled('img')(() => ({
   position: 'absolute',
   margin: '28px 0 0 14px',
   width: '18px',
}))
const StyledCustomAppBar = styled(AppBar)(() => ({
   backgroundColor: 'transparent',
   boxShadow: 'none',
}))

const StyledNotificationIcon = styled('img')(() => ({
   width: '24px',
   margin: '-53px',
   marginRight: '20px',
}))

const StyledMeetBox = styled(MeetBalls)(() => ({
   display: 'inline-block',
   marginLeft: '5%',
}))

export default Header
