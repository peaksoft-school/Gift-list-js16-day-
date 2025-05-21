import { Box, DialogContent, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import HolidaysCard from './HolidaysCard'
import Pluse from '../../../assets/images/pluse.png'
import Modal from '../Modal'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { HOLIDAYS_THUNK } from '../../../store/slices/holidays/holidaysThunk'
import { FILES_ACTIONS } from '../../../store/slices/file/filesSlice'
import { FILES_THUNK } from '../../../store/slices/file/filesThunk'

const HolidaysList = () => {
   const { holidays } = useSelector((state) => state.holidays)
   const { fileUrl, isloading } = useSelector((state) => state.files)

   const [abortController, setAbortController] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   const [preview, setPreview] = useState(null)
   const [image, setImage] = useState(null)
   const [title, setTitle] = useState('')
   const [date, setDate] = useState('')

   const dispatch = useDispatch()

   const handleOpenModal = () => {
      setOpenModal(true)

      setAbortController(new AbortController())
   }
   const handleCloseModal = () => {
      if (abortController) {
         abortController.abort()
      }
      resetForm
      setOpenModal(false)
   }

   const resetForm = () => {
      setTitle('')
      setDate('')
      setPreview(null)
      dispatch(FILES_ACTIONS.clearFile())
   }
   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (!file) return
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result)
      reader.readAsDataURL(file)

      dispatch(FILES_THUNK.addFile({ file }))
   }
   const handleTitleChange = (e) => setTitle(e.target.value)
   const handleDateChange = (e) => setDate(e.target.value)

   useEffect(() => {
      dispatch(HOLIDAYS_THUNK.getAllHolidays())
   }, [dispatch])

   const handleSubmit = () => {
      const values = {
         title,
         date,
         image: fileUrl,
      }
      dispatch(
         HOLIDAYS_THUNK.createHoliday({ values, resetForm, setOpenModal })
      )
   }
   const isDisabled = !title.trim() || !date.trim() || isloading

   return (
      <StyledBox>
         <HeaderRow>
            <Typography>Мои праздники</Typography>

            <StyledMainButton
               variant="outlined"
               color="primary"
               type="button"
               onClick={handleOpenModal}
            >
               <img src={Pluse} alt="icon" />
               Добавить праздник
            </StyledMainButton>
         </HeaderRow>

         <StyledModal open={openModal} onClose={handleCloseModal}>
            <StyledTypograhpy>Добавление праздника</StyledTypograhpy>
            <DialogContent>
               <label htmlFor="upload-file">
                  <UploadBox>
                     <Typography>Выберите файл</Typography>
                     {preview && (
                        <Box component="img" src={preview} alt="photo" />
                     )}
                  </UploadBox>
               </label>
               <input
                  type="file"
                  id="upload-file"
                  hidden
                  onChange={handleFileChange}
               />
            </DialogContent>

            <StyledInput
               labelText="Название праздника"
               id="holidays-input"
               placeholder="Введите название праздника"
               value={title}
               onChange={handleTitleChange}
            />

            <StyledInput
               labelText="Дата праздника"
               id="holidays2-input"
               placeholder="Укажите дату праздника"
               type="date"
               value={date}
               onChange={handleDateChange}
            />
            <ButtonContainer>
               <Button
                  variant="warning"
                  type="button"
                  onClick={handleCloseModal}
               >
                  ОТМЕНА
               </Button>
               <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isDisabled}
               >
                  {isloading ? 'загрузка...' : 'ОТПРАВИТЬ'}
               </Button>
            </ButtonContainer>
         </StyledModal>

         <FlexContainer>
            {holidays?.map((item) => (
               <HolidaysCard holidays={holidays} key={item.id} />
            ))}
         </FlexContainer>
      </StyledBox>
   )
}

export default HolidaysList

const StyledBox = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   padding: '10px',
   marginTop: '80px ',
}))
const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
   padding: '10px',
   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
   '& img ': {
      marginRight: '10px',
      color: '#FFFFFF',
   },
}))

const StyledTypograhpy = styled(Typography)(() => ({
   marginLeft: '110px',
   width: '278px',
   fontSize: '24px',
}))
const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      width: '480px',
      borderRadius: '6px',
   },
}))

const StyledMainButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      width: '250px',
      height: '40px',
      fontSize: '14px',
   },
}))
const ButtonContainer = styled(Box)(() => ({
   '& .MuiButton-root': {
      height: '37px',
      width: '232px',
   },
   display: 'flex',
   justifyContent: 'center',
   gap: '16px',
}))

const StyledModal = styled(Modal)(() => ({
   '& .MuiBox-root': {
      width: '544px',
      height: '574px',
   },
}))
const UploadBox = styled(Box)(() => ({
   border: '2px dashed #ccc',
   width: '280px',

   height: ' 217px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   cursor: 'pointer',
   marginLeft: '90px',
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

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   marginLeft: '10px',
   gap: '1rem',
}))
