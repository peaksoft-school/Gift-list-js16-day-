import { useState } from 'react'
import {
   Menu as MuiMenu,
   Box,
   styled,
   MenuItem,
   IconButton,
} from '@mui/material'
import MenuIcon from '../../../assets/images/MenuIcon.png'

const Menu = ({ items }) => {
   const [block, setBlock] = useState(null)

   const handleClick = (event) => setBlock(event.currentTarget)

   const handleClose = () => setBlock(null)

   return (
      <Box>
         <IconButton onClick={handleClick} sx={{ left: '90px' }}>
            <img src={MenuIcon} alt="menu" />
         </IconButton>

         <MuiMenu anchorEl={block} open={Boolean(block)} onClose={handleClose}>
            {items.map((item, i) => (
               <StyledMenuItem
                  key={i}
                  onClick={() => {
                     item.onClick?.(), handleClose()
                  }}
               >
                  {item.icon && <img src={item.icon} alt="block,delete" />}

                  {item.label}
               </StyledMenuItem>
            ))}
         </MuiMenu>
      </Box>
   )
}

export default Menu

const StyledMenuItem = styled(MenuItem)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: ' 24px',
   letterSpacing: '0px',

   '& img': {
      padding: '8px',
   },
}))
