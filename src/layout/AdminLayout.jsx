import { Box, styled } from '@mui/material'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const AdminLayout = () => {
   return (
      <StyledMain>
         <Header role="ADMIN" />
         <SideBar role="ADMIN" />

         <Outlet />
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled('div')(() => ({
   display: 'flex',
}))
