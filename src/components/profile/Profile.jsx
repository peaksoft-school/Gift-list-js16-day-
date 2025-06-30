// Импорты
import React, { useRef, useEffect, useState } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_THUNK } from '../../store/slices/profile/profileThunk'
import toastifyNotify from '../../utils/helpers/ToastifyNotify'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Select from '../UI/Select' 
import PhotoUploadButton from './PhotoUploadButton'

export default function Profile() {
   const StyledInputRef = useRef(null)
   const dispatch = useDispatch()
   const { data: profile, isLoading } = useSelector((state) => state.profile)

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      country: '',
      birthDate: '',
      email: '',
      phone: '',
      clothingSize: '',
      shoeSize: '',
      interests: '',
      importantInfo: '',
      facebook: '',
      vk: '',
      instagram: '',
      telegram: '',
   })

   const [preview, setPreview] = useState(null)
   const [imageFile, setImageFile] = useState(null)

   // Опции для селектов
   const clothingSizeOptions = [
      { value: 'XXS', name: 'XXS' },
      { value: 'XS', name: 'XS' },
      { value: 'S', name: 'S' },
      { value: 'M', name: 'M' },
      { value: 'L', name: 'L' },
      { value: 'XL', name: 'XL' },
      { value: 'XXL', name: 'XXL' },
      { value: 'XXXL', name: 'XXXL' },
   ]

   const shoeSizeOptions = [
      { value: '35', name: '35' },
      { value: '36', name: '36' },
      { value: '37', name: '37' },
      { value: '38', name: '38' },
      { value: '39', name: '39' },
      { value: '40', name: '40' },
      { value: '41', name: '41' },
      { value: '42', name: '42' },
      { value: '43', name: '43' },
      { value: '44', name: '44' },
   ]

   useEffect(() => {
      dispatch(PROFILE_THUNK.getUserProfile())
   }, [])

   useEffect(() => {
      if (profile) {
         setFormData((prev) => ({
            ...prev,
            ...profile,
            email: profile.email || '',
         }))
         if (profile.photo) setPreview(profile.photo)
      }
   }, [profile])

   const handleFileChange = (e) => {
      const file = e.target.files[0]
      if (file) {
         setImageFile(file)
         const reader = new FileReader()
         reader.onload = (event) => setPreview(event.target.result)
         reader.readAsDataURL(file)
      }
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleSelectChange = (name) => (e) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }))
   }

   const handleSubmit = async () => {
      try {
         const required = ['firstName', 'lastName', 'country', 'birthDate']
         for (const key of required) {
            if (!formData[key]) {
               toastifyNotify({
                  type: 'error',
                  message: 'Заполните обязательные поля',
               })
               return
            }
         }

         let photoUrl = preview

         if (imageFile) {
            const res = await dispatch(
               PROFILE_THUNK.uploadPhoto(imageFile)
            ).unwrap()
            photoUrl = res
         }

         const updatedData = {
            ...formData,
            photo: photoUrl,
         }

         await dispatch(PROFILE_THUNK.updateUserProfile(updatedData)).unwrap()

         toastifyNotify({
            type: 'success',
            message: 'Профиль успешно обновлён!',
         })
      } catch (error) {}
   }

   return (
      <Root>
         <PhotoUploadButton />
         <FormBox>
            <Box>
               <Typography variant="h6" fontWeight={600} mb={1}>
                  Основная информация
               </Typography>
               <Row>
                  <StyledInput
                     label="Имя"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                  />
                  <StyledInput
                     label="Фамилия"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                  />
               </Row>
               <Row>
                  <StyledInput
                     label="Страна"
                     name="country"
                     value={formData.country}
                     onChange={handleChange}
                  />
                  <StyledInput
                     label="Дата рождения"
                     name="birthDate"
                     value={formData.birthDate}
                     onChange={handleChange}
                  />
               </Row>
               <Row>
                  <StyledInput label="Email" value={formData.email} disabled />
                  <StyledInput
                     label="Телефон"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                  />
               </Row>
            </Box>

            <Box>
               <Typography variant="h6" fontWeight={600} mb={1}>
                  Размеры
               </Typography>
               <Row>
                  <SelectWrapper>
                     <Typography variant="body2" color="text.secondary" mb={1}>
                        Размер одежды
                     </Typography>
                     <HorizontalSelect
                        label="Выберите размер одежды"
                        options={clothingSizeOptions}
                        value={formData.clothingSize}
                        onChange={handleSelectChange('clothingSize')}
                        MenuProps={horizontalMenuProps}
                     />
                  </SelectWrapper>

                  <SelectWrapper>
                     <Typography variant="body2" color="text.secondary" mb={1}>
                        Размер обуви
                     </Typography>
                     <HorizontalSelect
                        label="Выберите размер обуви"
                        options={shoeSizeOptions}
                        value={formData.shoeSize}
                        onChange={handleSelectChange('shoeSize')}
                        MenuProps={horizontalMenuProps}
                     />
                  </SelectWrapper>
               </Row>
            </Box>

            <Box>
               <Typography variant="h6" fontWeight={600} mb={1}>
                  Интересы и хобби
               </Typography>
               <StyledInput
                  name="interests"
                  label="Опишите интересы"
                  value={formData.interests}
                  onChange={handleChange}
                  multiline
                  minRows={3}
                  fullWidth
               />
            </Box>

            <Box>
               <Typography variant="h6" fontWeight={600} mb={1}>
                  Важно знать
               </Typography>
               <StyledInput
                  name="importantInfo"
                  label="Аллергии, особенности"
                  value={formData.importantInfo}
                  onChange={handleChange}
                  multiline
                  minRows={3}
                  fullWidth
               />
            </Box>

            <Box>
               <Typography variant="h6" fontWeight={600} mb={1}>
                  Социальные сети
               </Typography>
               <Row>
                  <StyledInput
                     label="Facebook"
                     name="facebook"
                     value={formData.facebook}
                     onChange={handleChange}
                  />
                  <StyledInput
                     label="ВКонтакте"
                     name="vk"
                     value={formData.vk}
                     onChange={handleChange}
                  />
               </Row>
               <Row>
                  <StyledInput
                     label="Instagram"
                     name="instagram"
                     value={formData.instagram}
                     onChange={handleChange}
                  />
                  <StyledInput
                     label="Telegram"
                     name="telegram"
                     value={formData.telegram}
                     onChange={handleChange}
                  />
               </Row>
            </Box>

            <Box display="flex" justifyContent="flex-end" gap={2}>
               <Button variant="outlined">Отмена</Button>
               <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? (
                     <CircularProgress size={20} color="inherit" />
                  ) : (
                     'Сохранить'
                  )}
               </Button>
            </Box>
         </FormBox>
      </Root>
   )
}

const Root = styled(Box)(({ theme }) => ({
   maxWidth: '1000px',
   margin: '40px auto',
   padding: '32px',
   background: '#fff',
   borderRadius: '16px',
   boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
   display: 'flex',
   gap: '40px',
   flexWrap: 'wrap',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
   },
}))

const UploadBox = styled(Box)({
   width: '180px',
   height: '180px',
   border: '2px dashed #C1C1C1',
   borderRadius: '12px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   fontSize: '14px',
   color: '#A1A1A1',
   cursor: 'pointer',
   overflow: 'hidden',
   backgroundSize: 'cover',
   backgroundPosition: 'center',
})

const FormBox = styled(Box)({
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   gap: '32px',
})

const Row = styled(Box)({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})

const StyledInput = styled(Input)({
   flex: 1,
   minWidth: '220px',
})

const SelectWrapper = styled(Box)({
   flex: 1,
   minWidth: '220px',
})

const HorizontalSelect = styled(Select)({
   width: '100%',
   border: '2px solid grey',
   '& .MuiSelect-select': {
      padding: '12px 16px',
      borderRadius: '12px',
      backgroundColor: '#fff',
   },
})

const horizontalMenuProps = {
   PaperProps: {
      style: {
         borderRadius: '16px',
         padding: '16px',
         maxHeight: '300px',
         minWidth: '400px',
         boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      },
   },
   MenuListProps: {
      style: {
         display: 'flex',
         flexWrap: 'wrap',
         gap: '8px',
         padding: '0',
         justifyContent: 'flex-start',
         maxWidth: '400px',
      },
   },
   anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
   },
   transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
   },
}
