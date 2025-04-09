import Notification from './components/Notification'
import Button from './components/UI/Button'
import ToastifyNotify from './utils/helpers/ToastifyNotify'

const App = () => {
   return (
      <div>
         <Button
            onClick={() =>
               ToastifyNotify({
                  title: 'Успешно',
                  message: 'Вы успешно зарегистрировались',
                  autoClose: 3000,
                  type: 'error',
               })
            }
         >
            Зарегистрироваться
         </Button>
         <Notification />
      </div>
   )
}

export default App
