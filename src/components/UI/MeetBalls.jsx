import { Menu, MenuItem, Button } from '@mui/material'
import Profile from '../../assets/icons/profile.svg'
import ExitIcon from '../../assets/icons/exit.svg'
import chevrons from '../../assets/icons/chevrons.svg'
import profilebackg from '../../assets/icons/profilebackg.svg'
import { useState } from 'react'
import styled from 'styled-components'

const MeetBalls = () => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <StyledMain>
         <img src={profilebackg} alt="" />

         <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="#212121"
         >
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
            <StyledMainMenuItem onClick={handleClose}>
               <img
                  src={Profile}
                  alt=""
               />
               Профиль
            </StyledMainMenuItem>
            <StyledMainMenuItem onClick={handleClose}>
               <img src={ExitIcon} alt="" />
               Выход
            </StyledMainMenuItem>
         </Menu>
      </StyledMain>
   )
}
const StyledMain = styled('div')({
   display: 'flex',
})
const StyledMainMenuItem = styled(MenuItem)({
   img: {
      padding: '9px',
   },
})

export default MeetBalls
