import { styled } from '@mui/material'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const SIDEBAR_WIDTH = 284
const HEADER_HEIGHT = 64

const AdminLayout = () => {
   return (
      <StyledMain>
         <SideBar role="ADMIN" />
         <ContentWrapper>
            <Header role="ADMIN" />
            <Outlet />
         </ContentWrapper>
      </StyledMain>
   )
}

export default AdminLayout

const StyledMain = styled('div')({
   display: 'flex',
   minHeight: '100vh',
})

const ContentWrapper = styled('div')({
   flexGrow: 1,
   marginLeft: SIDEBAR_WIDTH,
   paddingTop: HEADER_HEIGHT,
   display: 'flex',
   flexDirection: 'column',
})
