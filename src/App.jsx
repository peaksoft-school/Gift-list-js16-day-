import Button from './components/UI/Button'
import Notification from './components/Notification'
import ToastifyNotify from './utils/helpers/ToastifyNotify'

const App = () => {
   return (
      <h1>
         <Button
            variant="contained"
            onClick={() =>
               ToastifyNotify({
                  title: 'Успешно',
                  message: 'Вы успешно зарегистрировались',
                  autoClose: 3000,
                  type: 'info',
               })
            }
         >
            Зарегистрироваться
         </Button>
         <Notification />
      </h1>
   )
}

export default App
