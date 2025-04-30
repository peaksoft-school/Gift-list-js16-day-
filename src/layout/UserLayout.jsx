import React from 'react'
import SideBar from '../components/UI/SideBar'
import Header from './Header'
import styled from 'styled-components'
import { Outlet } from 'react-router'

const UserLayout = () => {
   return (
      <StyledMain>
         <SideBar role="USER" />
         <Header role="admin" />
         <Outlet />
      </StyledMain>
   )
}

export default UserLayout
const StyledMain = styled('div')(() => ({
   display: 'flex',
}))
