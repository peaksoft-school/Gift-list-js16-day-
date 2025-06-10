import { forwardRef } from 'react'
import {
   FormHelperText,
   InputAdornment,
   InputLabel,
   TextField,
   styled,
} from '@mui/material'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import UnionIcon from '../../assets/icons/Union.svg'

const Input = forwardRef(
   (
      {
         type,
         placeholder,
         handleChange,
         value,
         labelText,
         name,
         error,
         errorText,
         inputProps,
         icon,
         ...rest
      },
      ref
   ) => (
      <>
         <StyledInputLabel error={Boolean(error)}>{labelText}</StyledInputLabel>

         <StyledInput
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            error={Boolean(error)}
            name={name}
            ref={ref}
            fullWidth
            InputProps={{
               startAdornment: icon ? (
                  <InputAdornment position="start">
                     <img src={UnionIcon} alt="notification" />
                  </InputAdornment>
               ) : null,

               endAdornment: error ? (
                  <InputAdornment position="end">
                     <ErrorOutlineRoundedIcon className="error-icon" />
                  </InputAdornment>
               ) : null,
               ...inputProps,
            }}
            {...rest}
         />

         {error && <StyledFormHelperText>{errorText}</StyledFormHelperText>}
      </>
   )
)

export default Input

const StyledInputLabel = styled(InputLabel)(({ error }) => ({
   '&.MuiFormLabel-root': {
      fontWeight: '100',
      lineHeight: '100%',
      color: error ? 'red' : '#8D949E',
   },
}))

const StyledInput = styled(TextField)(({ error }) => ({
   '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      padding: '0px 5px',
      marginTop: '4.5px',

      '& fieldset': {
         margin: '8px 0',
      },

      '&:hover fieldset': {
         border: '1px solid #8639B5',
      },

      '&.Mui-focused fieldset': {
         border: '1px solid grey',
      },

      '& .error-icon': {
         color: 'red',
      },
   },

   '& .MuiOutlinedInput-root input::placeholder': {
      color: error ? 'red' : '#8D949E',
      opacity: 1,
   },

   '& .MuiOutlinedInput-root.Mui-focused input': {
      caretColor: '#8639B5',
      color: 'black',
   },

   '& .MuiOutlinedInput-root.Mui-error': {
      '& fieldset': {
         borderColor: 'red',
      },

      '& input': {
         color: 'red',
      },
   },
}))

const StyledFormHelperText = styled(FormHelperText)(() => ({
   '&.MuiFormHelperText-root': {
      color: 'red',
      textAlign: 'left',
      fontSize: '11px',
   },
}))
