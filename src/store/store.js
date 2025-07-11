import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { filesSlice } from './slices/file/filesSlice'
import { mailingSlice } from './slices/admin/mailing/mailingSlice'
import { usersSlice } from './slices/admin/users/usersSlice'
import { authSlice } from './slices/auth/authSlice'
import { holidaysSlice } from './slices/user/holidays/holidaysSlice'
import { friendsSlice } from './slices/user/friends/friendsSlice'
import { charitySlice } from './slices/admin/charity/charitySlice'
import { bookedsSlice } from './slices/user/bookeds/bookedsSlice'
import { userCharitySlice } from './slices/user/charity/useCharitySlice'
import { ribbonSlice } from './slices/ribbon/RibbonSlice'
import { wishSlice } from './slices/user/wish/wishSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [filesSlice.name]: filesSlice.reducer,
   [mailingSlice.name]: mailingSlice.reducer,
   [usersSlice.name]: usersSlice.reducer,
   [holidaysSlice.name]: holidaysSlice.reducer,
   [friendsSlice.name]: friendsSlice.reducer,
   [charitySlice.name]: charitySlice.reducer,
   [bookedsSlice.name]: bookedsSlice.reducer,
   [userCharitySlice.name]: userCharitySlice.reducer,
   [ribbonSlice.name]: ribbonSlice.reducer,
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
