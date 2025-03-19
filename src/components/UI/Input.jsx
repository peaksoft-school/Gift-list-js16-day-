import { styled, TextField } from '@mui/material'

const Input = ({
   type,
   placeholder,
   onChange,
   props,
   value,
   label,
   error,
   disabled,
   rest,
   variant,
}) => {
   return (
      <div>
         <label for="">Название праздника</label>
         <StyledTextField
            label={label}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            props={props}
            value={value}
            error={error}
            disabled={disabled}
            rest={rest}
            variant={variant}
         />
      </div>
   )
}

export default Input

const StyledTextField = styled(TextField)((props) => ({
   width: '250px',
   margin: '10px ',

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: props.error ? 'red' : 'gray',
      },
      '&:hover fieldset': {
         borderColor: props.error ? 'darkred' : 'black',
      },
      '&.Mui-focused fieldset': {
         borderColor: props.error ? 'red' : 'blue',
      },
   },
   '& .MuiInputLabel-root': {
      color: props.error ? 'red' : 'inherit',
   },
}))
