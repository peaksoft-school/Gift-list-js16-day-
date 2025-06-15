import { createSlice } from '@reduxjs/toolkit'
import { USER_CHARITY_THUNK } from './userCharityThunk'

const initialState = {
   charity: [],
   selectedUserCharity: {},
   loading: false,
   error: null,
}

const userCharitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            USER_CHARITY_THUNK.getAllUserCharity.fulfilled,
            (state, { payload }) => {
               state.charity = payload
               state.loading = false
            }
         )

         .addCase(USER_CHARITY_THUNK.getAllUserCharity.pending, (state) => {
            state.loading = true
         })

         .addCase(USER_CHARITY_THUNK.getAllUserCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(
            USER_CHARITY_THUNK.getById.fulfilled,
            (state, { payload }) => {
               state.selectedUserCharity = payload
               state.loading = false
            }
         )

         .addCase(USER_CHARITY_THUNK.getById.pending, (state) => {
            state.loading = true
         })

         .addCase(USER_CHARITY_THUNK.getById.rejected, (state) => {
            state.loading = false
         })

         .addCase(
            USER_CHARITY_THUNK.deleteCharity.fulfilled,
            (state, { payload }) => {
               state.delete = payload
               state.loading = false
            }
         )

         .addCase(USER_CHARITY_THUNK.deleteCharity.pending, (state) => {
            state.loading = true
         })

         .addCase(USER_CHARITY_THUNK.deleteCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(
            USER_CHARITY_THUNK.createCharity.fulfilled,
            (state, { payload }) => {
               state.charity.push(payload)
               state.loading = false
            }
         )

         .addCase(USER_CHARITY_THUNK.createCharity.pending, (state) => {
            state.loading = true
         })

         .addCase(
            USER_CHARITY_THUNK.createCharity.rejected,
            (state, { error }) => {
               state.loading = false
               state.error = error.message
            }
         )
   },
})

const USER_CHARITY_ACTIONS = userCharitySlice.actions

export { userCharitySlice, USER_CHARITY_ACTIONS }
