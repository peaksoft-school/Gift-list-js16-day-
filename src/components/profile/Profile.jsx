import React, { useState, useEffect } from 'react'
import {
   Box,
   Card,
   CardContent,
   Avatar,
   Typography,
   TextField,
   Button,
   Grid,
   Paper,
   Divider,
   Chip,
   IconButton,
   CircularProgress,
   Alert,
   Container,
   Stack,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Fab,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
   Edit as EditIcon,
   Save as SaveIcon,
   Cancel as CancelIcon,
   Person as PersonIcon,
   Email as EmailIcon,
   Phone as PhoneIcon,
   LocationOn as LocationIcon,
   Cake as CakeIcon,
   PhotoCamera as PhotoCameraIcon,
   Info as InfoIcon,
} from '@mui/icons-material'
import { Outlet } from 'react-router'

const ProfileContainer = styled(Container)(({ theme }) => ({
   paddingTop: theme.spacing(4),
   paddingBottom: theme.spacing(4),
   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
   minHeight: '100vh',
}))

const ProfileCard = styled(Card)(({ theme }) => ({
   borderRadius: theme.spacing(3),
   boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
   overflow: 'visible',
   position: 'relative',
   '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '120px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: `${theme.spacing(3)} ${theme.spacing(3)} 0 0`,
   },
}))

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
   width: 120,
   height: 120,
   border: `4px solid ${theme.palette.common.white}`,
   boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
   position: 'relative',
   zIndex: 1,
   margin: '0 auto',
   marginTop: -60,
}))

const InfoCard = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(3),
   borderRadius: theme.spacing(2),
   background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
   border: '1px solid rgba(102, 126, 234, 0.1)',
   transition: 'all 0.3s ease',
   '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
   },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
   '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1.5),
      transition: 'all 0.3s ease',
      '&:hover': {
         '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#667eea',
         },
      },
      '&.Mui-focused': {
         '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#667eea',
            borderWidth: '2px',
         },
      },
   },
   '& .MuiInputLabel-root.Mui-focused': {
      color: '#667eea',
   },
}))

const GradientButton = styled(Button)(({ theme }) => ({
   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
   borderRadius: theme.spacing(3),
   padding: theme.spacing(1.5, 4),
   textTransform: 'none',
   fontWeight: 600,
   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
   transition: 'all 0.3s ease',
   '&:hover': {
      background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
   },
}))

const useSelector = (selector) => {
   return {
      data: {
         id: 1,
         firstName: 'Анна',
         lastName: 'Петрова',
         email: 'anna.petrova@example.com',
         phone: '+996 555 123 456',
         dateOfBirth: '1995-05-15',
         city: 'Бишкек',
         avatar:
            'https://images.unsplash.com/photo-1494790108755-2616b2f63c7e?w=150&h=150&fit=crop&crop=face',
         bio: 'Люблю путешествовать и изучать новые технологии. Работаю в сфере IT и увлекаюсь фотографией.',
      },
      isLoading: false,
      error: null,
   }
}

const useDispatch = () => {
   return (action) => {
      console.log('Dispatching action:', action)
   }
}

const Profile = () => {
   const dispatch = useDispatch()
   const {
      data: profile,
      isLoading,
      error,
   } = useSelector((state) => state.profile)

   const [isEditing, setIsEditing] = useState(false)
   const [openDialog, setOpenDialog] = useState(false)
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      city: '',
      bio: '',
   })

   useEffect(() => {
      console.log('Fetching profile data...')
      dispatch({ type: 'profile/getUserProfile' })
   }, [dispatch])

   useEffect(() => {
      if (profile) {
         setFormData({
            firstName: profile.firstName || '',
            lastName: profile.lastName || '',
            email: profile.email || '',
            phone: profile.phone || '',
            dateOfBirth: profile.dateOfBirth || '',
            city: profile.city || '',
            bio: profile.bio || '',
         })
      }
   }, [profile])

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSave = () => {
      console.log('Updating profile:', formData)
      dispatch({
         type: 'profile/updateUserProfile',
         payload: formData,
      })
      setIsEditing(false)
      setOpenDialog(false)
   }

   const handleCancel = () => {
      if (profile) {
         setFormData({
            firstName: profile.firstName || '',
            lastName: profile.lastName || '',
            email: profile.email || '',
            phone: profile.phone || '',
            dateOfBirth: profile.dateOfBirth || '',
            city: profile.city || '',
            bio: profile.bio || '',
         })
      }
      setIsEditing(false)
      setOpenDialog(false)
   }

   const formatDate = (dateString) => {
      if (!dateString) return ''
      return new Date(dateString).toLocaleDateString('ru-RU')
   }

   if (isLoading) {
      return (
         <ProfileContainer maxWidth="lg">
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               minHeight="60vh"
            >
               <CircularProgress size={60} sx={{ color: 'white' }} />
            </Box>
         </ProfileContainer>
      )
   }

   if (error) {
      return (
         <ProfileContainer maxWidth="lg">
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               minHeight="60vh"
            >
               <Alert severity="error" sx={{ maxWidth: 400 }}>
                  {error}
               </Alert>
            </Box>
         </ProfileContainer>
      )
   }

   return (
      <ProfileContainer maxWidth="lg">
         <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
               <ProfileCard>
                  <CardContent sx={{ pt: 8, textAlign: 'center' }}>
                     <Box position="relative" display="inline-block">
                        <ProfileAvatar
                           src={profile?.avatar}
                           alt={`${profile?.firstName} ${profile?.lastName}`}
                        >
                           <PersonIcon sx={{ fontSize: 60 }} />
                        </ProfileAvatar>
                        <IconButton
                           sx={{
                              position: 'absolute',
                              bottom: 0,
                              right: 0,
                              backgroundColor: 'white',
                              boxShadow: 2,
                              '&:hover': { backgroundColor: '#f5f5f5' },
                           }}
                           size="small"
                        >
                           <PhotoCameraIcon fontSize="small" />
                        </IconButton>
                     </Box>

                     <Typography
                        variant="h5"
                        sx={{ mt: 2, fontWeight: 600, color: '#333' }}
                     >
                        {profile?.firstName} {profile?.lastName}
                     </Typography>

                     <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                     >
                        ID: {profile?.id}
                     </Typography>

                     <Chip
                        icon={<LocationIcon />}
                        label={profile?.city}
                        variant="outlined"
                        sx={{ mb: 2 }}
                     />

                     {profile?.bio && (
                        <Typography
                           variant="body2"
                           color="text.secondary"
                           sx={{ mt: 2, fontStyle: 'italic' }}
                        >
                           "{profile.bio}"
                        </Typography>
                     )}
                  </CardContent>
               </ProfileCard>
            </Grid>

            {/* Profile Details */}
            <Grid item xs={12} md={8}>
               <Stack spacing={3}>
                  {/* Personal Information */}
                  <InfoCard>
                     <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={3}
                     >
                        <Typography
                           variant="h6"
                           sx={{ fontWeight: 600, color: '#333' }}
                        >
                           Личная информация
                        </Typography>
                        <IconButton
                           onClick={() => setOpenDialog(true)}
                           sx={{ color: '#667eea' }}
                        >
                           <EditIcon />
                        </IconButton>
                     </Box>

                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <PersonIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Имя
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {profile?.firstName}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <PersonIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Фамилия
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {profile?.lastName}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <EmailIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Email
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {profile?.email}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <PhoneIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Телефон
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {profile?.phone}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <CakeIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Дата рождения
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {formatDate(profile?.dateOfBirth)}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                           <Box display="flex" alignItems="center" mb={2}>
                              <LocationIcon sx={{ mr: 2, color: '#667eea' }} />
                              <Box>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    Город
                                 </Typography>
                                 <Typography variant="body1" fontWeight={500}>
                                    {profile?.city}
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>
                     </Grid>
                  </InfoCard>

                  {/* API Endpoints Info */}
                  <InfoCard>
                     <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: '#333', mb: 3 }}
                     >
                        API Эндпоинты
                     </Typography>

                     <Stack spacing={2}>
                        <Box
                           sx={{
                              p: 2,
                              backgroundColor: '#f8f9ff',
                              borderRadius: 1,
                              border: '1px solid #e0e7ff',
                           }}
                        >
                           <Typography
                              variant="subtitle2"
                              color="primary"
                              fontWeight={600}
                           >
                              GET /api/users/profile
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Получение данных профиля пользователя
                           </Typography>
                        </Box>

                        <Box
                           sx={{
                              p: 2,
                              backgroundColor: '#f0fdf4',
                              borderRadius: 1,
                              border: '1px solid #bbf7d0',
                           }}
                        >
                           <Typography
                              variant="subtitle2"
                              sx={{ color: '#16a34a', fontWeight: 600 }}
                           >
                              POST /api/users/update
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Обновление профиля пользователя
                           </Typography>
                        </Box>
                     </Stack>
                  </InfoCard>
               </Stack>
            </Grid>
         </Grid>

         {/* Edit Dialog */}
         <Dialog
            open={openDialog}
            onClose={handleCancel}
            maxWidth="md"
            fullWidth
            PaperProps={{
               sx: { borderRadius: 3 },
            }}
         >
            <DialogTitle sx={{ pb: 1 }}>
               <Typography variant="h6" fontWeight={600}>
                  Редактировать профиль
               </Typography>
            </DialogTitle>

            <DialogContent sx={{ pt: 2 }}>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Имя"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Фамилия"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Телефон"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Дата рождения"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                     />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                     <StyledTextField
                        fullWidth
                        label="Город"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item xs={12}>
                     <StyledTextField
                        fullWidth
                        label="О себе"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        variant="outlined"
                        multiline
                        rows={3}
                     />
                  </Grid>
               </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 1 }}>
               <Button
                  onClick={handleCancel}
                  startIcon={<CancelIcon />}
                  sx={{ mr: 1 }}
               >
                  Отмена
               </Button>
               <GradientButton
                  onClick={handleSave}
                  startIcon={<SaveIcon />}
                  variant="contained"
               >
                  Сохранить
               </GradientButton>
            </DialogActions>
         </Dialog>
      </ProfileContainer>
   )
}

export default Profile
