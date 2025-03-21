import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {  Typography, useTheme } from '@mui/material'

const App = () => {
   const theme = useTheme()

   return (
      <div style={{ padding: '20px' }}>
         <Typography variant="h1" style={{ color: theme.palette.linear.main }}>
            Hello Themes!
         </Typography>

         <AccountCircleIcon />
      </div>
   )
}

export default App
