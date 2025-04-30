import { AppBar, Toolbar, Box, styled } from '@mui/material'
import MeatBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import InputSearch from '../components/UI/InputSearch'
import Input from '../components/UI/Input'
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
                  <StyledMeetBox
                     variant="profile"
                     options={PROFILE_OPTIONS}
                     handleChange={handleChange}
                  />
               <>
                  <StyledNotificationIcon src={Notification} alt="" />

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
   // position: 'absolute',
   // margin: '28px 0 0 14px',
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

const StyledMeetBox = styled(MeatBalls)(() => ({
   display: 'inline-block',
   marginLeft: '5%',
}))

export default Header
