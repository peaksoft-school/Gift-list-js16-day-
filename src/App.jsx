import { Button } from "@mui/material"
import Notification from "./components/Notification"
import ToastifyNotify from './utils/helpers/ToastifyNotify'

const App = () => {
   return (
      <h1>
         <Button
            onClick={() =>
               ToastifyNotify({
                  title: 'Успешно',
                  message: 'Вы успешно зарегистрировались',
                  autoClose: 3000,
                  type: 'success',
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
