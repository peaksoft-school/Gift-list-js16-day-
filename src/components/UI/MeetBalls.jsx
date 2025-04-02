import React from 'react'
import { Menu, MenuItem, Button, styled } from '@mui/material'
import Profile from "../../assets/icons/profile.svg"
import ExitIcon from "../../assets/icons/exit.svg"
import chevrons from "../../assets/icons/chevrons.svg"
import profilebackg from '../../assets/icons/profilebackg.svg'

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
           
            <img src={profilebackg} alt="" />
            Naruto Uzumaki 
            <img src={chevrons} alt="" />
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
