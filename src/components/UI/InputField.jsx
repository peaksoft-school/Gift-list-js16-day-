// import { Box, TextField } from '@mui/material'
// import { useState } from 'react'
// import styled from 'styled-components'

// const InputField = () => {
//    const [value, setValue] = useState('')
//    const handleChange = (e) => {
//       const newValue = e.target.value
//       setValue(newValue)
//    }

//    return (
//       <Box sx={{borderRadius:"3px"}}>
//          <StyledForm>
//             <label htmlFor="holiday-name">Название праздника</label>
//             <TextField
//                type="text"
//                id="holiday-name"
//                placeholder="Введите название праздника"
//                value={value}
//                onChange={handleChange}
//             >
//                Input
//             </TextField>
//             <label htmlFor="holiday-name">Название праздника</label>
//             <TextField
//                type="text"
//                id="holiday-name"
//                placeholder="Введите название праздника"
//                value={value}
//                onChange={handleChange}
//             >
//                Input
//             </TextField>
//          </StyledForm>
//       </Box>
//    )
// }

// export default InputField
// const StyledBox=
// // const StyledContainer = styled.div`
// //    display: flex;
// //    justify-content: center;
// //    border-radius:;
// //    width: 100%;
// //    height: 100%;
// // `
// const StyledForm = styled.form`
//    display: flex;
//    flex-direction: column;
//    width: 300px;
//    height: 100%;
// `
// // const TextField = styled()(() => {})

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// function InputField() {
//   return (
//     <Box
//       sx={(theme) => ({
//         height: 20,
//         backgroundColor: 'rgba(255, 0, 0, 0.1)',
//         ...theme.applyStyles('dark', {
//           backgroundColor: 'rgb(255 132 132 / 25%)',
//         }),
//       })}
//     />
//   );
// }

export default function InputField() {
   return (
      <Box
         sx={{
            border: '2px dashed #aaa',
            maxWidth: '400px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',

            '& .MuiTextField-root': {
               width: '35ch',
            },
         }}
      >
         <TextField
            label={'Название праздника'}
            id="margin-dense"
            margin="dense"
            placeholder="Введите название праздника"
         />
         <TextField
            label={'Название праздника'}
            id="margin-dense"
            margin="dense"
            placeholder="Введите название праздника"
         />
         <TextField
            label={'Название праздника'}
            id="margin-dense"
            margin="dense"
            placeholder="Введите название праздника"
         />
         <TextField
            label={'Название праздника'}
            id="margin-dense"
            margin="dense"
            placeholder="Введите название праздника"
         />
         <TextField
            label={'Название праздника'}
            id="margin-dense"
            margin="dense"
            fullWidth
            placeholder="345787654356"
            error //
            helperText="Текст ошибки"
         />
      </Box>
   )
}
