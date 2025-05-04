import { useState } from 'react'
import {
   Box,
   DialogContent,
   IconButton,
   styled,
   Typography,
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import Button from '../Button'
import Modal from '../Modal'
import Input from '../Input'
import MailingCards from '../card/MailingCards'
import Message from '../../../assets/images/Message.png'

const MailingList = () => {
   // const { mailings } = useSelector((state) => state.mailing)
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
               <h3>Рассылка</h3>
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
                  Отправить рассылку
               </StyledMainButton>
            </HeaderRow>
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
            <FlexContainer>
               <MailingCards />
            </FlexContainer>
         </StyledMain>
      </BlockContainer>
   )
}

export default MailingList
const BlockContainer = styled(Box)(() => ({
   display: 'flex',
   // justifyContent: 'center',
   width: '100%',
}))
const StyledMainButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      width: '280px',
      height: '40px',
      fontSize: '14px',
   },
}))

const StyledMain = styled(Box)(() => ({
   margin: '100px 0 0 0px',
   background: '#F7F8FA',
   width: '100%',
}))
const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
   padding: '10px',
}))

const FlexContainer = styled(Box)(() => ({
   marginLeft: '10px',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1rem',
}))

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
      height: '37px',
   },
   display: 'flex',
   justifyContent: 'center',
   gap: '16px',
}))
