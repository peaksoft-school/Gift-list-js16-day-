import React, { useState } from 'react'
import {
   Box,
   Avatar,
   Typography,
   Stack,
   IconButton,
   Paper,
   Link,
   TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FaceBook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Vk from '../../assets/icons/bg.svg'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import Aika from '../../assets/images/Aika.png'
import GiftHolydays from './GiftHolydays'
import Button from '../UI/Button'

const ProfileFriend = () => {
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

   return (
      <>
         <PageWrapper>
            <ProfileContainer>
               <ProfileHeader>
                  <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
                     <LeftColumn>
                        <ProfilePhoto src={Aika} alt="Фото пользователя" />

                        <StyledButton variant="warning">
                           <p style={{ fontSize: '12px', fontWeight: 500 }}>
                              Удалить из друзей
                           </p>
                        </StyledButton>
                        <Contacts>
                           <IconButton>
                              <img src={FaceBook} alt="" />
                           </IconButton>
                           <IconButton>
                              <img src={Instagram} alt="" />
                           </IconButton>
                           <IconButton>
                              <img src={Telegram} alt="" />
                           </IconButton>
                           <IconButton>
                              <img src={Vk} alt="" />
                           </IconButton>
                        </Contacts>
                     </LeftColumn>

                     <ProfileInfo>
                        <SectionTitle sx={{ mt: 0 }}>
                           Основная информация
                        </SectionTitle>
                        <TextContainer>
                           <div>
                              <>
                                 <Typography>
                                    <p style={{ color: 'grey' }}>Город:</p>

                                    {initialProfile.city}
                                 </Typography>
                                 <Typography>
                                    <br />
                                    <p style={{ color: 'grey' }}>Email:</p>
                                    <Link
                                       href={`mailto:${initialProfile.email}`}
                                       color="inherit"
                                    >
                                       {initialProfile.email}
                                    </Link>
                                 </Typography>
                              </>
                           </div>
                           <div style={{ marginLeft: '160px' }}>
                              <>
                                 <Typography>
                                    <p style={{ color: 'grey' }}>
                                       Дата рождения:
                                    </p>
                                    {initialProfile.birth}
                                 </Typography>
                                 <br />
                                 <Typography>
                                    <p style={{ color: 'grey' }}>Телефон:</p>
                                    {initialProfile.phone}
                                 </Typography>
                              </>
                           </div>
                        </TextContainer>

                        <SectionTitle>Интересы, хобби</SectionTitle>

                        <Typography>{initialProfile.hobbies}</Typography>

                        <Typography sx={{ mt: 1 }}>
                           <b>Важно знать:</b> {initialProfile.note}
                        </Typography>
                     </ProfileInfo>
                  </Stack>
               </ProfileHeader>

               <ProfileDetails>
                  <InfoColumn>
                     <Typography>
                        <b>Размер одежды:</b> {initialProfile.size}
                     </Typography>
                  </InfoColumn>
                  <InfoColumn>
                     <Typography>
                        <b>Размер обуви:</b> {initialProfile.shoes}
                     </Typography>
                  </InfoColumn>
               </ProfileDetails>
            </ProfileContainer>
            <GiftHolydays />
         </PageWrapper>
      </>
   )
}

export default ProfileFriend

const PageWrapper = styled(Box)({
   background: '#f5f5f5',
   minHeight: '100%',
   padding: '40px 16px',
   color: '#000',
})

const ProfileContainer = styled(Paper)({
   width: '980px',
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
})

const InfoColumn = styled(Box)({
   flex: '1 1 240px',
})

const StyledButton = styled(Button)({
   width: '206px',
   height: '39px',
})

const SectionTitle = styled(Typography)({
   fontWeight: 500,
   margin: '32px 0 8px 0',
   fontSize: '1.1rem',
   color: '#8e24aa',
})
