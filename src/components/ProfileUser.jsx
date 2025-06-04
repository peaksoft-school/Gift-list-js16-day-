import { Box, Typography, Grid, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import { styled } from '@mui/system'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Button from './UI/Button'
import { useState } from 'react'

const ProfileUser = () => {
   return (
      <Box p={4}>
         <Header>
            <LeftColumn>
               <StyledAvatar
                  src="https://i.pinimg.com/736x/b8/25/f8/b825f8aca31785c9165e18a279771100.jpg"
                  alt="Аида Каримова"
               />
               <Typography variant="h6">Аида Каримова</Typography>

               <Button variant="warning" >Удалить из друзей</Button>

               <Box>
                  <IconButton>
                     <FacebookIcon sx={{ color: '#3b5998' }} />
                  </IconButton>
                  <IconButton>
                     <InstagramIcon sx={{ color: '#E1306C' }} />
                  </IconButton>
                  <IconButton>
                     <TelegramIcon sx={{ color: '#0088cc' }} />
                  </IconButton>
               </Box>
            </LeftColumn>

            <RightColumn>
               <Box>
                  <InfoLabel>Основная информация</InfoLabel>
                  <InfoText>Город:</InfoText>
                  <StyledTypography> Бишкек</StyledTypography>
                  <br />
                  <InfoText>
                     Email:
                     <StyledTypography> Aika1998@gmail.com</StyledTypography>
                  </InfoText>
               </Box>
               <Box>
                  <InfoText>Дата рождения:</InfoText>
                  <StyledTypography> 12.04.1998</StyledTypography>
                  <br />
                  <InfoText>
                     Номер телефона:
                     <StyledTypography> +9967052364</StyledTypography>
                  </InfoText>
               </Box>
               <Box>
                  <InfoLabel>Интересы, хобби</InfoLabel>
                  <StyledTypography>
                     Танцы, иностранные языки, готовка
                  </StyledTypography>
               </Box>
               <Box>
                  <InfoText>
                     Важно знать:
                     <StyledTypography>
                        Против спиртных напитков
                     </StyledTypography>
                  </InfoText>
               </Box>
               <Box>
                  <InfoLabel>Доп. инфа</InfoLabel>
                  <InfoText>
                     Размер одежды:<StyledTypography> S</StyledTypography>
                  </InfoText>
                  <InfoText>
                     Размер обуви:<StyledTypography> 36</StyledTypography>
                  </InfoText>
               </Box>
            </RightColumn>
         </Header>
         <BoxContainer>
            <Box mb={4}>
               <SectionText>Желаемые подарки</SectionText>
               <Grid container spacing={2}>
                  {[1, 2, 3].map((_, i) => (
                     <Grid item key={i}>
                        <StyledCard>
                           <img
                              src="https://investory.news/wp-content/uploads/2021/12/books.jpg"
                              alt="gift"
                              style={{
                                 width: '100%',
                                 height: '150px',
                                 objectFit: 'cover',
                                 borderRadius: '8px',
                              }}
                           />
                           <StyledBox>
                              <StyledText>Название подарка</StyledText>
                              <Typography className="birthday">
                                 День рождения
                              </Typography>
                           </StyledBox>
                           <ContainerBox>
                              <StyledDate>12.04.22</StyledDate>
                              <Typography className="text">
                                 В ожидании <MoreHorizIcon />
                              </Typography>
                           </ContainerBox>
                        </StyledCard>
                     </Grid>
                  ))}
               </Grid>
               <MoreLink>Смотреть все</MoreLink>
            </Box>

            <Box mb={4}>
               <SectionText>Праздники</SectionText>
               <Grid container spacing={2}>
                  {[
                     {
                        title: 'День матери',
                        img: 'https://ss.sport-express.ru/userfiles/materials/210/2108058/1180x665.jpg',
                     },
                     {
                        title: 'Курбан айт',
                        img: 'https://zamanilka.ru/wp-content/uploads/2023/06/kartinki-kurban-bairam-42.jpg',
                     },
                     {
                        title: 'Кадыр түн',
                        img: 'https://24.kg/files/media/291/291593.jpg',
                     },
                  ].map((item, i) => (
                     <Grid item key={i}>
                        <StyledCard>
                           <img
                              src={item.img}
                              alt={item.title}
                              style={{
                                 width: '100%',
                                 height: '150px',
                                 objectFit: 'cover',
                                 borderRadius: '8px',
                              }}
                           />
                           <StyledText>{item.title}</StyledText>
                           <StyledDate>12.04.22</StyledDate>
                        </StyledCard>
                     </Grid>
                  ))}
               </Grid>
               <MoreLink>Смотреть все</MoreLink>
            </Box>

            <Box mb={4}>
               <SectionText>Благотворительность</SectionText>
               <Grid container spacing={2}>
                  {[
                     {
                        title: 'Название подарка',
                        thing: 'Новый',
                        status: 'Забронирован',
                     },
                     {
                        title: 'Название подарка',
                        thing: 'Б/У',
                        status: 'В ожидании',
                     },
                     {
                        title: 'Название подарка',
                        thing: 'Б/У',
                        status: 'В ожидании',
                     },
                  ].map((item, i) => (
                     <Grid item key={i}>
                        <StyledCard>
                           <img
                              src="https://investory.news/wp-content/uploads/2021/12/books.jpg"
                              alt={item.title}
                              style={{
                                 width: '100%',
                                 height: '150px',
                                 objectFit: 'cover',
                                 borderRadius: '8px',
                              }}
                           />
                           <BoxSection>
                              <StyledText>{item.title}</StyledText>
                              <StyledText className="thing">
                                 {item.thing}
                              </StyledText>
                           </BoxSection>

                           <SectionBox>
                              <StyledDate>12.04.22</StyledDate>
                              <Typography className="text">
                                 {item.status}
                                 <MoreHorizIcon />
                              </Typography>
                           </SectionBox>
                        </StyledCard>
                     </Grid>
                  ))}
               </Grid>
               <MoreLink>Смотреть все</MoreLink>
            </Box>
         </BoxContainer>
      </Box>
   )
}

export default ProfileUser

const StyledCard = styled(Box)({
   padding: '16px',
   borderRadius: '12px',
   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
   marginBottom: '20px',
   width: '349px',
   height: '250px',
})

const BoxContainer = styled(Box)({
   border: '1px solid #ffffffbcf',
   padding: '24px',
   maxWidth: '100%',
})

const Header = styled(Box)({
   display: 'flex',
   gap: '24px',
   marginBottom: '24px',
})

const LeftColumn = styled(Box)({
   width: '200px',
   textAlign: 'center',
})

const RightColumn = styled(Box)({
   flex: 1,
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '16px',
})

const StyledAvatar = styled('img')({
   width: '187px',
   height: '190px',
   borderRadius: '8px',
})

const StyledTypography = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   color: 'black',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '600',
   fontSize: '14px',
   textAlign: 'start',
})

const StyledDate = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '100%',
   color: '#636C84',
   textAlign: 'start',
   paddingTop: '15px',
})

const SectionText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '18px',
})

const InfoLabel = styled('div')({
   color: '#9c27b0',
   fontWeight: 500,
   fontSize: '14px',
})

const InfoText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   color: 'gray',
})

const StyledBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   paddingTop: '8px',

   '& .birthday': {
      color: 'green',
      fontЦeight: '400',
      fontЫize: '13px',
   },
})

const ContainerBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',

   '& .text': {
      paddingTop: '8px',
      color: ' #636C84',
   },
})

const BoxSection = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',

   '& .thing': {
      color: ' #FD5200',
   },
})

const SectionBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',

   '& .text': {
      paddingTop: '8px',
      color: ' #636C84',
   },
})

const MoreLink = styled(Typography)({
   textAlign: 'right',
   marginTop: '8px',
   fontSize: '14px',
   color: '#3772FF',
   cursor: 'pointer',
})
