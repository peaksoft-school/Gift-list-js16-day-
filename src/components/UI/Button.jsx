import { Button as MuiButton, styled } from '@mui/material'
import { forwardRef } from 'react'

const Button = forwardRef(
   (
      {
         children,
         onClick,
         variant = 'contained',
         disabled,
         type = 'submit',
         ...rest
      },
      ref
   ) => (
      <StyledButton
         onClick={onClick}
         type={type}
         disabled={disabled}
         variant={variant}
         ref={ref}
         {...rest}
      >
         {children}
      </StyledButton>
   )
)

export default Button

const StyledButton = styled(MuiButton)(({ variant }) => {
   const buttonStyles = {
      '&.MuiButton-root': {
         borderRadius: '10px',
         padding: '10px 20px',
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
            color: 'white',
         },
      }
   } else if (variant === 'warning') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

         backgroundColor: 'white',
         border: '1px solid #8D949E',
         color: '#8D949E',

         '&:hover': {
            backgroundColor: '#5E35B1',
            color: '#fff',
            borderColor: '#5E35B1',
         },

         '&:active': {
            backgroundColor: '#AB62D8',
            borderColor: '#AB62D8',
         },

         '&.Mui-disabled': {
            color: '#1C1B1F1F',
            borderColor: '#1C1B1F1F',
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
            backgroundColor: '#1C1B1F1F',
            color: 'white',
            border: 'none',
         },
      }
   }

   return buttonStyles
})
