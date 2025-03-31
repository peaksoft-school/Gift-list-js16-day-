import { Button } from '@mui/material'
import { roles } from '../../utils/constants'
import styled from 'styled-components'

const SideBar = ({ role }) => (
   <Mainh1>
      <h1>Gift - List</h1>

      {role === 'USER'
         ? roles.users.map(({ title, icon }) => (
              <Button>
                 <img src={icon} alt={title} />
                 <span>{title}</span>
              </Button>
           ))
         : roles.admin.map(({ title, icon }) => (
              <Button>
                 <img src={icon} alt={title} />
                 <span>{title}</span>
              </Button>
           ))}
   </Mainh1>
)

export default SideBar

const Mainh1 = styled('div')({
   background: 'linear-gradient(180deg, #8639B5 0%, #092056 100%)',

   color: '#fff',
   width: '284px',
   height: '100vh',
   '& .MuiButtonBase-root': {
      textTransform: 'lowercase',
   },

   '& .MuiButtonBase-root': {
      textTransform: 'none',
   },
   '& .MuiTouchRipple-root': {
      fontWeight: 300,
   },

   h1: {
      fontSize: '24px',
      fontWeight: '100',
      fontFamily: 'Gill Sans, sans-serif',
      padding: '23px 70px',
   },
   img: {
      paddingRight: '19px',
   },

   button: {
      width: 234,
      height: 50,
      marginLeft: '30px',
      fontWeight: 500,
      justifyContent: 'start',
      display: 'flex',
      fontSize: '16px',
      color: '#fff',
      '&:focus': {
         backgroundColor: '#9f5bdf58',
      },
   },
})
