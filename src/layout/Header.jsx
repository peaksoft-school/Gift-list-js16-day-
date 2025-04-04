import React from 'react'
import MeetBalls from '../components/UI/MeetBalls'
import styled from 'styled-components'
import Notification from '../assets/icons/notification.svg'

import InputSearch from '../components/UI/Input-search/InputSearch'

const Header = () => {
   return (
      <StyledHeader>
         <InputSearch />
         <img src={Notification} alt="" style={{ marginRight: '10px' }} />
         <MeetBalls />
      </StyledHeader>
   )
}

export default Header

const StyledHeader = styled('div')({
   display: 'flex',
   justifyContent: 'space-around',
   backgroundColor: 'rgb(245, 245, 247)',
   padding: '20px 40px 20px 0px',
})
