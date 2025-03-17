import { TextField } from '@mui/material'

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
         <TextField
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
            sx={{ width: '250px' }}
         />
      </div>
   )
}

export default Input
