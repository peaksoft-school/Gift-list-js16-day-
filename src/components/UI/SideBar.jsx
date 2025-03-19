import { Button, colors, styled } from '@mui/material'
import React from 'react'

const SideBar = () => {
   return (
      <div>
         <Mainh1>
            <h1>GIFT LIST</h1>
            <div>
               <Button>Лента</Button>
               <Button>Друзья</Button>
               <Button>Список желаний</Button>
               <Button>Забронирование</Button>
               <Button>Мои праздники</Button>
               <Button>Благотворительность</Button>
            </div>
         </Mainh1>
      </div>
   )
}
const Mainh1 = styled('div')({
   backgroundColor: ' #8639B5',
   color: '#fff',
   width: '284px',
   height: '607px',
   '& .MuiButtonBase-root': {
      textTransform: 'lowercase',
   },

   '& .MuiButtonBase-root': {
      textTransform: 'none',
   },

   h1: {
      fontSize: '24px',
      fontWeight: '700px',
      padding: '23px 70px',
   },
   button: {
      width: 234,
      height: 50,
      top: 40,
      left: 40,

      justifyContent: 'start',
      display: 'flex',
      fontSize: '17px5',
      color: '#fff',
      ':focus': {
         backgroundColor: '#a53be7',
      },
   },
})

export default SideBar
