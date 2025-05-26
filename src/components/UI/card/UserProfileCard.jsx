import { Box, styled, Typography } from '@mui/material'
import InstagramIcon from '../../../assets/icons/instagram.svg'
import TelegramIcon from '../../../assets/icons/telegram.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import WKIcon from '../../../assets/icons/telegram-1.svg'
import Button from '../../UI/Button'

const UserProfileCard = ({ user }) => {
   const {
      firstname,
      lastname,
      email,
      phone,
      country,
      imageUrl,
      dateOfBirth,
      clothingSize,
      shoeSize,
      hobby,
      importantNotes,
   } = user

   const newDateOfBirth = dateOfBirth.split('-').reverse().join('.')

   return (
      <StyledContent>
         <Box className="user-content">
            <Box className="image-container">
               <img
                  src={
                     imageUrl === null
                        ? 'data:image/jpeg;base64,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'
                        : imageUrl
                  }
                  alt="user"
                  className="photo-user"
               />

               <Typography className="user-name">
                  {firstname} {lastname}
               </Typography>

               <Box className="social-media">
                  <img src={FacebookIcon} alt="facebook" />
                  <img src={InstagramIcon} alt="instagram" />
                  <img src={TelegramIcon} alt="telegram" />
                  <img src={WKIcon} alt="wk" />
               </Box>
            </Box>

            <Box className="information-container">
               <Box>
                  <Typography className="title">Оснавная информация</Typography>

                  <Box className="information-content">
                     <Box>
                        <Typography className="sub-title">Город:</Typography>
                        <Typography>{country}</Typography>

                        <Typography className="sub-title">Email:</Typography>
                        <Typography>{email}</Typography>
                     </Box>

                     <Box>
                        <Typography className="sub-title">
                           Дата рождения:
                        </Typography>
                        <Typography>{newDateOfBirth}</Typography>

                        <Typography className="sub-title">
                           Номер телефона:
                        </Typography>
                        <Typography>{phone}</Typography>
                     </Box>
                  </Box>
               </Box>

               <Box>
                  <Typography className="title">Интересы, хобби</Typography>

                  <Box className="information-content">
                     <Box>
                        <Typography className="sub-title">
                           Интересы, хобби:
                        </Typography>
                        <Typography>{hobby}</Typography>
                     </Box>

                     <Box className="hi">
                        <Typography className="sub-title">
                           Важно знать:
                        </Typography>
                        <Typography>{importantNotes}</Typography>
                     </Box>
                  </Box>
               </Box>

               <Box>
                  <Typography className="title">Доп. инфа</Typography>

                  <Box className="information-content">
                     <Box>
                        <Typography className="sub-title">
                           Размер одежды:
                        </Typography>
                        <Typography>{clothingSize}</Typography>
                     </Box>

                     <Box className="hii">
                        <Typography className="sub-title">
                           Размер обуви:
                        </Typography>
                        <Typography>{shoeSize}</Typography>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>

         <Box className="buttons-container">
            <Button variant="warning">Удалить</Button>
            <Button variant="outlined">Заблокировать</Button>
         </Box>
      </StyledContent>
   )
}

export default UserProfileCard

const StyledContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2.8rem',
   backgroundColor: 'white',
   padding: '1.5rem',
   borderRadius: '10px',
   marginRight: '2.5rem',

   '& .user-content': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      gap: '4rem',

      '& .image-container': {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         width: '13rem',
         gap: '1.5rem',

         '& .photo-user': {
            width: '13rem',
            borderRadius: '0.5rem',
         },

         '& .social-media': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',

            '& img': {
               cursor: 'pointer',
               transition: 'all 0.3s',
            },

            '& img:hover': {
               filter: 'drop-shadow(0 0 0.75rem blue)',
            },
         },
      },

      '& .title': {
         fontSize: '18px',
         fontWeight: '600',
         lineHeight: '100%',
         letterSpacing: '0.2px',
         color: '#8639B5',
      },

      '& .information-container': {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'start',
         gap: '1.9rem',
         marginTop: '70px',

         '& .information-content': {
            display: 'flex',
            gap: '15.7rem',

            '& .hi': {
               marginLeft: '17px',
            },

            '& .hii': {
               marginLeft: '25px',
            },

            '& .sub-title': {
               fontSize: '14px',
               fontWeight: '400',
               lineHeight: '130%',
               letterSpacing: '0px',
               color: '#5C5C5C',
               marginBottom: '0.3rem',
               marginTop: '1rem',
            },
         },
      },
   },

   '& .buttons-container': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end',
      width: '100%',
   },
}))
