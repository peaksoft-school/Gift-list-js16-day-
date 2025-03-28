import { Button, styled } from '@mui/material'
import React from 'react'
import UsersIcon from '../../assets/icons/users.svg'
import TapeIcon from '../../assets/icons/tape.svg'
import ListIcon from '../../assets/icons/list.svg'
import GiftIcon from '../../assets/icons/gifts.svg'
import HolydaysIcon from '../../assets/icons/holidays.svg'
import UsersLikeIcon from '../../assets/icons/userslike.svg'
import Mailings from '../../assets/icons/mailings.svg'

const roles = {
   users: [
      { title: 'Лента', icon: TapeIcon },
      { title: 'Друзья', icon: UsersIcon },
      { title: 'Список желании ', icon: ListIcon },
      { title: 'Забронирование', icon: GiftIcon },
      { title: 'Мои праздники', icon: HolydaysIcon },
      { title: 'Благовторительность', icon: UsersLikeIcon },
   ],
   admin: [
      { title: 'Пользователи', icon: UsersIcon },
      { title: 'Благотворительность', icon: UsersLikeIcon },
      { title: 'Жалобы ', icon: UsersIcon },
      { title: 'Рассылка', icon: Mailings },
   ],
}

const SideBar = ({ role }) => {
   return (
      <Mainh1>
         <h1>Gift - List</h1>
         {role === 'USER'
            ? roles.users.map(({ title, icon }) => {
                 return (
                    <Button>
                       <img src={icon} alt={title} />
                       <span>{title}</span>
                    </Button>
                 )
              })
            : roles.admin.map(({ title, icon }) => {
                 return (
                    <Button>
                       <img src={icon} alt={title} />
                       <span>{title}</span>
                    </Button>
                 )
              })}
      </Mainh1>
   )
}
const Mainh1 = styled('div')({
   background: 'linear-gradient(180deg, #8639B5 50%, #092056 100%)',

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
      fontWeight: '500px',
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
      ':focus': {
         backgroundColor: '#ba19eb',
      },
   },
})

export default SideBar
