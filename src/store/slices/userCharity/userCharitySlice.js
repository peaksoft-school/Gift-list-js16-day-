import { createSlice } from '@reduxjs/toolkit'
import { USERCHARITY_THUNK } from './userCharityThunk'

const initialState = {
   usersCharity: [],
   selectedUserCharity: {},
   loading: false,
   error: null,
}

const userCharitySlice = createSlice({
   name: 'userCharity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            USERCHARITY_THUNK.getAllUserCharity.fulfilled,
            (state, { payload }) => {
               state.usersCharity = payload
               state.loading = false
            }
         )
         .addCase(USERCHARITY_THUNK.getAllUserCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(USERCHARITY_THUNK.getAllUserCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(USERCHARITY_THUNK.getById.fulfilled, (state, { payload }) => {
            state.selectedUserCharity = payload
            state.loading = false
         })
         .addCase(USERCHARITY_THUNK.getById.pending, (state) => {
            state.loading = true
         })
         .addCase(USERCHARITY_THUNK.getById.rejected, (state) => {
            state.loading = false
         })
         .addCase(
            USERCHARITY_THUNK.deleteCharity.fulfilled,
            (state, { payload }) => {
               state.delete = payload
               state.loading = false
            }
         )
         .addCase(USERCHARITY_THUNK.deleteCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(USERCHARITY_THUNK.deleteCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(
            USERCHARITY_THUNK.createCharity.fulfilled,
            (state, { payload }) => {
               state.usersCharity.push(payload)
               state.loading = false
            }
         )
         .addCase(USERCHARITY_THUNK.createCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(
            USERCHARITY_THUNK.createCharity.rejected,
            (state, { error }) => {
               state.loading = false
               state.error = error.message
            }
         )
   },
})

const USERCHARITY_ACTIONS = userCharitySlice.actions

export { userCharitySlice, USERCHARITY_ACTIONS }
