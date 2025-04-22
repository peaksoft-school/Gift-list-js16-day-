import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './components/Themes.jsx'


createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </StrictMode>
)
