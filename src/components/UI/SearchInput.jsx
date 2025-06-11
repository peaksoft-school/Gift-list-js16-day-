import { useState } from 'react'
import { Box, InputAdornment, TextField, styled } from '@mui/material'
import {
   categories,
   conditions,
   countries,
   subcategories,
} from '../../utils/constants/index'
import Select from './Select'
import UnionIcon from '../../assets/icons/Union.svg'

const SearchInput = () => {
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

      startAdornment: <InputAdornment position="start"></InputAdornment>,
   }

   return (
      <MainBox tabIndex={0}>
         <StyledUnionIcon src={UnionIcon} alt="" />

         <MainInputSearch
            variant="standard"
            placeholder="Поиск"
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

export default SearchInput

const MainBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   background: '#fff',
   padding: '0px',
   borderRadius: '8px',
   border: '1px solid #ddd',
   width: '100%',
   maxWidth: '76.5%',
   marginRight: '90px',

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

const StyledUnionIcon = styled('img')({
   color: 'gray',
   marginLeft: '10px',
})
