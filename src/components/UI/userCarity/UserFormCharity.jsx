import {
   Box,
   DialogContent,
   MenuItem,
   Select,
   styled,
   TextField,
   Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const UserFormCharity = () => {
   const [preview, setPreview] = useState()
   const [giftName, setGiftName] = useState()
   const [condition, setCondition] = useState('')
   const [category, setCategory] = useState('')
   const [subCategory, setSubCategory] = useState('')
   return (
      <BlockContainer>
         <Typography>Благотворительность/ Добавить подарок </Typography>
         <FormContainer>
            <DialogContent>
               <label htmlFor="upload-file">
                  <UploadBox> Нажмите для добавления фотографии</UploadBox>
               </label>
               <input
                  type="file"
                  id="upload-file"
                  hidden
                  // onChange={handleFileChange}
               />
            </DialogContent>

            <StyledInputGift>
               <Box>
                  <Typography>Добавление вещи</Typography>
               </Box>
               <label htmlFor="giftname">Название подарка</label>
               <StyledInput
                  value={giftName}
                  id="gitname"
                  placeholder="Введите название подарка"
                  onChange={(e) => setGiftName(e.target.value)}
               />
               <TextField
                  select
                  label="Выберите категорию"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  sx={{ width: '396px', mt: 2 }}
               >
                  <MenuItem value="electronics">Электроника</MenuItem>
                  <MenuItem value="clothing">Одежда</MenuItem>
                  <MenuItem value="school">Школа</MenuItem>
                  <MenuItem value="home_garden">Дом и сад</MenuItem>
                  <MenuItem value="shoes">Обувь</MenuItem>
                  <MenuItem value="transport">Транспорт</MenuItem>
               </TextField>

               <TextField
                  select
                  label="Укожите состояние"
                  placeholder="Укожите состояние"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  fullWidth
                  sx={{ width: '396px', mt: 2 }}
               >
                  <MenuItem value="all">Все</MenuItem>
                  <MenuItem value="used">Б/У</MenuItem>
                  <MenuItem value="new">Новое</MenuItem>
               </TextField>
               <label htmlFor="sub-category">
                  Подкатегория
                  <TextField
                     select
                     id="sub-category"
                     value={subCategory}
                     onChange={(e) => setSubCategory(e.target.value)}
                     fullWidth
                     sx={{ width: '396px', mt: 2 }}
                  >
                     <MenuItem value="" disabled>
                        Выберите подкатегорию
                     </MenuItem>
                     <MenuItem value="phones">Смартфоны и телефоны</MenuItem>
                     <MenuItem value="audio">Аудиотехника</MenuItem>
                     <MenuItem value="camera">Фото и видеокамеры</MenuItem>
                     <MenuItem value="car_electronics">
                        Автоэлектроника
                     </MenuItem>
                     <MenuItem value="tv_video">ТВ и видео</MenuItem>
                     <MenuItem value="computers">
                        Компьютеры, ноутбуки и планшеты
                     </MenuItem>
                  </TextField>
               </label>

               <StyledTextField
                  label="Описание"
                  placeholder="Введите описание подарка"
                  multiline
                  rows={4}
               />
               <StyledButton>
                  <Button variant="warning">ОТМЕНА</Button>
                  <Button variant="outlined">ДОБАВИТЬ</Button>
               </StyledButton>
            </StyledInputGift>
         </FormContainer>

         <BlockForm></BlockForm>
      </BlockContainer>
   )
}

export default UserFormCharity

const BlockContainer = styled(Box)(() => ({
   marginTop: '100px',
   background: '#F7F8FA',
   width: '100%',
}))

const UploadBox = styled(Box)(() => ({
   border: '1px solid #BDBDBD',
   padding: '20px',
   width: '200px',
   textAlign: 'center',
   borderRadius: '8px',
   cursor: 'pointer',
   backgroundColor: '#f9f9f9',
   marginBottom: '20px',
}))
const FormContainer = styled(Box)(() => ({
   display: 'flex',
   borderRadius: '10px',
   width: '100%',
   background: '#ffffff',
}))

const StyledInputGift = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const BlockForm = styled(Box)(() => ({}))

const StyledTextField = styled(TextField)(() => ({
   width: '808px',

   marginTop: '30px',
   borderRadius: '6px',
   border: '1px solid #BDBDBD',
}))
const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      width: '396px',
   },
}))
const StyledButton = styled(Box)(() => ({
   marginLeft: '700px',
   marginTop: '20px',

   // '& Button': {
   //    width: '131px',
   // },
   '& .MuiButtonBase-root': {
      height: '37px',
   },
}))
