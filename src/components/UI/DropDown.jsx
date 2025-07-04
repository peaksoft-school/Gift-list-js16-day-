import { forwardRef, useMemo } from 'react'
import { MenuItem, Select, styled } from '@mui/material'
import { Typography } from 'antd'

const Dropdown = forwardRef(
   (
      {
         options,
         value,
         onChange,
         placeholder = 'Выберите значение',
         labelText,
         ...rest
      },
      ref
   ) => {
      const selectedOption = useMemo(
         () => options.find((opt) => opt.id === value),
         [options, value]
      )

      return (
         <DropdownContainer>
            {labelText && <DropdownLabel>{labelText}</DropdownLabel>}

            <StyledSelect
               displayEmpty
               value={value ?? ''}
               onChange={onChange}
               ref={ref}
               {...rest}
               renderValue={(selected) =>
                  selected && selectedOption ? (
                     selectedOption.title
                  ) : (
                     <PlaceholderText>{placeholder}</PlaceholderText>
                  )
               }
               label={null}
               variant="outlined"
            >
               {options?.map(({ id, title }) => (
                  <StyledMenuItem key={id} value={id}>
                     {title}
                  </StyledMenuItem>
               ))}
            </StyledSelect>
         </DropdownContainer>
      )
   }
)

export default Dropdown

const DropdownContainer = styled('div')({
   width: '100%',
})

const DropdownLabel = styled(Typography)({
   fontSize: '14px',
   color: '#464444',
   marginBottom: '6px',
   fontWeight: 400,
   lineHeight: '100%',
})

const StyledSelect = styled(Select)(({ theme }) => ({
   borderRadius: '8px',
   width: '100%',
   fontSize: '1rem',
   padding: '12px 14px',

   '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #D4D0D0',
      borderRadius: '8px',
   },

   '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D4D0D0',
   },

   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D4D0D0',
   },

   '& .MuiSelect-select': {
      padding: 0,
   },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
   backgroundColor: 'white',
   color: '#4C4859',

   '&:hover': {
      backgroundColor: 'rgba(58, 16, 229, 0.16)',
   },
}))

const PlaceholderText = styled(Typography)(() => ({
   color: '#9e9e9e',
}))
