import { createSlice } from '@reduxjs/toolkit'
import { USERS_THUNK } from './usersThunk'

const initialState = {
   users: [],
   user: {},
   isLoading: false,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(USERS_THUNK.getAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getAllUsers.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getAllUsers.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.deleteUsers.fulfilled, (state, { payload }) => {
            state.selectedUsers = payload
            state.isLoading = false
         })
         .addCase(USERS_THUNK.deleteUsers.pending, (state) => {
            state.isLoading = true
         })
         .addCase(USERS_THUNK.deleteUsers.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const USERS_ACTIONS = usersSlice.USERS_ACTIONS

export { usersSlice, USERS_ACTIONS }
