import { isValidElement, useState } from 'react'
import { IconButton, Menu, MenuItem, styled } from '@mui/material'
import { MoreHoriz, MoreVert } from '@mui/icons-material'
import ArrowIcon from '../../assets/icons/chevrons.svg'

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
      <>
         <IconButton onClick={handleClick}>
            {variant !== 'profile' &&
               (variant === 'horiz' ? <MoreHoriz /> : <MoreVert />)}
            {variant === 'profile' && <img src={ArrowIcon} alt="" />}
         </IconButton>

         <StyledMenu
            left={left}
            top={top}
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
         </StyledMenu>
      </>
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
   gap: '10px',
})
