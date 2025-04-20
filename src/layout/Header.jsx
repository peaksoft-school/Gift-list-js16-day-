import MeetBalls from '../components/UI/MeetBalls'
import Notification from '../assets/icons/notification.svg'
import InputSearch from '../components/UI/Input-search/InputSearch'
import Input from '../components/UI/Input'
import React from 'react'
import { AppBar, Toolbar, Box, TextField, Typography } from '@mui/material'

import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const Header = ({ role }) => {
   return (
      <AppBar
         position="static"
         sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
         <Toolbar
            sx={{
               flexDirection: 'column',
               alignItems: 'flex-start',
               gap: 1,
            }}
         >
            <StyledBox>
               {role === 'user' ? (
                  <InputSearch sx={{ width: '821', height: '40px' }} />
               ) : role === 'admin' ? (



                  <StyledInput
                     label="Поиск"
                     variant="outlined"
                     
                  />
               ) : null}

               <img src={Notification} alt="" />

               <MeetBalls />
            </StyledBox>
         </Toolbar>
      </AppBar>
   )
}

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '1086px',
   height: '40',
   top: '23px',
   left: '20px',
   marginLeft: '10px',
}))
const StyledInput = styled(TextField)(() => ({
   '& .MuiInputBase-root': {
      width: '821px',
      height: '40px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
   },
   '& input': {
      height: '100%',
      padding: '20px ',
      boxSizing: 'border-box',
      alignItems: 'center',
   },
}))

export default Header
