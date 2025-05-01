import Notification from './components/Notification'
import ToastifyNotify from './utils/helpers/ToastifyNotify'

const App = () => (
   <>
      <button
         onClick={() =>
            ToastifyNotify({
               title: 'Успешно',
               message: 'Beka iuuuuuu',
               autoClose: 3000,
               type: 'error',
            })
         }
      >hi</button>
      <Notification />
   </>
)

export default App
