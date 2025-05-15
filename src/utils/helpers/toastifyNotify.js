import { styled, Typography } from '@mui/material'
import { toast } from 'react-toastify'

const toastifyNotify = ({ title, message, autoClose = 20000, type = '' }) => {
   toast[type](
      <>
         <StyledTitle>{title}</StyledTitle>
         <StyledMassege>{message}</StyledMassege>
      </>,
      {
         autoClose,
      }
   )
}

export default toastifyNotify

const StyledTitle = styled('strong')(() => ({
   margin: '-29px 0px 0 0px',
   position: 'absolute',
   fontSize: '16px',
   fontWeight: '500',
}))

const StyledMassege = styled(Typography)(() => ({
   position: 'absolute',
   fontSize: '16px',
   fontWeight: '400',
   color: '#333',
}))
