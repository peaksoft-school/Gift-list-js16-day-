import { createSlice } from '@reduxjs/toolkit'
import { BOOKEDS_THUNK } from './bookedsThunk'

const initialState = {
   wishList: [],
   holidayGifts: [],
   loading: false,
   error: null,
}

const bookedsSlice = createSlice({
   name: 'bookeds',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(BOOKEDS_THUNK.getAllBookedWishList.pending, (state) => {
            state.loading = true
         })
         .addCase(
            BOOKEDS_THUNK.getAllBookedWishList.fulfilled,
            (state, { payload }) => {
               state.wishList = payload
               state.loading = false
            }
         )
         .addCase(
            BOOKEDS_THUNK.getAllBookedWishList.rejected,
            (state, action) => {
               state.loading = false
               state.error = action.error.message
            }
         )

         .addCase(BOOKEDS_THUNK.getAllBookedHolidayGift.pending, (state) => {
            state.loading = true
         })
         .addCase(
            BOOKEDS_THUNK.getAllBookedHolidayGift.fulfilled,
            (state, { payload }) => {
               state.holidayGifts = payload
               state.loading = false
            }
         )
         .addCase(
            BOOKEDS_THUNK.getAllBookedHolidayGift.rejected,
            (state, action) => {
               state.loading = false
               state.error = action.error.message
            }
         )
   },
})

export const BOOKEDS_ACTIONS = bookedsSlice.actions
export default bookedsSlice
