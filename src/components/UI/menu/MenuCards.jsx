import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Block from '../../../assets/images/Block.png'
import Delete from '../../../assets/images/Delete.png'
import { Box, styled } from '@mui/material'
import MenuIcon from '../../../assets/images/MenuIcon.png'

function ActionMenu() {
   const [block, setBlock] = useState(null)

   const handleClick = (event) => {
      setBlock(event.currentTarget)
   }

   const handleClose = () => {
      setBlock(null)
   }

   return (
      <Box>
         <IconButton onClick={handleClick} sx={{ left: '90px' }}>
            <img src={MenuIcon} alt="icon" />
         </IconButton>
         <Menu anchorEl={block} open={Boolean(block)} onClose={handleClose}>
            <StyledBox>
               <StyledMenuItem>
                  <img src={Block} alt="block" />
                  Заблокировать
               </StyledMenuItem>
               <StyledMenuItem>
                  <img src={Delete} alt="block" />
                  Удалить
               </StyledMenuItem>
            </StyledBox>
         </Menu>
      </Box>
   )
}

export default ActionMenu

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   padding: '0',

   '& img': {
      padding: '5px',
   },
}))
const StyledMenuItem = styled(MenuItem)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: ' 24px',
   letterSpacing: '0px',
}))
