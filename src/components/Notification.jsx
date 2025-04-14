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
         style={{ paddingLeft: '220px' }}
      />
   )
}

export default Notification

const StyledToastContainer = styled(ToastContainer)({
   '.Toastify__toast': {
      minWidth: '500px',
      borderRadius: '2px',
      fontFamily: 'Inter, sans-serif',
      padding: '12px 28px',
      display: 'flex',
      justifyContent: 'flex-start',

      boxShadow: '0px 4px 10px rgba(20, 18, 18, 0.1)',
   },

   '.Toastify__toast-body': {
      padding: '16px',
      fontSize: '14px',
      fontWeight: 500,
   },

   '.Toastify__toast--success': {
      backgroundColor: '#C6F0C2',
      color: '#3cbb22',
      borderRadius: '3px',
      textAlign: 'start',
      border: '1px solid #3cbb22',
   },
   '.Toastify__toast--info': {
      backgroundColor: '#EBEFF7',
      color: '#0078af',
      border: '1px solid #0078af',
      borderRadius: '7px',
   },
   '.Toastify__toast--warning': {
      backgroundColor: '#FFF3D8',
      border: '1px solid #e6a01e',
      color: '#e6a01e',
      borderRadius: '7px',
   },

   '.Toastify__toast--error': {
      backgroundColor: '#FFEBEB',
      border: '1px solid #fa5b5b',
      color: '#fa5b5b',
      borderRadius: '7px',
   },
   '&.Toastify__toast-container': {
      display: 'flex',
      justifyContent: 'start',
   },

   '.Toastify__toast-icon ': {
      width: '18px',
      marginBottom: '18px',
   },
})
