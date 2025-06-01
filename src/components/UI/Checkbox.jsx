import {
   Checkbox as MuiCheckbox,
   FormControlLabel,
   styled,
} from '@mui/material'
import { forwardRef } from 'react'
import borderCheck from '../../assets/icons/border-check.svg'
import colorCheck from '../../assets/icons/color-check.svg'

const Checkbox = forwardRef(
   ({ checked, onChange, disabled, label, ...rest }, ref) => (
      <StyledFormControlLabel
         label={label}
         control={
            <StyledMuiCheckbox
               checked={checked}
               onChange={onChange}
               disabled={disabled}
               ref={ref}
               icon={
                  <img
                     src={borderCheck}
                     alt="unchecked"
                     width="20"
                     height="20"
                  />
               }
               checkedIcon={
                  <img src={colorCheck} alt="checked" width="20" height="20" />
               }
               {...rest}
            />
         }
      />
   )
)
export default Checkbox

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
   '&.MuiButtonBase-root-MuiCheckbox-root ': {
      color: '#1744b8 ',
   },
}))

const StyledMuiCheckbox = styled(MuiCheckbox)(() => ({
   '&.MuiTouchRipple-root ': {
      '& svg:hover': {
         color: '#8639B5 !important',
      },
   },

   '&.Mui-checked': {
      '& svg': {
         color: '#8639B5',
      },

      '& span': {
         color: '#8639B5',
      },
   },
}))
