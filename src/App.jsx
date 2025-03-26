import Button from './components/UI/Button'
import { Add } from '@mui/icons-material'



const App = () => {
   return (
      <div>
         <Button variant="warning"  color="error" startIcon={<Add />}>
            Добавить подарок
         </Button>
      </div>
   )
}

export default App
