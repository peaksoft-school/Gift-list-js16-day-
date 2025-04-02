import React from 'react'
import MeetBalls from '../components/UI/MeetBalls'
import styled from 'styled-components'
import Notification from '../assets/icons/notification.svg'

const Header = () => {
   return (
      <StyledHeader>
         <img src={Notification} alt="" style={{ marginRight: '20px' }} />
         <MeetBalls />
      </StyledHeader>
   )
}

export default Header

const StyledHeader = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   backgroundColor: 'rgb(245, 245, 247)',
   padding: '20px 40px 20px 0px',
})
