import UsersIcon from '../../assets/icons/users.svg'
import TapeIcon from '../../assets/icons/tape.svg'
import ListIcon from '../../assets/icons/list.svg'
import GiftIcon from '../../assets/icons/gifts.svg'
import HolydaysIcon from '../../assets/icons/holidays.svg'
import UsersLikeIcon from '../../assets/icons/userslike.svg'
import Mailings from '../../assets/icons/mailings.svg'
import Katya from '../../assets/images/Katya.svg'
import Marina from '../../assets/images/Marina.jpg'
import Sava from '../../assets/images/Sava.jpg'
import Pasha from '../../assets/images/Pasha.jpg'
import Sasha from '../../assets/images/Sasha.jpg'
import Lena from '../../assets/images/Lena.jpg'

const conditions = [
   { value: '1', name: 'Все' },
   { value: '2', name: 'Б/У' },
   { value: '3', name: 'Новое' },
]

const categories = [
   { value: '1', name: 'Смартфоны и телефоны' },
   { value: '2', name: 'Аудиотехника' },
   { value: '2', name: 'Фото и видеокамеры' },
   { value: '2', name: 'Автоэлектроника' },
   { value: '2', name: 'ТВ и видео' },
   { value: '2', name: 'Компьютеры, ноутбуки и планшеты' },
]

const subcategories = [
   { value: '1', name: 'Электроника' },
   { value: '2', name: 'Одежда' },
   { value: '2', name: 'Школа' },
   { value: '2', name: 'Дом и сад' },
   { value: '2', name: 'Обувь' },
   { value: '2', name: 'Транспорт' },
]

const countries = [
   { value: '1', name: 'Кыргызстан' },
   { value: '2', name: 'Азербайджан' },
   { value: '2', name: 'Россия' },
   { value: '2', name: 'Казахстан' },
   { value: '2', name: 'Узбекистан' },
   { value: '2', name: 'Таджикистан' },
]

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

const teamDevelops = [
   {
      name: 'Катя',
      role: 'ведущий дизайнер',
      company: 'TailGroup',
      img: Katya,
   },
   {
      name: 'Марина',
      role: 'маркетолог',
      company: 'Headers Market',
      img: Marina,
   },
   {
      name: 'Сава',
      role: 'PR-менеджер',
      company: 'Central Media',
      img: Sava,
   },
   {
      name: 'Паша',
      role: 'сооснователь',
      company: 'LeadCompany',
      img: Pasha,
   },
   {
      name: 'Саша',
      role: 'главный',
      company: 'редактор Just Journal',
      img: Sasha,
   },
   {
      name: 'Лёня',
      role: 'ведущий ',
      company: 'разработчик Ymail',
      img: Lena,
   },
]

export { conditions, categories, subcategories, countries, roles, teamDevelops }
