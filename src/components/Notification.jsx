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
         limit={1}
      />
   )
}

export default Notification

const StyledToastContainer = styled(ToastContainer)({
   '.Toastify__toast': {
      minWidth: '500px',
      height: '98px',
      borderRadius: '2px',
      fontFamily: 'Inter, sans-serif',
      padding: '30px 15px',
      display: 'flex',
      fontSize: '14px',

      boxShadow: '0px 4px 10px rgba(20, 18, 18, 0.1)',
   },

   '.Toastify__toast-body': {
      padding: '16px',
      fontSize: '14px',
      fontWeight: 500,
   },

   '.Toastify__toast--success': {
      backgroundColor: '#eafbe8',
      color: '#317e46',
      borderRadius: '3px',
      textAlign: 'start',
      border: '1px solid #82b78d',
   },
   '.Toastify__toast--info': {
      backgroundColor: '#EBEFF7',
      color: '#3772FF',
      border: '1px solid #375BB0',
      borderRadius: '7px',
   },
   '.Toastify__toast--warning': {
      backgroundColor: '#FFF3D8',
      border: '1px solid #ED9E44',
      color: '#FF8800',
      borderRadius: '7px',
   },

   '.Toastify__toast--error': {
      backgroundColor: '#FFEBEB',
      border: '1px solid #ea8e8e',
      color: '#E53535',
      borderRadius: '7px',
   },
   '&.Toastify__toast-container': {
      display: 'flex',
      justifyContent: 'start',
   },

   '.Toastify__toast-icon': {
      width: '18px',
      marginBottom: '38px',
   },
   '.Toastify__close-button': {
      padding: '15px',
   },
})
