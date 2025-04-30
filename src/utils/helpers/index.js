import UsersIcon from '../../assets/icons/users.svg'
import TapeIcon from '../../assets/icons/tape.svg'
import ListIcon from '../../assets/icons/list.svg'
import GiftIcon from '../../assets/icons/gifts.svg'
import HolydaysIcon from '../../assets/icons/holidays.svg'
import UsersLikeIcon from '../../assets/icons/users-like.svg'
import Mailings from '../../assets/icons/mailings.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import LogoutIcon from '../../assets/icons/exit.svg'
import Block from '../../assets/images/Block.png'
import Delete from '../../assets/images/Delete.png'

const ROLES_SIDEBAR = {
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

const PROFILE_OPTIONS = [
   { title: 'Профиль', icon: ProfileIcon },
   { title: 'Выход', icon: LogoutIcon },
]

const USER_CARD_OPTIONS = [
   {
      title: 'Заблокировать',
      icon: Block,
   },
   {
      title: 'Удалить',
      icon: Delete,
   },
]

export { ROLES_SIDEBAR, PROFILE_OPTIONS, USER_CARD_OPTIONS }
