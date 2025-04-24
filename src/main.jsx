import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './components/Themes.jsx'
import { injectStore } from './configs/axiosInstance.js'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'


injectStore()

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
            </PersistGate>
      </Provider>
   </StrictMode>
)
