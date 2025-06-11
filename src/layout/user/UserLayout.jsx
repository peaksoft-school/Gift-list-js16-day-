import { Box, styled } from '@mui/material'
import Header from '../Header'
import { Outlet } from 'react-router'
import SideBar from '../../components/UI/SideBar'

const UserLayout = () => {
   return (
      <StyledMain>
         <SideBar role="USER" />

         <Box className="content">
            <Header role="USER" />

            <Outlet />
         </Box>
      </StyledMain>
   )
}

export default UserLayout

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
