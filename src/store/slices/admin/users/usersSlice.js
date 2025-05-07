import { createSlice } from '@reduxjs/toolkit'
import { USERS_THUNK } from './usersThunk'

const initialState = {
   users: {},
   loading: false,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(USERS_THUNK.addUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.loading = false
         })
         .addCase(USERS_THUNK.addUsers.pending, (state) => {
            state.loading = true
         })
         .addCase(USERS_THUNK.addUsers.rejected, (state) => {
            state.loading = false
         })

         .addCase(USERS_THUNK.deleteUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.loading = false
         })
         .addCase(USERS_THUNK.deleteUsers.pending, (state) => {
            state.loading = true
         })
         .addCase(USERS_THUNK.deleteUsers.rejected, (state) => {
            state.loading = false
         })
   },
})

const USERS_ACTIONS = usersSlice.USERS_ACTIONS

export { usersSlice, USERS_ACTIONS }

