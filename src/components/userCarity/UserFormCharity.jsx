import { Box, MenuItem, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../UI/Button'
import BreadCrumbs from '../UI/BreadCrumbs'
import { useDispatch } from 'react-redux'
import { USERCHARITY_THUNK } from '../../store/slices/userCharity/userCharityThunk'

const UserFormCharity = () => {
   const [formData, setFormData] = useState({
      title: '',
      condition: '',
      category: '',
      subCategory: '',
      description: '',
      file: null,
   })

   const handleChange = (e) => {
      const { name, value, files } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: files ? files[0] : value,
      }))
   }
   const dispatch = useDispatch()

   const handleSubmit = () => {
      const formData = new FormData()
      formData.append('title', formData.title)
      formData.append('condition', formData.condition)
      formData.append('category', formData.category)
      formData.append('subcategory', formData.subCategory)
      formData.append('description', formData.description)

      if (formData.file) {
         formData.append('file', formData.file)
      }
      dispatch(USERCHARITY_THUNK.createCharity(formData.file))
         .then(() => {
            setFormData({
               title: '',
               condition: '',
               category: '',
               subCategory: '',
               description: '',
               file: null,
            })
         })
         .catch((err) => {
            console.log(err.message || 'Ошибка при добавлении подарка') })
   }

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      {
         href: `/user/charity`, label: 'Добавить подарок',},
   ]

   return (
      <BlockContainer>
         <BreadCrumbs links={links} />
         <FormContainer>
            <Box>
               <label htmlFor="upload-file">
                  <UploadBox> Нажмите для добавления фотографии</UploadBox>
               </label>
               <input
                  type="file"
                  id="upload-file"
                  hidden
                  onChange={handleChange}
               />
            </Box>
            <Typography>Добавление вещи</Typography>
            <StyledInputGift>
               <LeftColumn>
                  <TextField
                     value={formData.title}
                     name="title"
                     label="Название подарка"
                     placeholder="Введите название подарка"
                     onChange={handleChange}
                  />

                  <TextField
                     select
                     label="Выберите категорию"
                     value={formData.category}
                     name="category"
                     fullWidth
                   
                  >
                     <MenuItem value="electronics">Электроника</MenuItem>
                     <MenuItem value="clothing">Одежда</MenuItem>
                     <MenuItem value="school">Школа</MenuItem>
                     <MenuItem value="home_garden">Дом и сад</MenuItem>
                     <MenuItem value="shoes">Обувь</MenuItem>
                     <MenuItem value="transport">Транспорт</MenuItem>
                  </TextField>
               </LeftColumn>

               <RightColumn>
                  <TextField
                     select
                     label="Укожите состояние"
                     placeholder="Укожите состояние"
                     value={formData.condition}
                     name="condition"
                     onChange={handleChange}
                     fullWidth
                   
                  >
                     <MenuItem value="all">Все</MenuItem>
                     <MenuItem value="used">Б/У</MenuItem>
                     <MenuItem value="new">Новое</MenuItem>
                  </TextField>

                  <TextField
                     select
                     label="Подкатегория"
                     value={formData.subCategory}
                     name="subcategory"
                     onChange={handleChange}
                     fullWidth
                    
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
               </RightColumn>
               <StyledTextField
                  label="Описание"
                  placeholder="Введите описание подарка"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
               />
               <StyledButton>
                  <Button variant="warning">ОТМЕНА</Button>
                  <Button variant="outlined" onClick={handleSubmit}>
                     ДОБАВИТЬ
                  </Button>
               </StyledButton>
            </StyledInputGift>
         </FormContainer>
      </BlockContainer>
   )
}

export default UserFormCharity

const BlockContainer = styled(Box)(() => ({
   marginTop: '10px',
   paddingTop: '20px',
   paddingLeft: '30px',
   background: '#F7F8FA',
   width: '100%',
   marginLeft: '230px',
}))

const FormContainer = styled(Box)(() => ({
   display: 'flex',
   borderRadius: '10px',
   width: '100%',
   background: '#ffffff',
   gap: '20px',
   padding: '30px',

   '& .MuiTextField-root': {
      width: '396px',
      padding: '10px',
   },
   '& .MuiOutlinedInput-root ': {
      height: '37px',
   },
}))
const UploadBox = styled(Box)(() => ({
   border: '1px solid #BDBDBD',
   padding: '20px',
   width: '217px',
   height: '217px',
   textAlign: 'center',
   borderRadius: '8px',
   cursor: 'pointer',
   backgroundColor: '#f9f9f9',
   marginBottom: '20px',
}))

const StyledInputGift = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const LeftColumn = styled(Box)(() => ({}))

const RightColumn = styled(Box)(() => ({
   // display: 'flex',
   // flexDirection: 'column',
}))

const StyledTextField = styled(TextField)(() => ({
   '&.MuiFormControl-root': {
      width: '808px',
      height: '200px',
   },

   '& .MuiOutlinedInput-root ': {
      height: '300px',
   },

   marginTop: '30px',
   borderRadius: '6px',
   border: '1px solid #BDBDBD',
}))
const StyledButton = styled(Box)(() => ({
   marginLeft: '350px',
   marginTop: '20px',

   // '& Button': {
   //    width: '131px',
   // },
   '& .MuiButtonBase-root': {
      height: '37px',
   },
}))
