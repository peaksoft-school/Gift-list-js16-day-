import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { filesSlice } from './slices/file/filesSlice'
import { mailingSlice } from './slices/admin/mailing/mailingSlice'
import { usersSlice } from './slices/admin/users/usersSlice'
import { authSlice } from './slices/auth/authSlice'
import { wishSlice } from './wish/wishSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [filesSlice.name]: filesSlice.reducer,
   [mailingSlice.name]: mailingSlice.reducer,
   [usersSlice.name]: usersSlice.reducer,
   [wishSlice.name]: wishSlice.reducer,
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
