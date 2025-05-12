import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MAILING_THUNK } from '../../../store/slices/mailing/mailingThunk'
import { FILES_THUNK } from '../../../store/slices/file/filesThunk'
import { Box, DialogContent, styled, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import Button from '../Button'
import Modal from '../Modal'
import Input from '../Input'
import MailingCards from '../card/MailingCards'
import Message from '../../../assets/images/Message.png'

const MailingList = memo(() => {
   const { mailings } = useSelector((state) => state.mailing)

   const [openModal, setOpenModal] = useState(false)
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')
   const [image, setImage] = useState(null)
   const [preview, setPreview] = useState(null)
   const [abortController, setAbortController] = useState(null)

   const dispatch = useDispatch()

   const handleOpenModal = () => {
      setOpenModal(true)
      setAbortController(new AbortController())
   }
   const handleCloseModal = () => {
      if (abortController) {
         abortController.abort()
      }
      setOpenModal(false)
      resetForm()
   }
   const resetForm = () => {
      setSubject('')
      setMessage('')
      setImage(null)
      setPreview(null)
   }

   useEffect(() => {
      dispatch(MAILING_THUNK.getAllMailings())
   }, [dispatch])

   const handleSubmit = async () => {
      try {
         const result = await dispatch(
            FILES_THUNK.addFile({ file: image, signal: abortController.signal })
         ).unwrap()

         const imageUrl = result.link

         const newMailing = {
            subject,
            message,
            image: imageUrl,
         }

         await dispatch(MAILING_THUNK.createMailings(newMailing))
         await dispatch(MAILING_THUNK.getAllMailings())

         resetForm()
         setOpenModal(false)
      } catch (error) {
         if (error.name === 'AbortError') {
            console.log('Запрос был отменен')
         } else {
            console.error('Ошибка при создании рассылки:', error)
         }
      }
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
                  <img src={Message} alt="icon" />
                  Отправить рассылку
               </StyledMainButton>
            </HeaderRow>
            <Modal open={openModal} onClose={handleCloseModal}>
               <StyledDialogTitle>Создание рассылки</StyledDialogTitle>
               <DialogContent>
                  <label htmlFor="upload-file">
                     <UploadBox>
                        <ImageIcon />
                        <Typography>Выберите файл</Typography>
                        {preview && (
                           <Box component="img" src={preview} alt="photo" />
                        )}
                     </UploadBox>
                  </label>
                  <input
                     type="file"
                     id="upload-file"
                     accept="image/*"
                     hidden
                     onChange={(e) => {
                        const file = e.target.files[0]
                        setImage(file)

                        if (file) {
                           const reader = new FileReader()
                           reader.onloadend = () => {
                              setPreview(reader.result)
                           }
                           reader.readAsDataURL(file)
                        }
                     }}
                  />
               </DialogContent>

               <label htmlFor="newsletter-input" style={{ color: '#676767' }}>
                  Тема
               </label>
               <StyledInput
                  id="newsletter-input"
                  placeholder="Введите тему рассылки"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
               <label htmlFor="newsletter2-input" style={{ color: '#585858' }}>
                  Текст рассылки
               </label>
               <StyledInput
                  id="newsletter2-input"
                  placeholder="Введите текст рассылки"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
               <ButtonContainer>
                  <StyledButton
                     variant="warning"
                     type="button"
                     onClick={handleCloseModal}
                  >
                     ОТМЕНА
                  </StyledButton>
                  <StyledButton
                     variant="outlined"
                     color="primary"
                     type="button"
                     onClick={handleSubmit}
                  >
                     ОТПРАВИТЬ
                  </StyledButton>
               </ButtonContainer>
            </Modal>
            <FlexContainer>
               <MailingCards mailings={mailings} />
            </FlexContainer>
         </StyledMain>
      </BlockContainer>
   )
})

export default MailingList

const BlockContainer = styled(Box)(() => ({
   display: 'flex',
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
   fontWeight: '500',
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
