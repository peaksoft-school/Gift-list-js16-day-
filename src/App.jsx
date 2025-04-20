import React from 'react'
import Header from './layout/Header'
import SideBar from './components/UI/SideBar'

const App = () => {
   return (
      <div>
         <Header role="user" />
         <Header role="admin" />
      </div>
   )
}

export default App
