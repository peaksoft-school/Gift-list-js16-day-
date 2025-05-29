import { createSlice } from '@reduxjs/toolkit'
import { CHARITY_THUNK } from './charityThunk'

const initialState = {
   userCharity: [],
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
            CHARITY_THUNK.getAllCharity.fulfilled,
            (state, { payload }) => {
               state.charity = payload
               state.loading = false
            }
         )
         .addCase(CHARITY_THUNK.getAllUserCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(CHARITY_THUNK.getAllUserCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(CHARITY_THUNK.getById.fulfilled, (state, { payload }) => {
            state.selectedUserCharity = payload
            state.loading = false
         })
         .addCase(CHARITY_THUNK.getById.pending, (state) => {
            state.loading = true
         })
         .addCase(CHARITY_THUNK.getById.rejected, (state) => {
            state.loading = false
         })
         .addCase(
            CHARITY_THUNK.deleteCharity.fulfilled,
            (state, { payload }) => {
               state.delete = payload
               state.loading = false
            }
         )
         .addCase(CHARITY_THUNK.deleteCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(CHARITY_THUNK.deleteCharity.rejected, (state) => {
            state.loading = false
         })
   },
})

const USERCHARITY_ACTIONS = userCharitySlice.USERCHARITY_ACTIONS

export { userCharitySlice, USERCHARITY_ACTIONS }

export default userCharitySlice.reducer
