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
         />
      </div>
   )
}

export default Input
