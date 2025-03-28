import { useState } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import Select from './Select'
import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'
import {
   categories,
   conditions,
   countries,
   subcategories,
} from '../../../utils/constants/index'

const InputSearch = () => {
   const [filters, setFilters] = useState({
      condition: '',
      category: '',
      subcategory: '',
      country: '',
   })

   const handleChange = (field) => (e) =>
      setFilters((prev) => ({ ...prev, [field]: e.target.value }))

   const searchInputProps = {
      disableUnderline: true,
      startAdornment: (
         <InputAdornment position="start">
            <SearchIcon
               style={{
                  color: 'gray',
                  marginLeft: '10px',
                  marginRight: '10px',
                  width: '24px',
               }}
            />
         </InputAdornment>
      ),
   }

   return (
      <MainBox tabIndex={0}>
         <MainInputSearch
            variant="standard"
            placeholder={'Поиск'}
            InputProps={searchInputProps}
         />

         <Select
            label="Состояние"
            options={conditions}
            value={filters.condition}
            onChange={handleChange('condition')}
         />
         <Select
            label="Категория"
            options={categories}
            value={filters.category}
            onChange={handleChange('category')}
         />
         <Select
            label="Подкатегория"
            options={subcategories}
            value={filters.subcategory}
            onChange={handleChange('subcategory')}
         />
         <Select
            label="Страна"
            options={countries}
            value={filters.country}
            onChange={handleChange('country')}
         />
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
   width: '100%',
   maxWidth: '821px',

   '.MuiInputBase-input-MuiInput-input': {
      focus: {
         border: '1px solid #8d0782',
      },
   },
})

const MainInputSearch = styled(TextField)({
   flex: 'display',
   background: '#fff',
   borderRadius: '8px',
   padding: '6px 12px',
   '& input::placeholder': { color: 'gray', opacity: 1 },
})

export default InputSearch
