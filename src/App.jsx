import { useDispatch } from 'react-redux'
import { AUTH_THUNK } from './store/slices/auth/authThunk'

const App = () => {
   const dispatch = useDispatch()
   const onSubmit = () => {
      const values = {
         userName: 'Bekmyrza',
         lastName: 'Abulbakirov',
         email: 'bekmyrza@gmail.com',
         password: 'Bekmyrza2024',
         subscribeMailing: true,
      }
      dispatch(AUTH_THUNK.SignUp({ values }))
   }

   return (
      <div>
         <h1>Gift List 16</h1>
         <button onClick={onSubmit}>SinUp</button>
      </div>
   )
}

export default App
