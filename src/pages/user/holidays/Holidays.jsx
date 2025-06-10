import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, DialogContent, styled, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import Button from '../../../components/UI/Button'
import HolidaysCard from '../../../components/UI/card/HolidayCard'
import Input from '../../../components/UI/Input'
import Modal from '../../../components/UI/modal/Modal'
import Pluse from '../../../assets/images/pluse.png'
import NoMailings from '../../../assets/images/empty-state.png'
import { FILES_ACTIONS } from '../../../store/slices/file/filesSlice'
import { FILES_THUNK } from '../../../store/slices/file/filesThunk'
import { HOLIDAYS_THUNK } from '../../../store/slices/user/holidays/holidaysThunk'

const Holidays = () => {
   const { holidays } = useSelector((state) => state.holidays)

   const { fileUrl, isloading } = useSelector((state) => state.files)

   const [abortController, setAbortController] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   const [preview, setPreview] = useState(null)

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
         name: title,
         date,
         image: fileUrl,
      }

      dispatch(
         HOLIDAYS_THUNK.createHoliday({ values, resetForm, handleCloseModal })
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
                  <UploadBox preview={preview}>
                     {preview ? (
                        <Box
                           component="img"
                           src={preview}
                           alt="preview"
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
            {holidays?.length === 0 ? (
               <StyledNotBlockBox>
                  <img src={NoMailings} alt="icon" />

                  <h1>Нет праздников!</h1>
               </StyledNotBlockBox>
            ) : (
               holidays?.map((holiday) => (
                  <HolidaysCard holiday={holiday} key={holiday.id} />
               ))
            )}
         </FlexContainer>
      </StyledBox>
   )
}

export default Holidays

const StyledBox = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
   padding: '0 20px',
}))

const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

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
   width: '544px',
   height: '574px',
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

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '1rem',
}))

const StyledNotBlockBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   margin: 'auto',

   '& img': {
      width: '300px',
   },
}))
