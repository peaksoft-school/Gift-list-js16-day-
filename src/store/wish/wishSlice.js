import { createSlice } from '@reduxjs/toolkit'
import { WISH_THUNK } from './wishThunk'

const initialState = {
   wishes: [],
   isLoading: false,
   error: null,
}

const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(WISH_THUNK.addWish.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(WISH_THUNK.addWish.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.wishes.push(payload)
            state.error = null
         })
         .addCase(WISH_THUNK.addWish.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload?.message || 'Ошибка при добавлении желания'
         })
   },
})

export const WISH_ACTIONS = wishSlice.actions
export default wishSlice.reducer
