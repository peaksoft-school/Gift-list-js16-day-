import AigerimEje from '../../assets/images/aigerim-eje.png'
import NurgulEje from '../../assets/images/nurgulEje.png'
import NargizaEje from '../../assets/images/nargizaEje.jpg'

const conditions = [
   { value: '1', name: 'Все' },
   { value: '2', name: 'Б/У' },
   { value: '3', name: 'Новое' },
]

const categories = [
   { value: '1', name: 'Смартфоны и телефоны' },
   { value: '2', name: 'Аудиотехника' },
   { value: '3', name: 'Фото и видеокамеры' },
   { value: '4', name: 'Автоэлектроника' },
   { value: '5', name: 'ТВ и видео' },
   { value: '6', name: 'Компьютеры, ноутбуки и планшеты' },
]

const subcategories = [
   { value: '1', name: 'Электроника' },
   { value: '2', name: 'Одежда' },
   { value: '3', name: 'Школа' },
   { value: '4', name: 'Дом и сад' },
   { value: '5', name: 'Обувь' },
   { value: '6', name: 'Транспорт' },
]

const countries = [
   { value: '1', name: 'Кыргызстан' },
   { value: '2', name: 'Азербайджан' },
   { value: '3', name: 'Россия' },
   { value: '4', name: 'Казахстан' },
   { value: '5', name: 'Узбекистан' },
   { value: '6', name: 'Таджикистан' },
]

const STATISTICS = [
   { end: 100, label: 'K+', text: 'Пользователей' },
   { end: 10, label: 'K+', text: 'Размещенных подарков' },
   { end: 15, label: 'K+', text: 'Подаренных подарков' },
   { end: 9, label: 'K+', text: 'Реализованной благотворительной помощи' },
]

const OUR_TEAM = [
   {
      id: 1,
      img: NurgulEje,
      name: 'Нургуль Маданбекова',
      role: 'Front-end developer',
      borderRadius: '0 0 0 50%',
   },

   {
      id: 2,
      img: '',
      name: 'Бекмырза Абдилвакиров',
      role: 'Frontend - Leader',
      borderRadius: '50% 0',
   },
   {
      id: 4,
      img: AigerimEje,
      name: 'Маматтойчуева Айгерим',
      role: 'Front-end developer',
      borderRadius: '50% 0 0  0',
   },
   {
      id: 3,
      img: '',
      name: 'Курманбек',
      role: 'Backend developer',
      borderRadius: '0 0 50% 0',
   },
   {
      id: 6,
      img: NargizaEje,
      name: 'Наргиза Нааматбекова',
      role: 'Front-end developer',
      borderRadius: '50% 0',
   },
   {
      id: 7,
      img: '',
      name: 'Annette Black',
      role: '',
      borderRadius: '0 50% 0 0',
   },
]

export {
   conditions,
   categories,
   subcategories,
   countries,
   OUR_TEAM,
   STATISTICS,
}
