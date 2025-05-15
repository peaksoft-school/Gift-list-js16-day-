import { Box, styled } from '@mui/material'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const SIDEBAR_WIDTH = 284
const HEADER_HEIGHT = 64

const UserLayout = () => {
   return (
      <StyledMain>
         <SideBar role="USER" />
         <Header role="USER" />
         <ContentWrapper>
            <Outlet />
         </ContentWrapper>
      </StyledMain>
   )
}

export default UserLayout

const StyledMain = styled(Box)({
   display: 'flex',
   minHeight: '100vh',
})

const ContentWrapper = styled(Box)({
   flexGrow: 1,
   marginLeft: SIDEBAR_WIDTH,
   paddingTop: HEADER_HEIGHT,
   display: 'flex',
   flexDirection: 'column',
})
