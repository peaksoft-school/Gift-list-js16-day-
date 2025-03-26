import styled from 'styled-components'
import { Button as MuiButton } from '@mui/material'

const Button = ({
   children,
   onClick,
   variant = 'contained',
   disabled,
   type = 'submit',
   ...rest
}) => {
   return (
      <StyledButton
         onClick={onClick}
         type={type}
         disabled={disabled}
         variant={variant}
         {...rest}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled(MuiButton)(({ variant }) => {
   const buttonStyles = {
      '&.MuiButton-root': {
         borderRadius: '10px',
         height: '53px',
         padding: '14px 32px',
         marginTop: '20px',
         fontSize: '18px',
      },
   }

   if (variant === 'contained') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

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
            color:"white",
         },
      }
   } else if (variant === 'warning') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

         backgroundColor: '#673AB7',

         '&:hover': {
            backgroundColor: '#5E35B1',
            color: '#fff',
         },
         '&:active': {
            backgroundColor: '#7e4cd4',
         },
         '&.Mui-disabled': {
            backgroundColor: '#7a52c5e0',
            color: '#fff',
         },
      }
   } else if (variant === 'outlined') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

         backgroundColor: '#8639B5',
         color: 'white',

         '&:hover': {
            backgroundColor: '#5E35B1',
            
         },
         '&:active': {
            backgroundColor: '#7e4cd4',
         },
         '&.Mui-disabled': {
            backgroundColor: '#1c1b1f38',
           color: "white"
         },
      }
   }

   return buttonStyles
})
