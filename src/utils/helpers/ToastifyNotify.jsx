import { toast } from 'react-toastify'

const ToastifyNotify = ({
   title,
   message,
   autoClose = 3000,
   type = 'success',
}) => {
   toast[type](
      <div>
         <strong>{title}</strong>
         <p style={{ color: '#333' }}>{message}</p>
      </div>,
      {
         autoClose,
      }
   )
}

export default ToastifyNotify
