import { MenuItem, Select as MuiSelect } from '@mui/material'
import styled from 'styled-components'

const Select = ({ label, options, value, onChange }) => (
   <Selecting
      value={value}
      onChange={onChange}
      displayEmpty
      variant="standard"
      disableUnderline
   >
      <MainItem value="">{label}</MainItem>
      {options.map((option) => (
         <MainItem key={option.value} value={option.name}>
            {option.name}
         </MainItem>
      ))}
   </Selecting>
)

export default Select

const Selecting = styled(MuiSelect)({
   minWidth: 90,
   marginLeft: 10,
   background: '#fff',
   borderRadius: '8px',
   padding: '6px 0 6px 10px',
   color: '#8D949E',
   fontWeight: '100px',
   fontSize: '14px',

   '& .MuiSelect-select': {
      color: 'gray',
   },

   '& .MuiSelect-icon': { color: 'gray', fontWeight: 100 },
})

const MainItem = styled(MenuItem)({
   '&:hover': {
      background: '#500e7c33',
   },
   '&:focus': {
      background: '#8639B566',
   },
})
