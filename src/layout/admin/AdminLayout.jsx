import { Outlet } from 'react-router'
import { styled, Box } from '@mui/material'
import SideBar from '../../components/UI/SideBar'
import Header from '../Header'

const AdminLayout = () => {
   return (
      <StyledMain>
         <SideBar role="ADMIN" />
         <Header role="ADMIN" />

         <StyledOutlet>
            <Outlet />
         </StyledOutlet>
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
}))

const StyledOutlet = styled('div')(() => ({
   marginTop: '40px',
}))
