import { Box, styled } from '@mui/material'

import Checkbox from '@mui/material/Checkbox'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export default function Checkboxs({children}) {
   return (
      <Box>
         {children}
         <Checkbox />
         <Checkbox color="secondary" />
         <Checkbox {...label} defaultChecked color="secondary" />
         <Checkbox />
      </Box>
   )
}

// const CustomCheckbox = styled(Checkbox)({

//       borderRadius: '5px',
//       border: '2px solid red',

// })
