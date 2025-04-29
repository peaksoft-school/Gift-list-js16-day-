import { AppBar, Toolbar, Box, styled } from '@mui/material'
import InputSearch from '../components/UI/InputSearch'
import Input from '../components/UI/Input'
import MeatBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import UnionIcon from '../assets/icons/Union.svg'
import { PROFILE_OPTIONS } from '../utils/helpers'

const Header = () => {
   const role = 'ADMIN'

   const handleChange = (e) => {
      const selected = e.currentTarget.getAttribute('value')

      console.log('Выбран пункт:', selected)
   }

   return (
      <StyledCustomAppBar>
         <Toolbar>
            <StyledBox>
               {role === 'USER' ? (
                  <StyledInputSearch />
               ) : role === 'ADMIN' ? (
                  <>
                     <StyledUnionIcon src={UnionIcon} alt="" />

                     <StyledInput
                        placeholder="Введите имя"
                        variant="outlined"
                     />
                  </>
               ) : null}
               <>
                  <StyledNotificationIcon src={Notification} alt="" />

                  <StyledMeetBox
                     variant="profile"
                     options={PROFILE_OPTIONS}
                     handleChange={handleChange}
                  />
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

const StyledMeetBox = styled(MeatBalls)(() => ({
   display: 'inline-block',
   marginLeft: '5%',
}))

export default Header
