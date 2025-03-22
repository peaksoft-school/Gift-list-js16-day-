import React from 'react'
import {
   TextField,
   MenuItem,
   Select,
   InputAdornment,
   Box,
   styled,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const InputSearch = () => {
   return (
      <MainBox tabIndex={0}>
         <MainInputSearch
            variant="standard"
            placeholder="Поиск"
            InputProps={{
               disableUnderline: true,
               startAdornment: (
                  <InputAdornment position="start">
                     <SearchIcon style={{ color: 'gray' }} />
                  </InputAdornment>
               ),
               style: {
                  padding: '6px 12px',
                  color: 'gray',
                  fontWeight: 300,
                  width: '381px',
               },
            }}
         />
         {['Состояние'].map((label, index) => (
            <Selecting
               key={index}
               defaultValue=""
               displayEmpty
               variant="standard"
               disableUnderline
            >
               <MainItem value="">{label}</MainItem>
               <MainItem value="1">Все</MainItem>
               <MainItem value="2">Б/У</MainItem>
               <MainItem value="3">Новое</MainItem>
            </Selecting>
         ))}
         {['Категория'].map((label, index) => (
            <Selecting
               key={index}
               defaultValue=""
               displayEmpty
               variant="standard"
               disableUnderline
            >
               <MainItem value="">{label}</MainItem>
               <MainItem value="1">Смартфоны и телефоны</MainItem>
               <MainItem value="2">Аудиотехника</MainItem>
               <MainItem value="3">Фото и видеокамеры</MainItem>
               <MainItem value="2">Автоэлектроника</MainItem>
               <MainItem value="2">ТВ и видео</MainItem>
               <MainItem value="2">Компьютеры, ноутбуки и планшеты</MainItem>
            </Selecting>
         ))}
         {['Подкотегория'].map((label, index) => (
            <Selecting
               key={index}
               defaultValue=""
               displayEmpty
               variant="standard"
               disableUnderline
            >
               <MainItem value="">{label}</MainItem>
               <MainItem value="1">Электроника</MainItem>
               <MainItem value="2">Одежда</MainItem>
               <MainItem value="3">Школа</MainItem>
               <MainItem value="3">Дом и сад</MainItem>
               <MainItem value="3">Обувь</MainItem>
               <MainItem value="3">Транспорт</MainItem>
            </Selecting>
         ))}{' '}
         {['Страна'].map((label, index) => (
            <Selecting
               key={index}
               defaultValue=""
               displayEmpty
               variant="standard"
               disableUnderline
            >
               <MainItem value="">{label}</MainItem>
               <MainItem value="1">Кыргызстан</MainItem>
               <MainItem value="2">Азербайджан</MainItem>
               <MainItem value="3">Россия</MainItem>
               <MainItem value="3">Казахстан</MainItem>
               <MainItem value="3">Узбекистан</MainItem>
               <MainItem value="3">Таджикистан</MainItem>
            </Selecting>
         ))}
      </MainBox>
   )
}

const MainBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   background: '#fff',
   padding: '0px',
   borderRadius: '8px',
   border: '1px solid #ddd',
   width: '900px',
   maxWidth: '1300px',

   '.MuiInputBase-input-MuiInput-input': {
      focus: {
         border: '1px solid #8d0782',
      },
   },
})

const MainItem = styled(MenuItem)({
   ':hover': {
      background: '#500e7c33',
   },
   ':focus': {
      background: '#8639B566',
   },
})

const Selecting = styled(Select)({
   minWidth: 120,
   background: '#fff',
   borderRadius: '8px',
   padding: '6px 10px',
   color: 'gray',
   fontWeight: '100px',
   fontSize: '14px',

   '& .MuiSelect-icon': { color: 'gray' },
})
const MainInputSearch = styled(TextField)({
   flex: 'display',
   background: '#fff',
   borderRadius: '8px',
   padding: '6px 12px',
   '& input::placeholder': { color: 'gray', opacity: 1 },
})

export default InputSearch
