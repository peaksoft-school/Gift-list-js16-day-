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
         main:  rgba(3,78,156,1),
         red:  rgba(224,70,72,0.938340301941089),
         green:  rgba(37,187,78,0.8851190134256828)
 
      },
   },
})

export default theme;
