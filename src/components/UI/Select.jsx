import { MenuItem, Select as MuiSelect, styled } from '@mui/material'

const Select = ({ label, options, value, onChange, ...rest }) => (
   <Selecting
      value={value}
      onChange={onChange}
      displayEmpty
      variant="standard"
      disableUnderline
      {...rest}
   >
      <MainItem value="">{label}</MainItem>

      {options.map(({ value, name }, i) => (
         <MainItem key={`${value}-${i}`} value={name}>
            {name}
         </MainItem>
      ))}
   </Selecting>
)

export default Select

const Selecting = styled(MuiSelect)({
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
