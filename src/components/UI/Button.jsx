import { styled } from '@mui/material/styles'

const Button = ({ variant = 'colors', children, ...props }) => {
   return (
      <StyledButton variant="contained"  {...props}>
         {children}
      </StyledButton>
   )
}

export default Button

const StyledButton = styled(Button)(({ variant }) => {
   const colors = {
      primary: {
         backgroundColor: '#D32F2F',
         color: '#fff',
         '&:hover': { backgroundColor: '#B71C1C' },
         '&:disabled': { backgroundColor: '#E57373', color: '#ffffff99' },
      },
      secondary: {
         backgroundColor: '#673AB7',
         color: '#fff',
         '&:hover': { backgroundColor: '#5E35B1' },
         '&:disabled': { backgroundColor: '#B39DDB', color: '#ffffff99' },
      },
      disabled: {
         backgroundColor: '#E0E0E0',
         color: '#9E9E9E',
      },
   }

   
})
