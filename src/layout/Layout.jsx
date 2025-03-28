import React from 'react'
import Header from '../components/Header'
import Outlet from '@mui/icons-material/Outlet'


const layout = () => {
  return (
    <div>layout
      <Header/>
      <Outlet/>
    </div>
  )
}

export default layout