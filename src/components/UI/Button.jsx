import styled from 'styled-components'
import { Button as MuiButton } from '@mui/material'

const Button = ({
   children,
   onClick,
   variant,
   disabled,
   type = 'submit',
   ...rest
}) => {
   return (
      <StyledButton
         onClick={onClick}
         type={type}
         disabled={disabled}
         variant="contained"
         {...rest}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled(MuiButton)(({ variant }) => {
   const buttonStyles = {
      '&MuiButton-root': {
         borderRadius: '10px',
         height: '53px',
         padding: '14px 32px',
         marginTop: '20px',
         fontSize: '18px',
      },
   }

   if (variant === "contained.error") {
      buttonStyles['&MuiButton-root'] = {
         ...buttonStyles['&MuiButton-root'],

         backgroundColor: '#F44336',
         color: '#fff',

         '&:hover': {
            backgroundColor: '#D32f2F',
            transition: 'all 0.3s',
         },

         '&:active': {
            backgroundColor: '#B71C1C',
         },

         '&.Mui-disabled': {
            backgroundColor: '#BDBDBD',
         },
      }
   } else if (variant === 'warning') {
      buttonStyles['&MuiButton-root'] = {
         ...buttonStyles['&MuiButton-root'],

         backgroundColor: '#673AB7',

         '&:hover': {
            backgroundColor: '#5E35B1',
            color: '#fff',
         },
         '&:active': {
            backgroundColor: '#7e4cd4',
         },
         '&.Mui-disabled': {
            backgroundColor: '#B39DDB',
            color: '#ffffff99',
         },
      }
   } else if (variant === 'outlined') {
      buttonStyles['&MuiButton-root'] = {
         ...buttonStyles['&MuiButton-root'],

         backgroundColor: '#E0E0E0',
         color: '#9E9E9E',

         '&:hover': {
            backgroundColor: '#5E35B1',
            color: '#fff',
         },
         '&:active': {
            backgroundColor: '#7e4cd4',
         },
         '&.Mui-disabled': {
            backgroundColor: '#ffffffb1',
            color: '#ffffff93',
         },
      }
      return buttonStyles;
   }
})
