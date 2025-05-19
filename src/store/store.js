import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { authSlise } from './slices/auth/authSlice'
import { mailingSlice } from './slices/mailing/mailingSlice'
import { filesSlice } from './slices/file/filesSlice'
import { usersSlice } from './slices/admin/users/usersSlice'

const rootReducer = combineReducers({
   [authSlise.name]: authSlise.reducer,
   [mailingSlice.name]: mailingSlice.reducer,
   [filesSlice.name]: filesSlice.reducer,
   [usersSlice.name]: usersSlice.reducer,
})

const persistConfig = {
   key: 'GIFT-LIST',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

const persistor = persistStore(store)

export { store, persistor }
