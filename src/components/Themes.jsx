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
         perple: 'linear-gradient(195deg rgba(128,42,241,1)0%,  rgba(3,78,156,1)96%)',
         red: 'linear-gradient(153deg, rgba(245,4,4,0.5741946436777836)35%, rgba(224,70,72,0.938340301941089)100%)',
         green: 'linear-gradient(63deg, rgba(17,176,36,0.5741946436777836) 23%, rgba(37,187,78,0.8851190134256828) 100%);',
 
      },
   },
})

export default theme;
