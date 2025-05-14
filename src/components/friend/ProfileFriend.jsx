import React, { useState } from 'react'
import {
   Box,
   Avatar,
   Typography,
   Stack,
   IconButton,
   Paper,
   Link,
   Button,
   TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import FacebookIcon from '@mui/icons-material/Facebook'
import SendIcon from '@mui/icons-material/Send'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import Aika from '../../assets/images/Aika.png'
import { GIFTS, HOLIDAYS } from '../../utils/helpers'

const initialProfile = {
   name: 'Аида Каримова',
   city: 'Бишкек',
   email: 'Aika1989@gmail.com',
   phone: '+9967053264',
   birth: '12.04.1989',
   hobbies: 'Танцы, иностранные языки, готовка',
   note: 'Против спиртных напитков',
   size: 'S',
   shoes: '36',
}

const ProfileFriend = () => {
   const [edit, setEdit] = useState(false)
   const [profile, setProfile] = useState(initialProfile)
   const [draft, setDraft] = useState(initialProfile)

   const handleEdit = () => {
      setDraft(profile)
      setEdit(true)
   }

   const handleCancel = () => {
      setEdit(false)
      setDraft(profile)
   }

   const handleSave = () => {
      setProfile(draft)
      setEdit(false)
   }

   const handleChange = (e) => {
      setDraft({ ...draft, [e.target.name]: e.target.value })
   }

   return (
      <PageWrapper>
         <ProfileContainer>
            <ProfileHeader>
               <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
                  <LeftColumn>
                     <ProfilePhoto src={Aika} alt="Фото пользователя" />
                     {edit ? (
                        <TextField
                           name="name"
                           value={draft.name}
                           onChange={handleChange}
                           size="small"
                           variant="standard"
                           sx={{
                              textAlign: 'center',
                              fontWeight: 500,
                              fontSize: 18,
                              mb: 1,
                           }}
                           inputProps={{
                              style: {
                                 textAlign: 'center',
                                 fontWeight: 500,
                                 fontSize: 18,
                              },
                           }}
                        />
                     ) : (
                        <LinkH3 underline="none">{profile.name}</LinkH3>
                     )}
                     <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        size="small"
                        sx={{ mt: 1 }}
                     >
                        Удалить из друзей
                     </Button>
                     <Contacts>
                        <IconButton size="small" color="primary">
                           <InstagramIcon />
                        </IconButton>
                        <IconButton size="small" color="primary">
                           <TelegramIcon />
                        </IconButton>
                        <IconButton size="small" color="primary">
                           <FacebookIcon />
                        </IconButton>
                     </Contacts>
                  </LeftColumn>

                  <ProfileInfo>
                     <SectionTitle sx={{ mt: 0 }}>
                        Основная информация
                        {!edit ? (
                           <IconButton
                              size="small"
                              sx={{ ml: 1 }}
                              onClick={handleEdit}
                           >
                              <EditIcon fontSize="small" />
                           </IconButton>
                        ) : (
                           <>
                              <IconButton
                                 size="small"
                                 sx={{ ml: 1 }}
                                 color="success"
                                 onClick={handleSave}
                              >
                                 <SaveIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                 size="small"
                                 color="error"
                                 onClick={handleCancel}
                              >
                                 <CloseIcon fontSize="small" />
                              </IconButton>
                           </>
                        )}
                     </SectionTitle>
                     <TextContainer>
                        <div>
                           {edit ? (
                              <>
                                 <TextField
                                    label="Город"
                                    name="city"
                                    value={draft.city}
                                    onChange={handleChange}
                                    size="small"
                                    variant="standard"
                                    sx={{ mb: 1 }}
                                 />
                                 <TextField
                                    label="Email"
                                    name="email"
                                    value={draft.email}
                                    onChange={handleChange}
                                    size="small"
                                    variant="standard"
                                    sx={{ mb: 1 }}
                                 />
                              </>
                           ) : (
                              <>
                                 <Typography>Город: {profile.city}</Typography>
                                 <Typography>
                                    Email:{' '}
                                    <Link
                                       href={`mailto:${profile.email}`}
                                       color="inherit"
                                    >
                                       {profile.email}
                                    </Link>
                                 </Typography>
                              </>
                           )}
                        </div>
                        <div>
                           {edit ? (
                              <>
                                 <TextField
                                    label="Телефон"
                                    name="phone"
                                    value={draft.phone}
                                    onChange={handleChange}
                                    size="small"
                                    variant="standard"
                                    sx={{ mb: 1 }}
                                 />
                                 <TextField
                                    label="Дата рождения"
                                    name="birth"
                                    value={draft.birth}
                                    onChange={handleChange}
                                    size="small"
                                    variant="standard"
                                 />
                              </>
                           ) : (
                              <>
                                 <Typography>
                                    Телефон: {profile.phone}
                                 </Typography>
                                 <Typography>
                                    Дата рождения: {profile.birth}
                                 </Typography>
                              </>
                           )}
                        </div>
                     </TextContainer>

                     <SectionTitle>Интересы, хобби</SectionTitle>
                     {edit ? (
                        <TextField
                           name="hobbies"
                           value={draft.hobbies}
                           onChange={handleChange}
                           size="small"
                           variant="standard"
                           fullWidth
                        />
                     ) : (
                        <Typography>{profile.hobbies}</Typography>
                     )}
                     {edit ? (
                        <TextField
                           name="note"
                           value={draft.note}
                           onChange={handleChange}
                           size="small"
                           variant="standard"
                           fullWidth
                           sx={{ mt: 1 }}
                        />
                     ) : (
                        <Typography sx={{ mt: 1 }}>
                           <b>Важно знать:</b> {profile.note}
                        </Typography>
                     )}
                  </ProfileInfo>
               </Stack>
            </ProfileHeader>

            <ProfileDetails>
               <InfoColumn>
                  {edit ? (
                     <TextField
                        label="Размер одежды"
                        name="size"
                        value={draft.size}
                        onChange={handleChange}
                        size="small"
                        variant="standard"
                     />
                  ) : (
                     <Typography>
                        <b>Размер одежды:</b> {profile.size}
                     </Typography>
                  )}
               </InfoColumn>
               <InfoColumn>
                  {edit ? (
                     <TextField
                        label="Размер обуви"
                        name="shoes"
                        value={draft.shoes}
                        onChange={handleChange}
                        size="small"
                        variant="standard"
                     />
                  ) : (
                     <Typography>
                        <b>Размер обуви:</b> {profile.shoes}
                     </Typography>
                  )}
               </InfoColumn>
            </ProfileDetails>

            <DividerLine />

            <TopRow>
               <SectionTitle>Желаемые подарки</SectionTitle>
               <Button size="small">Смотреть все</Button>
            </TopRow>
            <CardsRow>
               {GIFTS.map((gift, idx) => (
                  <Card key={idx}>
                     <CardImage src={gift.img} alt={gift.name} />
                     <Typography>{gift.name}</Typography>
                     <Typography variant="caption" color="text.secondary">
                        {gift.date}
                     </Typography>
                  </Card>
               ))}
            </CardsRow>

            <TopRow>
               <SectionTitle>Праздники</SectionTitle>
               <Button size="small">Смотреть все</Button>
            </TopRow>
            <CardsRow>
               {HOLIDAYS.map((h, idx) => (
                  <Card key={idx}>
                     <CardImage src={h.img} alt={h.name} />
                     <Typography>{h.name}</Typography>
                  </Card>
               ))}
            </CardsRow>

            <FooterActions>
               <IconButton color="primary">
                  <SendIcon />
               </IconButton>
               <IconButton>
                  <SettingsIcon />
               </IconButton>
               <IconButton>
                  <MoreHorizIcon />
               </IconButton>
            </FooterActions>
         </ProfileContainer>
      </PageWrapper>
   )
}

export default ProfileFriend

const PageWrapper = styled(Box)({
   background: '#f5f5f5',
   minHeight: '100vh',
   padding: '40px 16px',
   color: '#000',
})

const ProfileContainer = styled(Paper)({
   maxWidth: 900,
   margin: '0 auto',
   padding: 32,
   borderRadius: 12,
   display: 'flex',
   flexDirection: 'column',
})

const ProfileHeader = styled(Box)({
   borderBottom: '1px solid #eee',
   paddingBottom: 24,
})

const ProfilePhoto = styled(Avatar)({
   width: 187,
   height: 190,
   borderRadius: 12,
   objectFit: 'cover',
   background: '#ddd',
})

const LeftColumn = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: 8,
})

const Contacts = styled(Box)({
   marginTop: 8,
   display: 'flex',
   gap: 10,
})

const ProfileInfo = styled(Box)({
   flex: 1,
})

const TextContainer = styled('div')({
   display: 'flex',
   gap: '30px',
   flexWrap: 'wrap',
   marginBottom: 12,
})

const ProfileDetails = styled(Box)({
   display: 'flex',
   flexWrap: 'wrap',
   gap: 32,
   marginTop: 24,
   paddingTop: 12,
   borderTop: '1px solid #eee',
})

const InfoColumn = styled(Box)({
   flex: '1 1 240px',
})

const SectionTitle = styled(Typography)({
   fontWeight: 600,
   margin: '32px 0 8px 0',
   fontSize: '1.1em',
   color: '#8e24aa',
})

const TopRow = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: 24,
   marginBottom: 12,
})

const CardsRow = styled(Box)({
   display: 'flex',
   gap: 16,
   overflowX: 'auto',
})

const Card = styled(Box)({
   background: '#fafafa',
   borderRadius: 8,
   boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
   padding: 14,
   minWidth: 180,
   textAlign: 'center',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const CardImage = styled('img')({
   width: '100%',
   borderRadius: 4,
   marginBottom: 8,
   objectFit: 'cover',
   maxHeight: 80,
})

const FooterActions = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   gap: 16,
   marginTop: 32,
})

const LinkH3 = styled(Link)({
   fontSize: '18px',
   fontWeight: 500,
})

const DividerLine = styled('div')({
   marginTop: 24,
   marginBottom: 12,
   borderBottom: '1px solid #eee',
})
