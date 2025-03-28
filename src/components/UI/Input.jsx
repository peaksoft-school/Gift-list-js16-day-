import {
   FormHelperText,
   InputAdornment,
   InputLabel,
   TextField,
   Typography,
   styled,
} from '@mui/material'
import { forwardRef } from 'react'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'

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
         errorMessage,
         ...rest
      },
      ref
   ) => {
      return (
         <>
            <StyledInputLabel>{labelText}</StyledInputLabel>

            <StyledInput
               type={type}
               value={value}
               onChange={handleChange}
               placeholder={placeholder}
               error={Boolean(error)}
               name={name}
               errorMessage={errorMessage}
               ref={ref}
               fullWidth
               props={{
                  endAdornment: error ? (
                     <InputAdornment position="end">
                        <ErrorOutlineRoundedIcon sx={{ color: 'red' }} />
                     </InputAdornment>
                  ) : null,
               }}
               {...rest}
            />

            {error && (
               <Typography variant="caption" color="error">
                  {errorText}
               </Typography>
            )}
            {error && (
               <FormHelperText sx={{ color: 'red', ml: '200px' }}>
                  {errorMessage}
               </FormHelperText>
            )}
         </>
      )
   }
)
export default Input

const StyledInputLabel = styled(InputLabel)(() => ({
   fontSize: '9.75px',
   fontWeight: '400',
   lineHeight: '100%',
}))

const StyledInput = styled(TextField)(() => ({
   '& .MuiOutlinedInput-root': {
      fontSize: '12px',
      borderRadius: '12px',
      padding: '0px 15px',
      width: '257px',
      height: '44px',

      '& fieldset': {
         margin: '8px 0',
         borderWidth: '2px',
      },
      '&:hover fieldset': {
         borderColor: '#8639B5',
      },

      '&.Mui-focused fieldset': {
         borderColor: '#8639B5',
      },
   },
   
   '& .MuiOutlinedInput-root.Mui-focused input': {
      caretColor: '#8639B5',
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
