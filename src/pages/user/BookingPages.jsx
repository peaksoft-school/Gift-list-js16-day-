// src/pages/user/BookingPage.jsx
import CrudCards from '../../components/UI/CrudCards'
import { Box } from '@mui/material'

const CARDS = [
   {
      id: 1,
      fullName: 'Аида Каримова',
      event: 'День рождения',
      date: '12.04.22',
      avatar: 'https://99px.ru/sstorage/56/2020/04/12604201733508710.jpg',
      title: 'Письмо Элджертона',
      image: 'https://99px.ru/sstorage/53/2016/06/tmb_168969_8386.jpg',
   },
]

const BookingPage = () => {
   return (
      <Box>
         {CARDS.map((card) => (
            <CrudCards key={card.id} card={card} />
         ))}
      </Box>
   )
}

export default BookingPage
