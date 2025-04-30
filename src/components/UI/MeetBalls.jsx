import { isValidElement, useState } from 'react'
import { IconButton, Menu, MenuItem, styled } from '@mui/material'
// import { MoreHoriz, MoreVert } from '@mui/icons-material'
// import ArrowIcon from '../../assets/icons/chevrons.svg'
import Button from './Button'

const MeatBalls = ({
   variant = 'horiz',
   onChange,
   options,
   top = '0',
   left = '25',
}) => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (e) => {
      e.stopPropagation()

      setAnchorEl(e.currentTarget)
   }
   const handleClose = (e) => {
      e.stopPropagation()

      setAnchorEl(null)
   }
   return (
      <StyledMenu>
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
            onClick={handleClose}
         >
            {options.map(({ title, icon: Icon }) => (
               <StyledMenuItem
                  key={title}
                  onClick={(e) => {
                     e.stopPropagation()
                     handleClose(e)
                     onChange(e)
                  }}
                  value={title}
               >
                  {Icon && isValidElement(Icon) && Icon}

                  {title}
               </StyledMenuItem>
            ))}
         </Menu>
      </StyledMenu>
   )
}

export default MeatBalls

const StyledMenu = styled(Menu)(({ left, top }) => ({
   width: '20rem',
   left: `${left}px`,
   top: `${top}px`,
}))

const StyledMenuItem = styled(MenuItem)({
   display: 'flex',
})
const StyledMainMenuItem = styled(MenuItem)({
   img: {
      padding: '9px',
   },
})

const StyledMainButton = styled(Button)({
   img: {
      padding: '20px',
   },
})
