import { toast } from 'react-toastify'
import styled from 'styled-components'

const ToastifyNotify = ({ title, message, autoClose = 20000, type = '' }) => {
   toast[type](
      <div>
         <StyledTitle>{title}</StyledTitle>
         <StyledMassege style={{ color: '#333' }}>{message}</StyledMassege>
      </div>,
      {
         autoClose,
      }
   )
}

export default ToastifyNotify
const StyledTitle = styled('strong')(() => ({
   margin: '-29px 0px 0 0px',
   position: 'absolute',
   fontSize: '16px',
   fontWeight: '500',
}))

const StyledMassege = styled('p')(() => ({
   position: 'absolute',
   fontSize: '16px',
   fontWeight: '400',
}))
