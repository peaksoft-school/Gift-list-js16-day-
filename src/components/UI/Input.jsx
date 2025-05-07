import { useState, forwardRef } from 'react'
import {
   FormHelperText,
   InputAdornment,
   InputLabel,
   TextField,
   styled,
   IconButton,
} from '@mui/material'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
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
         <StyledInputLabel error={error}>{labelText}</StyledInputLabel>

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

// 🔒 Input.Password с глазком
Input.Password = forwardRef(
   ({ placeholder, error, errorText, inputProps, ...rest }, ref) => {
      const [showPassword, setShowPassword] = useState(false)

      const toggleShowPassword = () => {
         setShowPassword((prev) => !prev)
      }

      return (
         <>
            <StyledInput
               type={showPassword ? 'text' : 'password'}
               placeholder={placeholder}
               error={Boolean(error)}
               fullWidth
               ref={ref}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton onClick={toggleShowPassword} edge="end">
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  ),
                  ...inputProps,
               }}
               {...rest}
            />
            {error && <StyledFormHelperText>{errorText}</StyledFormHelperText>}
         </>
      )
   }
)

export default Input

const StyledInputLabel = styled(InputLabel)(({ error }) => ({
   '&.MuiFormLabel-root': {
      fontWeight: '100',
      lineHeight: '100%',
      color: error ? 'red' : '#8D949E',
   },
}))

const StyledInput = styled(TextField)(() => ({
   '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      padding: '0px 5px',
      marginTop: '4.5px',

      '& fieldset': {
         margin: '8px 0',
      },

      '&:hover fieldset': {
         border: '1px solid grey',
      },

      '&.Mui-focused fieldset': {
         border: '1px solid grey',
      },

      '& .error-icon': {
         color: 'red',
      },
   },

   '& .MuiOutlinedInput-root input::placeholder': {
      color: '#8D949E',
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
      width: '290px',
      textAlign: 'right',
      fontSize: '11px',
   },
}))
