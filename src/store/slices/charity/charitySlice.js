import { createSlice } from '@reduxjs/toolkit'
import { CHARITY_THUNK } from './charityThunk'

const initialState = {
   charity: [],
   selectedCharity: {},
   loading: false,
   error: null,
}

const charitySlice = createSlice({
   name: 'charity',
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
         .addCase(CHARITY_THUNK.getAllCharity.pending, (state) => {
            state.loading = true
         })
         .addCase(CHARITY_THUNK.getAllCharity.rejected, (state) => {
            state.loading = false
         })

         .addCase(CHARITY_THUNK.getById.fulfilled, (state, { payload }) => {
            state.selectedCharity = payload
            state.loading = false
         })
         .addCase(CHARITY_THUNK.getById.pending, (state) => {
            state.loading = true
         })
         .addCase(CHARITY_THUNK.getById.rejected, (state) => {
            state.loading = false
         })
   },
})

const CHARITY_ACTIONS = charitySlice.CHARITY_ACTIONS

export { charitySlice, CHARITY_ACTIONS }

export default charitySlice.reducer
