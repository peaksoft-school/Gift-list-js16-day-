import {
   Box,
   DialogContent,
   styled,
   TextField,
   Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const CharityForm = () => {
   const [preview, setPreview] = useState()
   return (
      <>
         <FlexContainer>
            <DialogContent>
               <label htmlFor="upload-file">
                  <UploadBox>
                     {preview && (
                        <Box component="img" src={preview} alt="photo" />
                     )}
                  </UploadBox>
               </label>
               <input
                  type="file"
                  id="upload-file"
                  hidden
                  // onChange={handleFileChange}
               />
            </DialogContent>

            <StyledInputGift>
               <Box>
                  <Typography>Добавление вещи</Typography>
               </Box>
               <StyledInput
                  labelText="Название подарка"
                  placeholder="Введите название подарка"
               />
               <StyledInput
                  labelText="Категория"
                  placeholder="Выберите категорию"
               />
            </StyledInputGift>
            <StyledInputState>
               <StyledInput
                  labelText="Состояние"
                  placeholder="Укажите состояние"
               />
               <StyledInput
                  labelText="Подкатегория"
                  placeholder="Выберите подкатегорию"
               />
            </StyledInputState>
            {/* <StyledTextField
               labelText="Описание"
               placeholder="Введите описание подарка"
               multiline
               rows={4}
            /> */}
         </FlexContainer>
         <StyledButton>
            <Button variant="warning" />
            <Button variant="contained" />
         </StyledButton>
      </>
   )
}

export default CharityForm
const UploadBox = styled(Box)(() => ({}))
const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   // flexWrap: 'wrap',
}))

const StyledInputGift = styled(Box)(() => ({}))
const StyledInputState = styled(Box)(() => ({
   marginTop: '23px',
   marginLeft: '10px',
}))
const StyledTextField = styled(TextField)(() => ({
   width: '808px',
   marginLeft: '40px',
   marginTop: '30px',
   borderRadius: '6px',
   border: '1px solid #BDBDBD',
}))
const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      width: '396px',
   },
}))
const StyledButton = styled(Box)(() => ({
   marginLeft: '700px',
   '& Button': {
      width: '131px',
   },
}))
