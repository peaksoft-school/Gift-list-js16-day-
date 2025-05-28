import { Box, styled } from '@mui/material'
import Header from '../Header'
import { Outlet } from 'react-router'
import SideBar from '../../components/UI/SideBar'

const UserLayout = () => {
   return (
      <StyledMain>
         <SideBar role="USER" />
         <Header role="USER" />

         <StyledOutlet>
            <Outlet />
         </StyledOutlet>
      </StyledMain>
   )
}

export default UserLayout

const StyledMain = styled(Box)(() => ({
   display: 'flex',
}))

const StyledOutlet = styled('div')(() => ({
   margin: '50px',
}))
