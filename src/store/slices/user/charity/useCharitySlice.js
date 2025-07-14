import { createSlice } from '@reduxjs/toolkit'
import { USER_CHARITY_THUNK } from './userCharityThunk'

const initialState = {
   allCharity: [],
   myGifts: [],
   oneCharity: null,
   isLoading: false,
   error: null,
}

const userCharitySlice = createSlice({
   name: 'userCharity',
   initialState,
   reducers: {
      clearCharity: (state) => {
         state.allCharity = []
         state.oneCharity = null
         state.myGifts = []
         state.error = null
      },
   },
   extraReducers: (builder) => {
      const {
         getAllUserCharity,
         getById,
         deleteCharity,
         createCharity,
         updateCharity,
         addGiftToMyGifts,
         getMyCharityGifts,
      } = USER_CHARITY_THUNK

      builder
         .addCase(getAllUserCharity.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(getAllUserCharity.fulfilled, (state, action) => {
            state.isLoading = false
            state.allCharity = action.payload
         })
         .addCase(getAllUserCharity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(getById.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(getById.fulfilled, (state, action) => {
            state.isLoading = false
            state.oneCharity = action.payload
         })
         .addCase(getById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(deleteCharity.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(deleteCharity.fulfilled, (state, action) => {
            state.isLoading = false
            state.allCharity = state.allCharity.filter(
               (item) => item.id !== action.meta.arg.id
            )
         })
         .addCase(deleteCharity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(createCharity.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(createCharity.fulfilled, (state, action) => {
            state.isLoading = false
            state.allCharity.push(action.payload)
         })
         .addCase(createCharity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(updateCharity.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(updateCharity.fulfilled, (state, action) => {
            state.isLoading = false
            state.allCharity = state.allCharity.map((item) =>
               item.id === action.meta.arg.id ? action.payload : item
            )
         })
         .addCase(updateCharity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(addGiftToMyGifts.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(addGiftToMyGifts.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(addGiftToMyGifts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(getMyCharityGifts.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(getMyCharityGifts.fulfilled, (state, action) => {
            state.isLoading = false
            state.myGifts = action.payload
         })
         .addCase(getMyCharityGifts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

const CHARITY_ACTIONS = userCharitySlice.CHARITY_ACTIONS

export { userCharitySlice, CHARITY_ACTIONS }
