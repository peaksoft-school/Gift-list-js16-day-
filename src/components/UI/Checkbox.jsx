import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import styled from 'styled-components'
import { forwardRef } from 'react'
import borderCheck from '../../assets/icon/BorderCheck.svg'
import colorCheck from '../../assets/icon/ColorCheck.svg'

const Checkbox = forwardRef(
   ({ checked, onChange, disabled, label, props, ...rest }, ref) => {
      return (
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
                        width="24"
                        height="24"
                     />
                  }
                  checkedIcon={
                     <img
                        src={colorCheck}
                        alt="checked"
                        width="24"
                        height="24"
                     />
                  }
                  {...props}
                  {...rest}
               />
            }
         />
      )
   }
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
