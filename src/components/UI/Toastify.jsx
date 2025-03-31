import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = (type) => {
   switch (type) {
      case 'success':
         toast.success('✅ Успешно! Это сообщение об успехе.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         })
         break
      case 'warning':
         toast.warn('⚠️ Внимание! Это предупреждение.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         })
         break
      case 'info':
         toast.info('ℹ️ Информация: Это информационное сообщение.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         })
         break
      case 'error':
         toast.error('❌ Ошибка! Это сообщение об ошибке.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
         })
         break
      default:
         toast('Это простое уведомление.')
   }
}

const Toastify = () => {
   return (
      <div style={{ padding: '20px' }}>
         <button onClick={() => notify('success')}>Успешно ✅</button>
         <button onClick={() => notify('warning')}>Внимание ⚠️</button>
         <button onClick={() => notify('info')}>Информация ℹ️</button>
         <button onClick={() => notify('error')}>Ошибка ❌</button>
         <ToastContainer />
      </div>
   )
}

export default Toastify
