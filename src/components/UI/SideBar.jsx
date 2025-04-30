import { Button, styled } from '@mui/material'
import { ROLES_SIDEBAR } from '../../utils/helpers'

const SideBar = () => {
   const role = 'USER'

   const menuItems =
      role.toLowerCase() === 'user' ? ROLES_SIDEBAR.users : ROLES_SIDEBAR.admin

   const roleNavigation = (param) => {
      return role.toLowerCase() === ''
         ? `/user/${param}`
         : `/admin/${param}`
   }
   return (
      <Mainh1>
         <h1>GIFT LIST</h1>

         {menuItems.map(({ title, icon, link }, index) => (
            <Button key={index} onClick={() => navigate(roleNavigation(link))}>
               <img src={icon} alt={title} /> <span>{title}</span>
            </Button>
         ))}
      </Mainh1>
   )
}

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
