import React, { useState } from 'react'
import {
   Box,
   Container,
   Paper,
   Typography,
   TextField,
   Button,
   Grid,
   Avatar,
   IconButton,
   Divider,
   InputAdornment,
   Chip,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   Card,
   CardContent,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
   Edit,
   Phone,
   Mail,
   MapPin,
   Calendar,
   User,
   Globe,
   Star,
   Save,
   X,
} from 'lucide-react'

const StyledContainer = styled(Container)(({ theme }) => ({
   paddingTop: theme.spacing(4),
   paddingBottom: theme.spacing(4),
}))

const ProfileCard = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(4),
   borderRadius: theme.spacing(2),
   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
   color: 'white',
   marginBottom: theme.spacing(3),
}))

const InfoCard = styled(Card)(({ theme }) => ({
   borderRadius: theme.spacing(2),
   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
   border: '1px solid rgba(0, 0, 0, 0.05)',
   marginBottom: theme.spacing(3),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
   '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1.5),
      transition: 'all 0.3s ease',
      '&:hover': {
         transform: 'translateY(-1px)',
         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      '&.Mui-focused': {
         transform: 'translateY(-1px)',
         boxShadow: '0 4px 16px rgba(103, 126, 234, 0.3)',
      },
   },
}))

const ActionButton = styled(Button)(({ theme }) => ({
   borderRadius: theme.spacing(3),
   padding: theme.spacing(1.5, 4),
   textTransform: 'none',
   fontWeight: 600,
   fontSize: '1rem',
   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
   transition: 'all 0.3s ease',
   '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
   },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
   fontWeight: 700,
   marginBottom: theme.spacing(3),
   color: theme.palette.primary.main,
   position: 'relative',
   '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: 0,
      width: 60,
      height: 3,
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      borderRadius: 2,
   },
}))

// Глобальное хранилище данных пользователя
const userDataStore = {
   userData: null,

   saveUserData(data) {
      this.userData = { ...data }
   },

   getUserData() {
      return this.userData
   },

   clearUserData() {
      this.userData = null
   },
}

const Profile = () => {
   const [isEditing, setIsEditing] = useState(false)
   const [isLoading, setIsLoading] = useState(false)

   // Инициализация данных из хранилища или пустые поля для нового пользователя
   const [formData, setFormData] = useState(() => {
      const savedData = userDataStore.getUserData()
      return (
         savedData || {
            name: '',
            surname: '',
            email: '',
            country: '',
            city: '',
            phone: '',
            birthDate: '',
            clothingSize: '',
            shoeSize: '',
            interests: '',
            important: '',
            vk: '',
            telegram: '',
            website: '',
         }
      )
   })

   const handleInputChange = (field) => (event) => {
      setFormData((prev) => ({
         ...prev,
         [field]: event.target.value,
      }))
   }

   const handleSave = async () => {
      setIsLoading(true)
      try {
         // Симуляция API запроса
         await new Promise((resolve) => setTimeout(resolve, 1000))

         // Сохраняем данные в хранилище
         userDataStore.saveUserData(formData)

         console.log('Данные профиля сохранены:', formData)
         setIsEditing(false)

         // Можно добавить уведомление об успешном сохранении
         alert('Профиль успешно сохранен!')
      } catch (error) {
         console.error('Ошибка сохранения:', error)
         alert('Ошибка при сохранении профиля')
      } finally {
         setIsLoading(false)
      }
   }

   const handleCancel = () => {
      // Восстанавливаем данные из хранилища
      const savedData = userDataStore.getUserData()
      if (savedData) {
         setFormData(savedData)
      }
      setIsEditing(false)
   }

   const interestTags = formData.interests
      .split(', ')
      .filter((tag) => tag.trim())

   return (
      <StyledContainer maxWidth="lg">
         {/* Шапка профиля */}
         <ProfileCard elevation={0}>
            <Box display="flex" alignItems="center" gap={3}>
               <Avatar
                  sx={{
                     width: 120,
                     height: 120,
                     background: 'rgba(255, 255, 255, 0.2)',
                     fontSize: '3rem',
                     border: '4px solid rgba(255, 255, 255, 0.3)',
                  }}
               >
                  {formData.name[0]?.toUpperCase()}
                  {formData.surname[0]?.toUpperCase()}
               </Avatar>
               <Box flex={1}>
                  <Typography variant="h3" fontWeight={700} gutterBottom>
                     {formData.name} {formData.surname}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
                     {formData.city && formData.country
                        ? `${formData.city}, ${formData.country}`
                        : 'Местоположение не указано'}
                  </Typography>
                  <Box display="flex" gap={1} flexWrap="wrap">
                     {interestTags.length > 0 ? (
                        interestTags.map((tag, index) => (
                           <Chip
                              key={index}
                              label={tag}
                              size="small"
                              sx={{
                                 background: 'rgba(255, 255, 255, 0.2)',
                                 color: 'white',
                                 '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.3)',
                                 },
                              }}
                           />
                        ))
                     ) : (
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                           Интересы не указаны
                        </Typography>
                     )}
                  </Box>
               </Box>
               <Box>
                  {isEditing ? (
                     <Box display="flex" gap={1}>
                        <ActionButton
                           variant="contained"
                           color="success"
                           startIcon={<Save size={20} />}
                           onClick={handleSave}
                           disabled={isLoading}
                           sx={{
                              background:
                                 'linear-gradient(45deg, #4caf50, #66bb6a)',
                           }}
                        >
                           {isLoading ? 'Сохранение...' : 'Сохранить'}
                        </ActionButton>
                        <ActionButton
                           variant="outlined"
                           startIcon={<X size={20} />}
                           onClick={handleCancel}
                           sx={{
                              borderColor: 'rgba(255,255,255,0.5)',
                              color: 'white',
                              '&:hover': {
                                 borderColor: 'white',
                                 background: 'rgba(255,255,255,0.1)',
                              },
                           }}
                        >
                           Отмена
                        </ActionButton>
                     </Box>
                  ) : (
                     <ActionButton
                        variant="contained"
                        startIcon={<Edit size={20} />}
                        onClick={() => setIsEditing(true)}
                        sx={{
                           background:
                              'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                        }}
                     >
                        Редактировать
                     </ActionButton>
                  )}
               </Box>
            </Box>
         </ProfileCard>

         <Grid container spacing={3}>
            {/* Основная информация */}
            <Grid item xs={12} md={6}>
               <InfoCard>
                  <CardContent sx={{ p: 4 }}>
                     <SectionTitle variant="h5">
                        Основная информация
                     </SectionTitle>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Имя"
                              value={formData.name}
                              onChange={handleInputChange('name')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <User size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Фамилия"
                              value={formData.surname}
                              onChange={handleInputChange('surname')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <User size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <StyledTextField
                              fullWidth
                              label="Email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange('email')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <Mail size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Страна"
                              value={formData.country}
                              onChange={handleInputChange('country')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <MapPin size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Город"
                              value={formData.city}
                              onChange={handleInputChange('city')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <MapPin size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Телефон"
                              value={formData.phone}
                              onChange={handleInputChange('phone')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <Phone size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Дата рождения"
                              type="date"
                              value={formData.birthDate}
                              onChange={handleInputChange('birthDate')}
                              disabled={!isEditing}
                              InputLabelProps={{ shrink: true }}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <Calendar size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                     </Grid>
                  </CardContent>
               </InfoCard>
            </Grid>

            {/* Дополнительная информация */}
            <Grid item xs={12} md={6}>
               <InfoCard>
                  <CardContent sx={{ p: 4 }}>
                     <SectionTitle variant="h5">Предпочтения</SectionTitle>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <FormControl fullWidth>
                              <InputLabel>Размер одежды</InputLabel>
                              <Select
                                 value={formData.clothingSize}
                                 onChange={handleInputChange('clothingSize')}
                                 disabled={!isEditing}
                                 sx={{ borderRadius: 3 }}
                              >
                                 {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(
                                    (size) => (
                                       <MenuItem key={size} value={size}>
                                          {size}
                                       </MenuItem>
                                    )
                                 )}
                              </Select>
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <StyledTextField
                              fullWidth
                              label="Размер обуви"
                              value={formData.shoeSize}
                              onChange={handleInputChange('shoeSize')}
                              disabled={!isEditing}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <StyledTextField
                              fullWidth
                              label="Интересы"
                              multiline
                              rows={3}
                              value={formData.interests}
                              onChange={handleInputChange('interests')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment
                                       position="start"
                                       sx={{ alignSelf: 'flex-start', mt: 1 }}
                                    >
                                       <Star size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <StyledTextField
                              fullWidth
                              label="Важная информация"
                              multiline
                              rows={2}
                              value={formData.important}
                              onChange={handleInputChange('important')}
                              disabled={!isEditing}
                              placeholder="Аллергии, особенности питания и т.д."
                           />
                        </Grid>
                     </Grid>
                  </CardContent>
               </InfoCard>
            </Grid>

            {/* Контакты и соцсети */}
            <Grid item xs={12}>
               <InfoCard>
                  <CardContent sx={{ p: 4 }}>
                     <SectionTitle variant="h5">Социальные сети</SectionTitle>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                           <StyledTextField
                              fullWidth
                              label="ВКонтакте"
                              value={formData.vk}
                              onChange={handleInputChange('vk')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       vk.com/
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <StyledTextField
                              fullWidth
                              label="Telegram"
                              value={formData.telegram}
                              onChange={handleInputChange('telegram')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       @
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <StyledTextField
                              fullWidth
                              label="Веб-сайт"
                              value={formData.website}
                              onChange={handleInputChange('website')}
                              disabled={!isEditing}
                              InputProps={{
                                 startAdornment: (
                                    <InputAdornment position="start">
                                       <Globe size={20} />
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                     </Grid>
                  </CardContent>
               </InfoCard>
            </Grid>
         </Grid>
      </StyledContainer>
   )
}

export default Profile
