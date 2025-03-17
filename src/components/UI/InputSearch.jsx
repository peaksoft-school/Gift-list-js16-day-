import React from 'react'
import {
   TextField,
   MenuItem,
   Select,
   InputAdornment,
   Box,
   styled,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const InputSearch = () => {
   return (
      <MainBox tabIndex={0}>
         <TextField
            variant="standard"
            placeholder="Поиск"
            InputProps={{
               disableUnderline: true,
               startAdornment: (
                  <InputAdornment position="start">
                     <SearchIcon style={{ color: 'gray' }} />
                  </InputAdornment>
               ),
               style: {
                  padding: '6px 12px',
                  color: 'gray',
                  fontWeight: 300,
                  width: '821px',
               },
            }}
            style={{
               flex: 'display',
               background: '#fff',
               borderRadius: '8px',
               padding: '6px 12px',
               '& input::placeholder': { color: 'gray', opacity: 1 },
            }}
         />
         {['Состояние', 'Категория', 'Подкатегория', 'Страна'].map(
            (label, index) => (
               <Selecting
                  key={index}
                  defaultValue=""
                  displayEmpty
                  variant="standard"
                  disableUnderline
               >
                  <MenuItem value="">{label}</MenuItem>
                  <MenuItem value="1"> 1</MenuItem>
                  <MenuItem value="2"> 2</MenuItem>
               </Selecting>
            )
         )}
      </MainBox>
   )
}

const MainBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   background: '#fff',
   padding: '0px',
   borderRadius: '8px',
   border: '1px solid #ddd',
   width: '900px',
   maxWidth: '1300px',

   '.MuiInputBase-input-MuiInput-input': {
      '.MuiBox-root:focus': {
         border: '1px solid #f00',
      },
   },
})

const Selecting = styled(Select)({
   minWidth: 140,
   background: '#fff',
   borderRadius: '8px',
   padding: '6px 12px',
   color: 'gray',
   fontWeight: '100px',

   '& .MuiSelect-icon': { color: 'gray' },
})

export default InputSearch
