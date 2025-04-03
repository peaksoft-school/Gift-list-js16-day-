import { ToastContainer } from 'react-toastify'
import { styled } from '@mui/material/styles'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
   return (
      <StyledToastContainer
         position="top-right"
         closeOnClick
         draggable
         hideProgressBar
         limit={3}
      />
   )
}

export default Notification

const StyledToastContainer = styled(ToastContainer)({
   '.Toastify__toast': {
      minWidth: '500px',
      borderRadius: '2px',
      fontFamily: 'Inter, sans-serif',

      padding: '12px 28px 12px 28px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      boxShadow: '0px 4px 10px rgba(20, 18, 18, 0.1)',
   },

   '.Toastify__toast-body': {
      padding: '16px',
      fontSize: '14px',
      fontWeight: 500,
   },

   '.Toastify__toast--success': {
      backgroundColor: 'rgba(87, 241, 100, 0.5)',
      color: '#3cbb22',
      borderRadius: '3px',
      textAlign: 'start',
   },
   '.Toastify__toast--info': {
      backgroundColor: 'rgba(90, 180, 192, 0.5)',
      color: '#0078af',
      borderRadius: '7px',
   },
   '.Toastify__toast--warning': {
      backgroundColor: 'rgba(233, 230, 46, 0.322)',
      color: '#e6a01e',
      borderRadius: '7px',
   },

   '.Toastify__toast--error': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      color: '#fa5b5b',
      borderRadius: '7px',
   },
   '& .Toastify__toast-container': {
      marginRight: '30px',
   },
})
