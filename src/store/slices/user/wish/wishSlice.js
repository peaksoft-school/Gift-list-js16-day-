import { createSlice } from '@reduxjs/toolkit'
import { WISH_THUNK } from './wishThunk'

const initialState = {
   wishes: [],
   holidays: [],
   selectedWish: null,
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

      clearSelectedWish: (state) => {
         state.selectedWish = null
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
            state.error = payload || 'Ошибка при добавлении желания'
         })

         .addCase(WISH_THUNK.getWishes.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(WISH_THUNK.getWishes.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.wishes = payload
            state.error = null
         })

         .addCase(WISH_THUNK.getWishes.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload || 'Ошибка при получении списка желаний'
         })

         .addCase(WISH_THUNK.getWishById.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(WISH_THUNK.getWishById.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.selectedWish = payload
            state.error = null
         })

         .addCase(WISH_THUNK.getWishById.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload || 'Ошибка при получении желания'
         })

         .addCase(WISH_THUNK.updateWish.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(WISH_THUNK.updateWish.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.wishes = state.wishes.map((wish) =>
               wish.id === payload.id ? payload : wish
            )
            state.selectedWish = payload
            state.error = null
         })

         .addCase(WISH_THUNK.updateWish.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload || 'Ошибка при обновлении желания'
         })

         .addCase(WISH_THUNK.deleteWish.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(WISH_THUNK.deleteWish.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.wishes = state.wishes.filter((wish) => wish.id !== payload)
            if (state.selectedWish?.id === payload) {
               state.selectedWish = null
            }
            state.error = null
         })

         .addCase(WISH_THUNK.deleteWish.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload || 'Ошибка при удалении желания'
         })

         .addCase(WISH_THUNK.getHolidays.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(WISH_THUNK.getHolidays.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.holidays = payload
            state.error = null
         })

         .addCase(WISH_THUNK.getHolidays.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload || 'Ошибка при загрузке праздников'
         })
   },
})

const WISH_ACTIONS = wishSlice.WISH_ACTIONS

export { wishSlice, WISH_ACTIONS }
