import React from 'react'
import { Menu, MenuItem, Button, styled } from '@mui/material'
import Notification from "../../assets/icons/notification.svg"
import Profile from "../../assets/icons/profile.svg"
import ExitIcon from "../../assets/icons/exit.svg"

const MeetBalls = () => {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div>
         <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="#212121"
         >
            <img src={Notification} alt="" />
            Naruto Uzumaki
         </Button>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose}>
               <img src={Profile} alt="" />
               Профиль
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <img src={ExitIcon} alt="" />
            Выход</MenuItem>
         </Menu>
      </div>
   )
}

export default MeetBalls
