import { Button, colors, styled } from '@mui/material'
import React from 'react'
import UsersIcon from '../../assets/icon/users.svg'
import TapeIcon from '../../assets/icon/tape.svg'
import ListIcon from '../../assets/icon/list.svg'
import GiftIcon from '../../assets/icon/gifts.svg'
import HolydaysIcon from '../../assets/icon/holidays.svg'
import UsersLikeIcon from '../../assets/icon/userslike.svg'

const SideBar = () => {
   return (
      <div>
         <Mainh1>
            <h1>GIFT LIST</h1>
            <div>
               <Button>
                  {' '}
                  <img src={TapeIcon} alt="" />
                  Лента
               </Button>
               <Button>
                  <img src={UsersIcon} alt="" /> Друзья
               </Button>
               <Button>
                  <img src={ListIcon} alt="" />
                  Список желаний
               </Button>
               <Button>
                  {' '}
                  <img src={GiftIcon} alt="" />
                  Забронирование
               </Button>
               <Button>
                  {' '}
                  <img src={HolydaysIcon} alt="" />
                  Мои праздники
               </Button>
               <Button>
                  <img src={UsersLikeIcon} alt="" />
                  Благотворительность
               </Button>
            </div>
         </Mainh1>
      </div>
   )
}
const Mainh1 = styled('div')({
   background:
      'linear-gradient(356deg, rgba(2,0,36,1) 0%, rgba(21,21,96,1) 40%, rgba(218,0,255,1) 100%)',

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
   img: {
      paddingRight: '19px',
   },

   button: {
      width: 234,
      height: 50,
      marginLeft: '30px',

      justifyContent: 'start',
      display: 'flex',
      fontSize: '16px',
      color: '#fff',
      ':focus': {
         backgroundColor: '#ab42ec',
      },
   },
})

export default SideBar
