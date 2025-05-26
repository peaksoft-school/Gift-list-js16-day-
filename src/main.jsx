import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './components/Themes.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { injectStore } from './configs/axiosInstance.js'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { fileInjectStore } from './configs/axiosInstanceFile.js'
import Notification from './components/Notification.jsx'

injectStore(store)
fileInjectStore(store)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <PersistGate persistor={persistor}>
               <ThemeProvider theme={theme}>
                  <Notification />
                  <App />
               </ThemeProvider>
            </PersistGate>
         </Provider>
      </BrowserRouter>
   </StrictMode>
)
