import { createTheme } from '@mui/material'

const theme = createTheme({
   palette: {
      primary: {
         main: '#fff',
         purple: '#8639B5',
         black: '#020202',
      },

      secondary: {
         main: '#8D949E',
         red: '#FD5200',
      },

      linear: {
         main: '#3F2B96',
         red: '#FF3D3D',
         green: '#1FAA59',
      },
   },
})

export default theme;
