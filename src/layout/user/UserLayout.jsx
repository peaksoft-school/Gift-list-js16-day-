import { Box, styled } from '@mui/material'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const UserLayout = () => (
   <StyledMain>
      <SideBar role="USER" />
      <Header role="USER" />

      <Outlet />
   </StyledMain>
)

export default UserLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
}))
