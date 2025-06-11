import UsersIcon from '../../assets/icons/users.svg'
import TapeIcon from '../../assets/icons/tape.svg'
import ListIcon from '../../assets/icons/list.svg'
import GiftIcon from '../../assets/icons/gifts.svg'
import HolydaysIcon from '../../assets/icons/holidays.svg'
import UsersLikeIcon from '../../assets/icons/users-like.svg'
import Mailings from '../../assets/icons/mailings.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import LogoutIcon from '../../assets/icons/exit.svg'
import Block from '../../assets/images/block.png'
import Delete from '../../assets/images/delete.png'

const ROLES_SIDEBAR = {
   users: [
      { title: 'Лента', icon: TapeIcon, link: 'lenta' },
      { title: 'Друзья', icon: UsersIcon, link: 'friends' },
      { title: 'Список желании ', icon: ListIcon, link: 'list' },
      { title: 'Забронирование', icon: GiftIcon, link: 'booking' },
      { title: 'Мои праздники', icon: HolydaysIcon, link: 'holidays' },
      { title: 'Благовторительность', icon: UsersLikeIcon, link: 'charity' },
   ],

   admin: [
      { title: 'Пользователи', icon: UsersIcon, link: 'users' },
      { title: 'Благотворительность', icon: UsersLikeIcon, link: 'charity' },
      { title: 'Жалобы ', icon: UsersIcon, link: 'complaints' },
      { title: 'Рассылка', icon: Mailings, link: 'newsletter' },
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
const CHARITY_CARD_OPTIONS = [
   {
      title: 'Редактировать',
      icon: Block,
   },
   {
      title: 'Удалить',
      icon: Delete,
   },
]

export { ROLES_SIDEBAR, PROFILE_OPTIONS, USER_CARD_OPTIONS, CHARITY_CARD_OPTIONS }
