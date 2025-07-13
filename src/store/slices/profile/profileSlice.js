import { createSlice } from '@reduxjs/toolkit'
import { PROFILE_THUNK } from './profileThunk'

const initialState = {
   data: null,
   isLoading: false,
   error: null,
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      clearProfile: (state) => {
         state.data = null
         state.error = null
      },
   },
   extraReducers: (builder) => {
      builder

         .addCase(PROFILE_THUNK.getUserProfile.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(
            PROFILE_THUNK.getUserProfile.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.data = payload
            }
         )
         .addCase(
            PROFILE_THUNK.getUserProfile.rejected,
            (state, { payload }) => {
               state.isLoading = false
               state.error = payload?.message || 'Ошибка при получении данных'
            }
         )

         .addCase(PROFILE_THUNK.updateUserProfile.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            PROFILE_THUNK.updateUserProfile.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.data = payload
            }
         )
         .addCase(
            PROFILE_THUNK.updateUserProfile.rejected,
            (state, { payload }) => {
               state.isLoading = false
               state.error = payload?.message || 'Ошибка при обновлении'
            }
         )
   },
})

const PROFILE_ACTIONS = profileSlice.actions

export { profileSlice, PROFILE_ACTIONS }
