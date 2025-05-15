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

const FRIENDS = [
   {
      id: 1,
      image: 'https://i.pinimg.com/736x/b8/25/f8/b825f8aca31785c9165e18a279771100.jpg',
      fullName: 'Annette Black',
      desires: 12,
      holidays: 10,
   },

   {
      id: 2,
      image: 'https://masterpiecer-images.s3.yandex.net/541b62ae9ccf11ee9c107acfd41307a6:upscaled',
      fullName: 'Annette Black',
      desires: 12,
      holidays: 10,
   },
   {
      id: 3,
      image: 'https://masterpiecer-images.s3.yandex.net/4b2b37aba11711eebb734a50f1b511f1:upscaled',
      fullName: 'Annette Black',
      desires: 12,
      holidays: 10,
   },
   {
      id: 4,
      image: 'https://klev.club/uploads/posts/2023-10/1697480887_klev-club-p-kartinki-krasivie-lyudi-40.jpg',
      fullName: 'Annette Black',
      desires: 12,
      holidays: 10,
   },
]

export { conditions, categories, subcategories, countries, STATISTICS, FRIENDS }
