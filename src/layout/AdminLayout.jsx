import { Box, styled } from '@mui/material'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import { Outlet } from 'react-router'
import MailingList from '../components/UI/mailing/MailingList'

const AdminLayout = () => {
   return (
      <StyledMain>
         <SideBar role="ADMIN" />
         <Header role="ADMIN" />

         <Outlet />
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled('div')(() => ({
   display: 'flex',
}))
