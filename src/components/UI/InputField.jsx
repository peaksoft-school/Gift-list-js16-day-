import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function InputField({children}) {
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
         {children}
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
