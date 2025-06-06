import { Box, MenuItem, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../UI/Button'
import BreadCrumbs from '../UI/BreadCrumbs'
import { useDispatch } from 'react-redux'
import { USERCHARITY_THUNK } from '../../store/slices/userCharity/userCharityThunk'
import Input from '../UI/Input'
import Select from '../UI/Select'

const UserFormCharity = () => {
   const { mailings } = useSelector((state) => state.mailing)
   const { fileUrl, isLoading } = useSelector((state) => state.files)
   const [preview, setPreview] = useState(null)
   const [abortController, setAbortController] = useState(null)
   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (!file) return

      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result)
      reader.readAsDataURL(file)

      dispatch(FILES_THUNK.addFile({ file }))
   }

   const handleSubjectChange = (e) => setSubject(e.target.value)
   const handleMessageChange = (e) => setMessage(e.target.value)

   useEffect(() => {
      dispatch(MAILING_THUNK.getAllMailings())
   }, [dispatch])

   const handleSubmit = () => {
      const values = {
         subject,
         message,
         image: fileUrl,
      }

      dispatch(
         MAILING_THUNK.createMailings({ values, resetForm, setOpenModal })
      )
   }

   const isDisabled = !subject.trim() || !message.trim() || isLoading

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      {
         href: `/user/charity`,
         label: 'Добавить подарок',
      },
   ]

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   return (
      <BlockContainer>
         <BreadCrumbs links={links} />
         <FormContainer>
            <Box>
               <label htmlFor="upload-file">
                  <UploadBox preview={preview}>
                     {preview ? (
                        <Box
                           component="img"
                           src={preview}
                           alt="preview"
                           className="photo"
                        />
                        
                     ) : (
                        <>
                           <ImageIcon />
                           <Typography>Выберите файл</Typography>
                        </>
                     )}
                  </UploadBox>
               </label>

               <input
                  type="file"
                  id="upload-file"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
               />
            </Box>

            <StyledInputGift>
               <Typography>Добавление вещи</Typography>
               {/* <LeftColumn> */}
               {/* <TextField
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
                  </TextField> */}
               {/* </LeftColumn> */}

               {/* <RightColumn>
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
          <Input />  */}
               {/* <Select /> */}
               {/* <MenuItem value="" disabled>
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
                     </MenuItem> */}
               {/* </RightColumn>
               <StyledTextField
                  label="Описание"
                  placeholder="Введите описание подарка"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
               /> */}
               <Input
                  name="name"
                  labelText="Имя получателя"
                  value={formData.name}
                  handleChange={handleChange}
                  error={errors.name}
                  errorText="Имя обязательно"
               />

               <Select
                  label="Выберите категорию"
                  options={selectOptions}
                  value={formData.category}
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
   // border: '1px solid #BDBDBD',
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
