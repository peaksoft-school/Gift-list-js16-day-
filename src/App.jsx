import { Users } from './utils/constants/user'
import UserCards from './components/UI/UserCards'

const App = () => {
   return (
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
         
         <UserCards users={Users} />
   
      </div>
   )
}

export default App
