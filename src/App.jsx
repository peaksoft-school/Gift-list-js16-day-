import { useState } from 'react'
import Checkbox from './components/UI/Checkbox'
const App = () => {
   const [checked, setChecked] = useState(false)

   const handleChange = (event) => {
      setChecked(event.target.checked)
   }

   return (
      <>
         <Checkbox />
      </>
   )
}
export default App
