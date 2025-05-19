import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, DialogContent, styled, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import { MAILING_THUNK } from '../../../store/slices/mailing/mailingThunk'
import { FILES_THUNK } from '../../../store/slices/file/filesThunk'
import Button from '../Button'
import Modal from '../Modal'
import Input from '../Input'
import MailingCards from '../card/MailingCards'
import Message from '../../../assets/images/Message.png'

const MailingList = memo(() => {
   const { mailings } = useSelector((state) => state.mailing)
   const { fileUrl } = useSelector((state) => state.files)

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

   const handleFileChange = (e) => {
      const file = e.target.files[0]

      setImage(file)

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setPreview(reader.result)
         }
         reader.readAsDataURL(file)
      }

      dispatch(
         FILES_THUNK.addFile({ file: image, signal: abortController.signal })
      )
   }

   const handleSubjectChange = (e) => setSubject(e.target.value)

   const handleMessageChange = (e) => setMessage(e.target.value)

   useEffect(() => {
      dispatch(MAILING_THUNK.getAllMailings())
   }, [dispatch])

   const handleSubmit = () => {
      const values = {
         subject,
         message,
         image: fileUrl,
      }

      dispatch(
         MAILING_THUNK.createMailings({ values, resetForm, setOpenModal })
      )
   }

   return (
      <BlockContainer>
         <StyledMain>
            <HeaderRow>
               <Typography variant="h5">Рассылка</Typography>

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
                     <UploadBox preview={preview}>
                        {preview !== null ? (
                           <Box
                              component="img"
                              src={preview}
                              alt="photo"
                              className="photo"
                           />
                        ) : (
                           <>
                              <ImageIcon />

                              <Typography>Выберите файл</Typography>
                           </>
                        )}
                     </UploadBox>
                  </label>

                  <input
                     type="file"
                     id="upload-file"
                     accept="image/*"
                     hidden
                     onChange={handleFileChange}
                  />
               </DialogContent>

               <label htmlFor="newsletter-input" className="newsletter-input">
                  Тема
               </label>

               <StyledInput
                  id="newsletter-input"
                  placeholder="Введите тему рассылки"
                  value={subject}
                  onChange={handleSubjectChange}
               />

               <label htmlFor="newsletter2-input" className="newsletter-input">
                  Текст рассылки
               </label>

               <StyledInput
                  id="newsletter2-input"
                  placeholder="Введите текст рассылки"
                  value={message}
                  onChange={handleMessageChange}
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
   },
}))

const StyledMain = styled(Box)(() => ({
   margin: '65px 0 0 0',
   background: '#F7F8FA',
   width: '100%',

   '& .newsletter-input': {
      color: '#676767',
   },
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

const UploadBox = styled(Box)(({ preview }) => ({
   border: preview !== null ? 'none' : '2px dashed #ccc',
   width: '217px',
   height: ' 217px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
   color: '#8E8EA9',
   margin: 'auto',

   '&:hover': {
      backgroundColor: preview !== null ? 'none' : ' #DCDCE4',
   },

   '& .MuiTypography-root': {
      fontSize: '12px',
      width: '150px',
      textAlign: 'center',
   },

   '& .photo': {
      width: '260px',
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
