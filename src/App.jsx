import React from 'react'
import Notification from './components/Notification'
import ToastifyNotify from './utils/helpers/ToastifyNotify'
import InputSearch from './components/UI/Input-search/InputSearch'

const App = () => {
   return (
      <div>
         {/* <button
            onClick={() =>
               ToastifyNotify({
                  title: 'Успешно',
                  message: 'Текст сообщение',
                  autoClose: '2000',
                  type: 'succes',
               })
            }
         >
            hello
         </button>

         <Notification /> */}
         <InputSearch />
      </div>
   )
}

export default App
