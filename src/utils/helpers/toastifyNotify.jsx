import { toast } from 'react-toastify'
import { styled, Typography } from '@mui/material'

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
