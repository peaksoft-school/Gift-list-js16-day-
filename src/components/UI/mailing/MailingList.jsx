import {
   Box,
   DialogActions,
   DialogContent,
   IconButton,
   styled,
   TextField,
   Typography,
} from '@mui/material'
import SaleSale from '../../../assets/images/SaleSale.png'
import ImageIcon from '@mui/icons-material/Image'
import Message from '../../../assets/images/Message.png'
import Button from '../Button'
import { useState } from 'react'
import Modal from '../Modal'
import Input from '../Input'

const MailingList = ({
   title = 'Рассылка',
   buttonText = 'Отправить рассылку',
   imageSrc = SaleSale,
   mailingTopic = 'Тема рассылки',
   date = '12.04.2025',
   onImageClik,
}) => {
   const [openModal, setOpenModal] = useState(false)

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }
   return (
      <BlockContainer>
         <StyledMain>
            <HeaderRow>
               <h3>{title}</h3>
               <StyledMainButton
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={handleOpenModal}
               >
                  <img
                     src={Message}
                     alt="icon"
                     style={{ marginRight: '10px' }}
                  />
                  {buttonText}
               </StyledMainButton>
            </HeaderRow>

            <FlexContainer>
               <StyledBox>
                  <img src={imageSrc} alt="card" onClick={onImageClik} />
                  <StyledText>{mailingTopic}</StyledText>
                  <StyledData>{date}</StyledData>
               </StyledBox>
            </FlexContainer>

            <Modal open={openModal} onClose={handleCloseModal}>
               <StyledDialogTitle>Создание рассылки</StyledDialogTitle>
               <DialogContent>
                  <UploadBox>
                     <IconButton>
                        <ImageIcon />
                     </IconButton>
                     <Typography>
                        Нажмите для добавления
                        <br /> фотографии
                     </Typography>
                  </UploadBox>
               </DialogContent>

               <label htmlFor="newsletter-input" style={{ color: '#676767' }}>
                  Тема
               </label>
               <StyledInput
                  id="newsletter-input"
                  placeholder="Введите тему рассылки"
               />
               <label htmlFor="newsletter2-input" style={{ color: '#585858' }}>
                  Текст рассылки
               </label>
               <StyledInput
                  id="newsletter2-input"
                  placeholder="Введите текст рассылки"
               />
               <ButtonContainer>
                  <StyledButton variant="warning" type="button">
                     ОТМЕНА
                  </StyledButton>
                  <StyledButton
                     variant="outlined"
                     color="primary"
                     type="button"
                  >
                     ОТПРАВИТЬ
                  </StyledButton>
               </ButtonContainer>
            </Modal>
         </StyledMain>
      </BlockContainer>
   )
}

export default MailingList
const BlockContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
const StyledMainButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      width: '270px',
      height: '40px',
      fontSize: '14px',
   },
}))

const StyledMain = styled(Box)(() => ({
   width: '1086px',
   height: '1024px',
   background: '#F7F8FA',
   borderRadius: '8px',
   border: '1px solid #f1efef ',
   margin: '100px',
   padding: '20px',
}))
const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
}))

const FlexContainer = styled(Box)(() => ({
   width: '349px',
   height: '250px',
   background: '#FFFFFF',
   borderRadius: '8px',
   border: '1px solid #f1efef ',
   marginLeft: '10px',
}))

const StyledBox = styled(Box)(() => ({
   padding: '10px ',
}))

const StyledText = styled(Typography)(() => ({
   marginTop: '30px',
   fontFamily: ' Inter',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   color: '#000000',
}))
const StyledData = styled(Typography)(() => ({
   fontFamily: ' Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   paddingTop: '20px',
   color: '#636C84',
}))
//Модальное окно

const StyledDialogTitle = styled(Box)(() => ({
   textAlign: 'center',
   fontFamily: 'Inter',
   fontWeigh: '500',
   fontSize: '24px',
   lineHeight: '32px',
   letterSpacing: '0%',
   color: '#23262F',
}))

const UploadBox = styled(Box)(() => ({
   border: '2px dashed #ccc',
   width: '217px',
   height: ' 217px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
   marginLeft: '120px',
   color: '#8E8EA9',
   '&:hover': {
      backgroundColor: ' #DCDCE4',
   },
   '& .MuiTypography-root': {
      fontSize: '12px',
      width: '150px',
      textAlign: 'center',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      width: '480px',
      borderRadius: '6px',
   },
}))
const StyledButton = styled(Button)(() => ({
   width: '232px',
}))
const ButtonContainer = styled(Box)(() => ({
   '& .MuiButton-root': {
      height: '40px',
   },
   display: 'flex',
   justifyContent: 'center',
   gap: '16px',
}))
