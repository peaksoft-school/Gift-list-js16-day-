import { createSlice } from '@reduxjs/toolkit'
import { RIBBON_THUNK } from './RibbonThunk'

const initialState = {
   feed: [],
   feedById: [],
   loading: false,
   error: null,
}

const ribbonSlice = createSlice({
   name: 'ribbon',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(RIBBON_THUNK.getAllFeed.pending, (state) => {
            state.loading = true
         })

         .addCase(RIBBON_THUNK.getAllFeed.fulfilled, (state, { payload }) => {
            state.feed = payload.content
            state.loading = false
         })

         .addCase(RIBBON_THUNK.getAllFeed.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(RIBBON_THUNK.getFeedById.pending, (state) => {
            state.loading = true
         })

         .addCase(RIBBON_THUNK.getFeedById.fulfilled, (state, { payload }) => {
            state.feedById = payload
            state.loading = false
         })

         .addCase(RIBBON_THUNK.getFeedById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(
            RIBBON_THUNK.getUserProfile.fulfilled,
            (state, { payload }) => {
               state.feedById = payload
               state.loading = false
            }
         )

         .addCase(RIBBON_THUNK.getUserProfile.pending, (state) => {
            state.loading = true
         })

         .addCase(RIBBON_THUNK.getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(RIBBON_THUNK.addBook.fulfilled, (state) => {
            state.loading = false
         })

         .addCase(RIBBON_THUNK.addBook.rejected, (state) => {
            state.loading = false
         })

         .addCase(RIBBON_THUNK.addBook.pending, (state) => {
            state.loading = false
         })

         .addCase(RIBBON_THUNK.addGift.fulfilled, (state) => {
            state.loading = false
         })

         .addCase(RIBBON_THUNK.addGift.rejected, (state) => {
            state.loading = false
         })

         .addCase(RIBBON_THUNK.addGift.pending, (state) => {
            state.loading = false
         })
   },
})

const RIBBON_ACTIONS = ribbonSlice.RIBBON_ACTIONS

export { ribbonSlice, RIBBON_ACTIONS }
