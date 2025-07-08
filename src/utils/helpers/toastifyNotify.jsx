import { toast } from 'react-toastify'
import { Box, styled, Typography } from '@mui/material'

const toastifyNotify = ({ title, message, autoClose = 20000, type = '' }) => {
   toast[type](
      <StyledContainer>
         <StyledTitle>{title}</StyledTitle>
         <StyledMassege>{message}</StyledMassege>
      </StyledContainer>,

      {
         autoClose,
      }
   )
}

export default toastifyNotify

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '5px',
}))

const StyledTitle = styled('strong')(() => ({
   margin: '-5px 0px 7px 30px',
   position: 'absolute',
   fontSize: '18px',
   fontWeight: '500',
}))

const StyledMassege = styled(Typography)(() => ({
   margin: '20px 0 -20px 30px',
   position: 'absolute',
   fontSize: '18px',
   fontWeight: '400',
   color: '#333',
}))
