import { Outlet } from 'react-router'
import { styled, Box } from '@mui/material'
import SideBar from '../../components/UI/SideBar'
import Header from '../Header'
import { Padding } from '@mui/icons-material'

const AdminLayout = () => {
   return (
      <StyledMain>
         <SideBar role="ADMIN" />

         <Box className="content">
            <Header role="ADMIN" />

            <Outlet />
         </Box>
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
   backgroundColor: '#F7F8FA',
   width: '100%',
   height: '100vh',

   '& .content': {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'auto',
      marginBottom: '20px',
   },
}))
