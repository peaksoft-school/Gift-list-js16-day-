import Checkbox from '@mui/material/Checkbox'

export default function Checkboxs({
   label,
   onChange,
   control,
   disabled,
   checked,
   color,
   size,
   ...props
}) {
   return (
      <>
         <Checkbox
            label={label}
            onChange={onChange}
            control={control}
            disabled={disabled}
            checked={checked}
            color={color}
            size={size}
            {...props}
         />
      </>
   )
}
