import UsersIcon from '../../assets/icons/users.svg'
import TapeIcon from '../../assets/icons/tape.svg'
import ListIcon from '../../assets/icons/list.svg'
import GiftIcon from '../../assets/icons/gifts.svg'
import HolydaysIcon from '../../assets/icons/holidays.svg'
import UsersLikeIcon from '../../assets/icons/userslike.svg'
import Mailings from '../../assets/icons/mailings.svg'
import Vector from '../../assets/icons/Vector.svg'

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
      { title: 'Лента', icon: TapeIcon, link: 'lenta' },
      { title: 'Друзья', icon: UsersIcon, link: 'friends' },
      { title: 'Список желании ', icon: ListIcon, link: 'spisok' },
      { title: 'Забронирование', icon: GiftIcon, link: 'zabro' },
      { title: 'Мои праздники', icon: HolydaysIcon, link: 'my-part' },
      { title: 'Благовторительность', icon: UsersLikeIcon, link: 'charity' },
   ],
   admin: [
      { title: 'Пользователи', icon: UsersIcon, link: 'users' },
      { title: 'Благотворительность', icon: UsersLikeIcon, link: 'charity' },
      { title: 'Жалобы ', icon: Vector, link: 'complaints' },
      { title: 'Рассылка', icon: Mailings, link: 'newsletter' },
   ],
}

export { conditions, categories, subcategories, countries, roles }
