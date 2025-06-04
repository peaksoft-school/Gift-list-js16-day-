import { createSlice } from '@reduxjs/toolkit'
import { USERS_THUNK } from './usersThunk'

const initialState = {
   profileUser: {},
   isLoading: false,
}

const profileSlice = createSlice({
   name: 'profileUser',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(USERS_THUNK.getProfileUserById.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            USERS_THUNK.getProfileUserById.fulfilled,
            (state, { payload }) => {
               state.profileUser = payload
               state.isLoading = false
            }
         )
         .addCase(USERS_THUNK.getProfileUserById.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const USERS_ACTIONS = profileSlice.actions

export { profileSlice, USERS_ACTIONS }
