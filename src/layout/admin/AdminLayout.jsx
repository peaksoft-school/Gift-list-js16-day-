import { Outlet } from 'react-router'
import { styled, Box } from '@mui/material'
import SideBar from '../../components/UI/SideBar'
import Header from '../Header'

const AdminLayout = () => {
   return (
      <StyledMain>
         <SideBar role="ADMIN" />

         <Box>
            <Header role="ADMIN" />

            <Outlet />
         </Box>
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
}))
