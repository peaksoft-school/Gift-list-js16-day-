import {
   Dialog,
   DialogContent,
   DialogActions,
   IconButton,
   Typography,
   Box,
   TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ImageIcon from '@mui/icons-material/Image'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'

const SaleModal = ({ open, handleClose }) => {
   return (
      <CustomDialog open={open} onClose={handleClose}>
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

            <CustomInput label="Тема" placeholder="Введите тему рассылки" />

            <StyledTextField
               label="Текст рассылки"
               placeholder="Введите текст рассылки"
            />
         </DialogContent>

         <DialogActions>
            <Button variant="warninig" type="button">
               ОТМЕНА
            </Button>
            <Button variant="outlined" color="primary" type="button">
               ОТПРАВИТЬ
            </Button>
         </DialogActions>
      </CustomDialog>
   )
}
export default SaleModal
const CustomDialog = styled(Dialog)(() => ({
   '& .MuiDialog-paper': {
      width: '544px',
      height: '574px',
   },
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
   marginLeft: '140px',
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

const StyledTextField = styled(TextField)(() => ({
   '& .MuiOutlinedInput-root': {
      height: '35px',
      display: 'flex',
   },
   '& .MuiOutlinedInput-input': {
      text: 'center',
      padding: '0',
      height: '100%',
   },
   '&.MuiTextField-root': {
      width: '480px',
   },
}))
const CustomInput = styled(Input)(() => ({
   //    '& .MuiFormLabel-root  ': {
   //       width: '480px',
   //    },
}))
