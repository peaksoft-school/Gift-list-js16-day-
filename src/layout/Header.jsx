import React from 'react'
import MeetBalls from '../components/UI/MeetBalls'
import styled from 'styled-components'
// import profilebackg from '../assets/icons/profileback.svg'

const Header = () => {
   return (
      <StyledHeader>
         {/* <img src={profilebackg} alt="" /> */}

         <MeetBalls />
      </StyledHeader>
   )
}

export default Header

const StyledHeader = styled.header`
   background-color: rgb(245, 245, 247);
   width: 71.6rem;
   height: 86px;
   padding-left: 900px;

   border: 1px;
`
