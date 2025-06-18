import { Box, Button, styled, Typography } from '@mui/material'
import { ROLES_SIDEBAR } from '../../utils/helpers'
import { useNavigate } from 'react-router'

const SideBar = ({ role }) => {
   const navigate = useNavigate()

   const menuItems =
      role.toLowerCase() === 'user' ? ROLES_SIDEBAR.users : ROLES_SIDEBAR.admin

   const roleNavigation = (param) => {
      navigate(
         role.toLowerCase() === 'user' ? `/user/${param}` : `/admin/${param}`
      )
   }

   return (
      <Mainh1>
         <Typography variant="h1">GIFT LIST</Typography>

         {menuItems.map(({ title, icon, link }, i) => (
            <Button key={i} onClick={() => roleNavigation(link)}>
               <img src={icon} alt={title} />

               <Typography variant="span">{title}</Typography>
            </Button>
         ))}
      </Mainh1>
   )
}

export default SideBar

const Mainh1 = styled(Box)({
   background: 'linear-gradient(180deg, #8639B5 0%, #092056 100%)',
   color: '#fff',
   width: '284px',
   height: '100vh',
   zIndex: 2,
   position: 'fixed',

   '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'url(/background.jpg) no-repeat center/cover',
      zIndex: -1,
   },
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
      fontWeight: '700',
      padding: '23px 70px',
   },

   img: {
      paddingRight: '19px',
      color: '#fff',
   },

   button: {
      width: 234,
      height: 50,
      marginLeft: '28px',
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
