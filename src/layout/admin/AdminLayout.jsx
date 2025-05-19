import { Outlet } from 'react-router'
import { styled, Box } from '@mui/material'
import SideBar from '../../components/UI/SideBar'
import Header from '../Header'

const AdminLayout = () => (
   <StyledMain>
      <SideBar role="ADMIN" />
      <Header role="ADMIN" />

      <Outlet />
   </StyledMain>
)

export default AdminLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
}))
