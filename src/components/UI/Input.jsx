import { TextField } from '@mui/material'

const Input = ({ type, placeholder, onChange }) => {
   return (
      <div>
         <TextField
            label="Название праздника"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
         />
      </div>
   )
}

export default Input
