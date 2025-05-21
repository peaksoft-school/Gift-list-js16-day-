import { Box, DialogContent, styled, Typography } from '@mui/material'
import React, { memo, useEffect, useState } from 'react'
import Button from '../Button'
import HolidaysCard from './HolidaysCard'
import Pluse from '../../../assets/images/pluse.png'
import Modal from '../Modal'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { HOLIDAYS_THUNK } from '../../../store/slices/auth/holidays/holidaysThunk'

const HolidaysList = () => {
   const { holidays } = useSelector((state) => state.holidays)

   const [openModal, setOpenModal] = useState(false)
   const [preview, setPreview] = useState(null)
   const [image, setImage] = useState(null)
   const [title, setTitle] = useState('')
   const [date, setDate] = useState('')

   const handleOpenModal = () => {
      setOpenModal(true)
   }
   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const dispatch = useDispatch()

   const handleSubmit = () => {
      const formData = new FormData()

      formData.append('title', title)
      formData.append('date', date)
      formData.append('image', image)

      dispatch(HOLIDAYS_THUNK.createHoliday(formData))
         .unwrap()
         .then((res) => {
            if (res.status === 'OK') {
               dispatch(HOLIDAYS_THUNK.getAllHolidays())

               setOpenModal(false)
               setTitle('')
               setDate('')
               setImage(null)
               setPreview(null)
            }
         })
   }

   useEffect(() => {
      dispatch(HOLIDAYS_THUNK.getAllHolidays())
   }, [dispatch])

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

            <StyledInput
               labelText="Название праздника"
               id="holidays-input"
               placeholder="Введите название праздника"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />

            <StyledInput
               labelText="Дата праздника"
               id="holidays2-input"
               placeholder="Укажите дату праздника"
               type="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
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
               >
                  ОТПРАВИТЬ
               </Button>
            </ButtonContainer>
         </StyledModal>

         <HolidaysCard holidays={holidays} />
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
